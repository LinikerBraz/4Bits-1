/**
 * Componente Projects
 *
 * Galeria de projetos realizados pela empresa
 * Cards com imagens e descrições dos projetos
 */

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Fashion",
      description: "Plataforma completa de vendas online com sistema de pagamento integrado e gestão de estoque.",
      image: "/modern-ecommerce-fashion-website.jpg",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "App de Delivery",
      description:
        "Aplicativo mobile para delivery de alimentos com rastreamento em tempo real e múltiplas formas de pagamento.",
      image: "/food-delivery-app.png",
      tags: ["React Native", "Firebase", "Maps API"],
    },
    {
      title: "Sistema ERP",
      description: "Sistema de gestão empresarial completo para controle financeiro, estoque e recursos humanos.",
      image: "/business-erp-dashboard-interface.jpg",
      tags: ["Next.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Portal Educacional",
      description:
        "Plataforma de ensino à distância com videoaulas, exercícios interativos e acompanhamento de progresso.",
      image: "/online-education-learning-platform.jpg",
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "App de Fitness",
      description: "Aplicativo para acompanhamento de treinos, dieta e evolução física com integração a wearables.",
      image: "/fitness-workout-tracking-app.jpg",
      tags: ["Flutter", "Python", "TensorFlow"],
    },
    {
      title: "Dashboard Analytics",
      description:
        "Painel de análise de dados em tempo real com visualizações interativas e relatórios personalizados.",
      image: "/data-analytics-dashboard.png",
      tags: ["React", "D3.js", "GraphQL"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#280120]">Projetos Realizados</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Conheça alguns dos projetos que desenvolvemos com excelência
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#280120]">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#9414d1] bg-opacity-10 text-[#9414d1] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
