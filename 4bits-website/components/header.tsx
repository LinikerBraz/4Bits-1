/**
 * Componente Header
 *
 * Seção hero com imagem de fundo, título e texto de apresentação
 * Design responsivo com overlay para melhor legibilidade do texto
 */

export default function Header() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage:
          "url(/placeholder.svg?height=1080&width=1920&query=modern+technology+workspace+with+computers+and+code)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay escuro para melhor contraste */}
      <div className="absolute inset-0 bg-[#601191] bg-opacity-80">
        <img src="/fundo-abstrato-com-design-baixo-poli.jpg" alt="" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Bem-vindo à <span className="text-[#03b2ed]">4 Bits</span>
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed text-pretty">
          Transformamos ideias em soluções tecnológicas inovadoras. Somos especialistas em desenvolvimento de software,
          criando experiências digitais que impulsionam seu negócio.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 bg-[#9414d1] text-white rounded-lg font-semibold hover:bg-[#7a0fb0] transition-colors duration-300"
          >
            Nossos Serviços
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-[#03b2ed] text-white rounded-lg font-semibold hover:bg-[#0296c9] transition-colors duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </header>
  )
}
