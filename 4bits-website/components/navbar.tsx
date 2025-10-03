"use client"

/**
 * Componente Navbar
 *
 * Barra de navegação fixa no topo com gradiente personalizado
 * Responsivo com menu hambúrguer em dispositivos móveis
 * Links de navegação suave para todas as seções
 */

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Links de navegação para as seções
  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#features", label: "Características" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#projects", label: "Projetos" },
    { href: "#team", label: "Equipe" },
    { href: "#reviews", label: "Avaliações" },
    { href: "#contact", label: "Contato" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
      style={{
        background: "linear-gradient(to right, #002d72, #573894, #91459e, #00846e)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image src="/logo.png" alt="4 Bits Logo" width={50} height={50} className="object-contain" />
            <span className="text-white text-2xl font-bold">4 Bits</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#03b2ed] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-[#03b2ed] py-2 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
