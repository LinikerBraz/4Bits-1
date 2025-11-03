/**
 * Componente About
 *
 * Seção sobre a empresa com descrição detalhada
 * Inclui missão, visão, valores e diferenciais da 4 Bits
 * Layout aprimorado com cards visuais e estatísticas
 */

import { Code2, Users, Zap, Award, Target, Eye, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[url('/background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#03b2ed] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fd59ca] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sobre a 4 Bits</h2>
            <p className="text-xl text-[#03b2ed] font-medium">
              Transformando ideias em soluções tecnológicas inovadoras
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-black mb-12 border border-white border-opacity-20">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
            A <strong className="text-[#03b2ed]">4 Bits</strong> é uma empresa de tecnologia criada por quatro profissionais apaixonados por inovação. Nosso foco é transformar ideias em soluções digitais personalizadas que impulsionam o crescimento dos clientes.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Desenvolvemos aplicações web, mobile e sistemas corporativos com alta performance, usando tecnologias modernas e boas práticas para garantir segurança, escalabilidade e fácil manutenção.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Acreditamos em tecnologia acessível e útil. Atuamos próximos aos clientes, entendendo seus desafios para entregar soluções que realmente fazem a diferença.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-[#fd59ca]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#fd59ca]">Missão</h3>
              <p className="text-base leading-relaxed">
                Desenvolver soluções tecnológicas inovadoras e personalizadas que impulsionem o crescimento e a
                transformação digital dos nossos clientes.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Eye className="w-12 h-12 text-[#03b2ed]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#03b2ed]">Visão</h3>
              <p className="text-base leading-relaxed">
                Ser referência nacional em desenvolvimento de software, reconhecida pela excelência técnica, inovação e
                compromisso com resultados.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-[#fd59ca]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#fd59ca]">Valores</h3>
              <p className="text-base leading-relaxed">
                Excelência técnica, inovação constante, transparência nas relações, compromisso com prazos e satisfação
                do cliente.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#03b2ed] to-[#9414d1] rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-10 text-white">Nossos Diferenciais</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Código Limpo</h4>
                <p className="text-sm text-white text-opacity-90">
                  Seguimos as melhores práticas de desenvolvimento para código legível e manutenível.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Alta Performance</h4>
                <p className="text-sm text-white text-opacity-90">
                  Otimizamos cada linha de código para garantir aplicações rápidas e eficientes.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Suporte Dedicado</h4>
                <p className="text-sm text-white text-opacity-90">
                  Acompanhamento contínuo e suporte técnico para garantir o sucesso do seu projeto.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Qualidade Garantida</h4>
                <p className="text-sm text-white text-opacity-90">
                  Testes rigorosos e controle de qualidade em todas as etapas do desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
