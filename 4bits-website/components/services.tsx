/**
 * Componente Services
 *
 * Exibe os serviços oferecidos pela empresa em cards
 * Layout responsivo com hover effects
 */

import { Code, Smartphone, Cloud, Database, Palette, Cog } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web modernas, responsivas e otimizadas para performance.",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Aplicativos Mobile",
      description: "Desenvolvimento de apps nativos e híbridos para iOS e Android com experiência excepcional.",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Soluções em Nuvem",
      description: "Migração e implementação de sistemas em cloud computing para escalabilidade e segurança.",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Banco de Dados",
      description: "Modelagem, otimização e gerenciamento de bancos de dados relacionais e NoSQL.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e atraentes focadas na experiência do usuário.",
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Consultoria Tech",
      description: "Consultoria especializada para escolha de tecnologias e arquitetura de sistemas.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#280120]">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Soluções completas em tecnologia para impulsionar seu negócio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#9414d1]"
            >
              <div className="text-[#03b2ed] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#280120]">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
