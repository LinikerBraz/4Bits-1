/**
 * Componente Team
 *
 * Apresentação dos 4 membros da equipe
 * Cards com foto, nome, cargo e descrição
 */

export default function Team() {
  const team = [
    {
      name: "Luiz Lininker",
      role: "CEO & Front-End Developer",
      image: "/luiz.jpeg",
      description: "Especialista em arquitetura de software com 8 anos de experiência em desenvolvimento web.",
    },
    {
      name: "Caio Lima",
      role: "CTO & Backend Developer",
      image: "/caio.jpeg",
      description: "Expert em sistemas escaláveis e cloud computing, apaixonado por otimização de performance.",
    },
    {
      name: "Matheus Bento",
      role: "Frontend Developer & Designer",
      image: "/matheus.jpeg",
      description: "Criativa e detalhista, transforma ideias em interfaces incríveis e intuitivas.",
    },
    {
      name: "Glauber Ribeiro",
      role: "Mobile Developer & DevOps",
      image: "/glauber.jpeg",
      description: "Especialista em desenvolvimento mobile e automação de processos de deploy.",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-[#9414d1] to-[#280120]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Nossa Equipe</h2>
        <p className="text-center text-white text-opacity-90 mb-12 max-w-2xl mx-auto text-lg">
          Conheça os profissionais que fazem a 4 Bits acontecer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#280120]">{member.name}</h3>
                <p className="text-[#9414d1] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
