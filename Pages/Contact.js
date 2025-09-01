import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Mensagem enviada com sucesso! Retornaremos em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-teal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Entre em Contato
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed"
          >
            Estamos aqui para esclarecer suas dúvidas e ajudá-la no caminho da sua transformação
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Envie uma Mensagem
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Preencha o formulário abaixo e nossa equipe retornará o contato em até 24 horas 
                para esclarecer suas dúvidas e agendar sua consulta.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Conte-nos sobre suas necessidades e objetivos..."
                    className="w-full min-h-32 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="gradient-gold text-white w-full hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nossa clínica está localizada em uma região privilegiada, com fácil acesso 
                  e estacionamento disponível para sua comodidade.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Rua das Flores, 123 - Conjunto 45<br />
                      Vila Olímpia, São Paulo - SP<br />
                      CEP: 04551-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Telefones</h3>
                    <p className="text-gray-600">
                      (11) 99999-9999 (WhatsApp)<br />
                      (11) 3333-4444 (Fixo)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-600">
                      contato@esteticaavancada.com<br />
                      agendamento@esteticaavancada.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda à Sexta: 8:00 às 18:00<br />
                      Sábados: 8:00 às 14:00<br />
                      Domingos: Fechado
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Atendimento via WhatsApp</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Para maior agilidade, entre em contato conosco pelo WhatsApp. 
                  Respondemos rapidamente suas dúvidas e agendamos sua consulta.
                </p>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-gray-600">
              Venha nos conhecer pessoalmente em nossa clínica
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-200 flex items-center justify-center"
          >
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Mapa interativo seria integrado aqui</p>
              <p className="text-sm">Rua das Flores, 123 - Vila Olímpia, São Paulo</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}