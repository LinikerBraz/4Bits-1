/**
 * Componente Features
 *
 * Exibe as principais características e diferenciais da empresa
 * Layout em grid responsivo com ícones e descrições
 */

import { Zap, Shield, Users, Rocket } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Agilidade",
      description: "Desenvolvimento rápido e eficiente com metodologias ágeis para entregar resultados no prazo.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Segurança",
      description: "Código seguro e confiável seguindo as melhores práticas de desenvolvimento e proteção de dados.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Suporte Dedicado",
      description: "Equipe sempre disponível para atender suas necessidades e garantir o sucesso do projeto.",
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Inovação",
      description: "Utilizamos as tecnologias mais modernas para criar soluções inovadoras e escaláveis.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#280120]">Por que escolher a 4 Bits?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Nossos diferenciais que fazem a diferença no seu projeto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-gray-200 hover:border-[#9414d1] transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-[#9414d1] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#280120]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
