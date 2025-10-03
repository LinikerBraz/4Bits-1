"use client"

import type React from "react"

/**
 * Componente Reviews
 *
 * Exibe avaliações de clientes e permite adicionar novas avaliações
 * Usa localStorage para persistir as avaliações
 */

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

interface Review {
  id: string
  name: string
  company: string
  rating: number
  comment: string
  date: string
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")
  const [showForm, setShowForm] = useState(false)

  // Carregar avaliações do localStorage ao montar o componente
  useEffect(() => {
    const savedReviews = localStorage.getItem("4bits-reviews")
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews))
    } else {
      // Avaliações iniciais de exemplo
      const initialReviews: Review[] = [
        {
          id: "1",
          name: "João Mendes",
          company: "Tech Solutions",
          rating: 5,
          comment:
            "Excelente trabalho! A equipe da 4 Bits entregou nosso projeto antes do prazo e com qualidade excepcional.",
          date: new Date().toLocaleDateString("pt-BR"),
        },
        {
          id: "2",
          name: "Maria Fernandes",
          company: "Digital Store",
          rating: 5,
          comment: "Profissionais muito competentes. Nosso e-commerce ficou incrível e as vendas aumentaram 200%!",
          date: new Date().toLocaleDateString("pt-BR"),
        },
      ]
      setReviews(initialReviews)
      localStorage.setItem("4bits-reviews", JSON.stringify(initialReviews))
    }
  }, [])

  // Função para adicionar nova avaliação
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newReview: Review = {
      id: Date.now().toString(),
      name,
      company,
      rating,
      comment,
      date: new Date().toLocaleDateString("pt-BR"),
    }

    const updatedReviews = [newReview, ...reviews]
    setReviews(updatedReviews)
    localStorage.setItem("4bits-reviews", JSON.stringify(updatedReviews))

    // Limpar formulário
    setName("")
    setCompany("")
    setRating(5)
    setComment("")
    setShowForm(false)
  }

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#280120]">Avaliações dos Clientes</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Veja o que nossos clientes dizem sobre nosso trabalho
        </p>

        {/* Botão para mostrar formulário */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-3 bg-[#9414d1] text-white rounded-lg font-semibold hover:bg-[#7a0fb0] transition-colors duration-300"
          >
            {showForm ? "Cancelar" : "Adicionar Avaliação"}
          </button>
        </div>

        {/* Formulário de nova avaliação */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#280120]">Deixe sua avaliação</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Nome *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9414d1]"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Empresa *</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9414d1]"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Avaliação *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
                      <Star
                        className={`w-8 h-8 ${star <= rating ? "fill-[#fd59ca] text-[#fd59ca]" : "text-gray-300"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Comentário *</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9414d1]"
                  placeholder="Conte-nos sobre sua experiência..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#03b2ed] text-white rounded-lg font-semibold hover:bg-[#0296c9] transition-colors duration-300"
              >
                Enviar Avaliação
              </button>
            </form>
          </div>
        )}

        {/* Lista de avaliações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= review.rating ? "fill-[#fd59ca] text-[#fd59ca]" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">"{review.comment}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#280120]">{review.name}</p>
                <p className="text-sm text-gray-600">{review.company}</p>
                <p className="text-xs text-gray-400 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
