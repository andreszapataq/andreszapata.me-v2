"'use client'"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter, Code, Database, Server, PaintBucket, Cloud } from "lucide-react"
import Link from "next/link"

export function Portfolio() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Developer Portfolio</span>
          <span className="font-bold text-xl">DevPortfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#work">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to My Developer Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {`I'm a full-stack developer passionate about creating innovative web solutions. Explore my skills,
                  projects, and get in touch!`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "JavaScript", icon: Code },
                { name: "React", icon: Code },
                { name: "Node.js", icon: Server },
                { name: "MongoDB", icon: Database },
                { name: "Tailwind", icon: PaintBucket },
                { name: "AWS", icon: Cloud },
              ].map((skill) => (
                <div key={skill.name} className="flex flex-col items-center space-y-2">
                  <skill.icon className="w-12 h-12" />
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Work & Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Project A", logo: "/placeholder.svg", description: "A revolutionary web app" },
                { name: "Client B", logo: "/placeholder.svg", description: "E-commerce platform" },
                { name: "Product C", logo: "/placeholder.svg", description: "AI-powered analytics tool" },
                { name: "Service D", logo: "/placeholder.svg", description: "Cloud-based SaaS solution" },
              ].map((project) => (
                <Link key={project.name} href="#" className="block">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <img
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
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{project.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Contact us
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold">Our email</h3>
                <Button className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  andreszapataq@gmail.com
                </Button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl font-semibold">Maybe...</p>
              </div>
              <div className="flex-1 w-full space-y-4">
                <h3 className="text-xl font-semibold">{`You'd like to complete this form`}</h3>
                <form className="space-y-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                  <Textarea placeholder="Your message" />
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
        <p className="text-xs text-gray-500 dark:text-gray-400">© {currentYear} DevPortfolio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-4 w-4" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            <span className="sr-only">GitHub</span>
            <Github className="h-4 w-4" />
          </Link>
        </nav>
      </footer>
    </div>
  )
}