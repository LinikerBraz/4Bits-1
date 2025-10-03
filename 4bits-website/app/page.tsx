/**
 * Página principal do site 4 Bits
 *
 * Este componente renderiza todas as seções do site:
 * - Navbar com gradiente
 * - Header com imagem e apresentação
 * - Características da empresa
 * - Sobre a empresa
 * - Serviços oferecidos
 * - Projetos realizados
 * - Equipe
 * - Avaliações de clientes
 * - Formulário de contato
 */

import Navbar from "@/components/navbar"
import Header from "@/components/header"
import Features from "@/components/features"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Team from "@/components/team"
import Reviews from "@/components/reviews"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Header />
      <Features />
      <About />
      <Services />
      <Projects />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
