"use client"

import type React from "react"

/**
 * Componente Contact
 *
 * Formulário de contato para clientes enviarem mensagens
 * Usa localStorage para armazenar as mensagens
 */

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Salvar mensagem no localStorage
    const contactMessage = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      message,
      date: new Date().toISOString(),
    }

    const existingMessages = localStorage.getItem("4bits-contacts")
    const messages = existingMessages ? JSON.parse(existingMessages) : []
    messages.push(contactMessage)
    localStorage.setItem("4bits-contacts", JSON.stringify(messages))

    // Mostrar mensagem de sucesso
    setSubmitted(true)

    // Limpar formulário
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")

    // Resetar mensagem de sucesso após 5 segundos
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#280120]">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Tem um projeto em mente? Vamos conversar!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#280120]">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#9414d1] bg-opacity-10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#9414d1]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#280120] mb-1">Email</h4>
                  <p className="text-gray-600">contato.4bitslabs@gmail.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#03b2ed] bg-opacity-10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#03b2ed]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#280120] mb-1">Telefone</h4>
                  <a href="">
                    <p className="text-gray-600">(35) 9989-2814</p>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#fd59ca] bg-opacity-10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#fd59ca]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#280120] mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Monsenhor Paulo - MG
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#9414d1] to-[#280120] rounded-xl text-white">
              <h4 className="font-bold text-lg mb-2">Horário de Atendimento</h4>
              <p className="text-sm text-white text-opacity-90">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 13h
              </p>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-[#280120]">Envie sua Mensagem</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Nome *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9414d1]"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9414d1]"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9414d1]"
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Mensagem *</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9414d1]"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#9414d1] text-white rounded-lg font-semibold hover:bg-[#7a0fb0] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
