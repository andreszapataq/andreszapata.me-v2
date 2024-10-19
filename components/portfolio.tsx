"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, Card } from "@/components/ui/card";
import { Mail, Menu, X } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiAmazonwebservices,
  SiX,
  SiLinkedin,
  SiGithub,
  SiAstro,
  SiWordpress,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Andres Zapata</span>
          <span className="font-bold text-xl">andreszapata.me</span>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#work"
          >
            Work
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 z-50 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
          <nav className="mt-8 flex flex-col gap-4">
            <Link
              className="text-lg font-medium hover:text-primary transition-colors duration-200"
              href="#skills"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              className="text-lg font-medium hover:text-primary transition-colors duration-200"
              href="#work"
              onClick={toggleMenu}
            >
              Work
            </Link>
            <Link
              className="text-lg font-medium hover:text-primary transition-colors duration-200"
              href="#contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Say Hello To My Developer Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {`I really enjoy designing, developing software and bringing interesting projects to life. Explore my skills,
                  products, and get in touch!`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-2 group"
                >
                  <skill.icon
                    className="w-12 h-12 transition-all duration-300 group-hover:scale-125 text-gray-600 group-hover:text-[color:var(--icon-color)]"
                    style={
                      { "--icon-color": skill.color } as React.CSSProperties
                    }
                  />
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Work & Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Jhonny Aponza",
                  logo: "/images/jhonny-aponza.svg",
                  description: "Keynote Speaker Website",
                  href: "https://jhonnyaponza.org/",
                  tech: { name: "Astro", icon: SiAstro },
                },
                {
                  name: "Dr. Mario Marín",
                  logo: "/images/mario-marin.svg",
                  description: "MD, Spine Surgeon Website",
                  href: "https://doctormariomarintroncoso.com/",
                  tech: { name: "WordPress", icon: SiWordpress },
                },
                {
                  name: "NAB Tax Services",
                  logo: "/images/nab.svg",
                  description: "Tax Firm Website",
                  href: "https://nabtaxservices.com/",
                  tech: { name: "Astro", icon: SiAstro },
                },
                {
                  name: "Vive Solutions",
                  logo: "/images/vive-solutions.svg",
                  description: "Medical Devices Website",
                  href: "https://vivesolutions.co/",
                  tech: { name: "WordPress", icon: SiWordpress },
                },/* 
                {
                  name: "Zanto",
                  logo: "/images/zanto.svg",
                  description: "Our clothing brand",
                  href: "https://gustavozapata.me/",
                  tech: { name: "Love", icon: Heart },
                }, */
              ].map((project) => (
                <Link
                  key={project.name}
                  className="block"
                  href={project.href}
                  target="_blank"
                >
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <Image
                        alt={`${project.name} logo`}
                        className="w-24 h-24 object-contain"
                        height="96"
                        src={project.logo}
                        style={{
                          aspectRatio: "96/96",
                          objectFit: "contain",
                        }}
                        width="96"
                      />
                      <h3 className="font-bold text-xl">{project.name}</h3>
                      <p className="text-sm text-center">
                        {project.description}
                      </p>
                      {project.tech && (
                        <div className="flex items-center space-x-2">
                          <project.tech.icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {project.tech.name}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Contact us
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold">Our email</h3>
                <Button className="w-full" size="lg" asChild>
                  <a href="mailto:contacto@andreszapata.me">
                    <Mail className="mr-2 h-4 w-4" />
                    contacto@andreszapata.me
                  </a>
                </Button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl font-semibold">Or maybe...</p>
              </div>
              <div className="flex-1 w-full space-y-4">
                <h3 className="text-xl font-semibold">{`You'd like to complete this form`}</h3>
                <form
                  className="space-y-4"
                  action="https://formspree.io/f/mwkdjvpj"
                  method="POST"
                >
                  <Input placeholder="Name" type="text" name="name" required />
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                  <Textarea placeholder="Your message" name="message" />
                  <Button className="w-full" type="submit">
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {currentYear} andreszapata.me All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://twitter.com/andreszapataq"
            target="_blank"
          >
            <span className="sr-only">Twitter</span>
            <SiX className="h-4 w-4" />
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/andreszapataq/"
            target="_blank"
          >
            <span className="sr-only">LinkedIn</span>
            <SiLinkedin className="h-4 w-4" />
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/andreszapataq"
            target="_blank"
          >
            <span className="sr-only">GitHub</span>
            <SiGithub className="h-4 w-4" />
          </Link>
        </nav>
      </footer>
    </div>
  );
}
