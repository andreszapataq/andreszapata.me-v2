import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting simple en memoria (en producción usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // 3 emails por IP por hora
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora en ms

// Función para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para detectar spam en el contenido
function isSpamContent(content: string): boolean {
  const spamPatterns = [
    /^[a-zA-Z]{8,}$/, // Solo letras aleatorias
    /^[a-zA-Z0-9]{10,}$/, // Caracteres alfanuméricos aleatorios
    /(viagra|casino|lottery|winner|click here)/i, // Palabras spam comunes
  ];
  
  return spamPatterns.some(pattern => pattern.test(content));
}

// Función para rate limiting
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

export async function POST(request: Request) {
  // Obtener IP del cliente
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  
  // Verificar rate limiting
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const formData = await request.formData();
  
  // Validar campos requeridos
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const message = formData.get('message')?.toString().trim();
  const honeypot = formData.get('website'); // Campo honeypot
  
  // Verificar honeypot (debe estar vacío)
  if (honeypot) {
    return NextResponse.json({ success: true }); // Fingir éxito para bots
  }
  
  // Validaciones básicas
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }
  
  // Validar longitud mínima
  if (name.length < 2 || message.length < 10) {
    return NextResponse.json(
      { error: 'Message too short' },
      { status: 400 }
    );
  }
  
  // Validar email
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }
  
  // Detectar spam
  if (isSpamContent(name) || isSpamContent(message)) {
    return NextResponse.json({ success: true }); // Fingir éxito para spam
  }
  
  // Verificar variables de entorno
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_RECEIVER) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }
  
  // Configurar transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nuevo mensaje de ${name} (${email})`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
        
        IP: ${ip}
        Timestamp: ${new Date().toISOString()}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}