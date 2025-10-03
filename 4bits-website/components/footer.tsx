/**
 * Componente Footer
 *
 * Rodapé do site com informações da empresa e links
 */

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#280120] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#03b2ed]">4 Bits</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Transformando ideias em soluções tecnológicas inovadoras. Sua parceira em desenvolvimento de software.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#fd59ca]">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#03b2ed] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#03b2ed] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#03b2ed] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-[#03b2ed] transition-colors">
                  Projetos
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#fd59ca]">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>contato@4bits.com.br</li>
              <li>(11) 98765-4321</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-10 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 4 Bits. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
