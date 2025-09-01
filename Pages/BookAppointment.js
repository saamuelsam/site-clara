import React, { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageCircle, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Appointment } from "@/entities/Appointment";
import { motion } from "framer-motion";

const services = [
  { value: "consultation", label: "Consulta de Avaliação (Gratuita)" },
  { value: "botox", label: "Botox & Preenchimentos" },
  { value: "dermal_fillers", label: "Preenchimento com Ácido Hialurônico" },
  { value: "chemical_peels", label: "Peelings Químicos" },
  { value: "laser_treatment", label: "Tratamentos a Laser" },
  { value: "microneedling", label: "Microagulhamento" }
];

export default function BookAppointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferred_date: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await Appointment.create(formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Erro ao agendar consulta. Tente novamente.");
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
            Agendamento Realizado!
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Recebemos seu pedido de agendamento. Nossa equipe entrará em contato em até 24 horas 
            para confirmar sua consulta.
          </p>
          
          <div className="space-y-3 mb-8">
            <Button 
              onClick={() => navigate(createPageUrl("Home"))}
              className="w-full gradient-gold text-white"
            >
              Voltar ao Início
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  service: "",
                  preferred_date: "",
                  message: ""
                });
              }}
              className="w-full"
            >
              Agendar Outra Consulta
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Dúvidas? Entre em contato: <br />
            <span className="font-medium">(11) 99999-9999</span>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <div className="text-center">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900">
              Agendar Consulta
            </h1>
            <p className="text-gray-600 mt-1">Preencha os dados abaixo</p>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Form */}
      <div className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Form Header */}
            <div className="gradient-gold p-8 text-white text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Consulta Gratuita</h2>
              <p className="text-teal-100">
                Avaliação personalizada sem compromisso
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Nome completo *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    Data preferida
                  </label>
                  <Input
                    type="date"
                    value={formData.preferred_date}
                    onChange={(e) => handleInputChange("preferred_date", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Tratamento de interesse
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o tratamento desejado" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Mensagem adicional
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Conte-nos sobre suas expectativas, dúvidas ou necessidades específicas..."
                  className="min-h-32 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full gradient-gold text-white text-lg py-4 hover:opacity-90 transition-all transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <Calendar className="w-6 h-6 mr-2" />
                )}
                {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
              </Button>

              {/* Info Box */}
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">O que esperar?</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Consulta gratuita de 30-45 minutos</li>
                      <li>• Avaliação personalizada das suas necessidades</li>
                      <li>• Plano de tratamento customizado</li>
                      <li>• Esclarecimento de todas suas dúvidas</li>
                      <li>• Sem compromisso de contratação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}