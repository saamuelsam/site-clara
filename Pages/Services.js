import React from "react";
import { Sparkles, Zap, Heart, Star, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sparkles,
    title: "Botox & Preenchimentos",
    subtitle: "Suavização de rugas e rejuvenescimento facial",
    description: "Tratamentos com toxina botulínica e ácido hialurônico para suavizar rugas, linhas de expressão e restaurar volume facial de forma natural e segura.",
    benefits: [
      "Suavização de rugas dinâmicas",
      "Prevenção do envelhecimento",
      "Resultados naturais e duradouros",
      "Procedimento rápido e seguro",
      "Sem tempo de recuperação"
    ],
    duration: "30-60 minutos",
    results: "Visíveis em 3-7 dias",
    maintenance: "4-6 meses",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Zap,
    title: "Tratamentos a Laser",
    subtitle: "Rejuvenescimento e renovação celular",
    description: "Tecnologia laser de última geração para tratamento de manchas, cicatrizes, linhas finas e rejuvenescimento geral da pele com mínimo desconforto.",
    benefits: [
      "Renovação celular profunda",
      "Melhora de manchas e melasma",
      "Redução de cicatrizes de acne",
      "Estímulo à produção de colágeno",
      "Uniformização do tom da pele"
    ],
    duration: "45-90 minutos",
    results: "Progressivos em 2-4 semanas",
    maintenance: "3-4 sessões",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Heart,
    title: "Peelings Químicos",
    subtitle: "Renovação e revitalização da pele",
    description: "Peelings personalizados com diferentes profundidades para renovar a pele, melhorar textura, reduzir manchas e promover luminosidade natural.",
    benefits: [
      "Renovação da camada superficial",
      "Melhora da textura da pele",
      "Redução de manchas e hiperpigmentação",
      "Estímulo à renovação celular",
      "Pele mais luminosa e uniforme"
    ],
    duration: "30-45 minutos",
    results: "Visíveis em 7-14 dias",
    maintenance: "4-6 sessões",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Star,
    title: "Microagulhamento",
    subtitle: "Estímulo natural do colágeno",
    description: "Técnica que estimula a produção natural de colágeno através de microlesões controladas, melhorando firmeza, textura e aparência geral da pele.",
    benefits: [
      "Estímulo natural do colágeno",
      "Melhora de cicatrizes e estrias",
      "Redução de poros dilatados",
      "Aumento da firmeza da pele",
      "Melhora da absorção de ativos"
    ],
    duration: "60-90 minutos",
    results: "Progressivos em 4-6 semanas",
    maintenance: "3-6 sessões",
    image: "https://images.unsplash.com/photo-1616391018661-8d5e2b6e96c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Services() {
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
            Nossos Tratamentos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed"
          >
            Descubra nossa gama completa de tratamentos estéticos, desenvolvidos com as mais 
            avançadas tecnologias e sempre priorizando sua segurança e satisfação.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 text-lg">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="font-semibold text-gray-900 text-lg">Benefícios:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 mb-1">Duração</div>
                        <div className="text-sm text-gray-600">{service.duration}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 mb-1">Resultados</div>
                        <div className="text-sm text-gray-600">{service.results}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 mb-1">Manutenção</div>
                        <div className="text-sm text-gray-600">{service.maintenance}</div>
                      </div>
                    </div>
                    
                    <Link to={createPageUrl("BookAppointment")}>
                      <Button size="lg" className="gradient-gold text-white hover:opacity-90 transition-opacity">
                        <Calendar className="w-5 h-5 mr-2" />
                        Agendar Avaliação
                      </Button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={!isEven ? "lg:col-start-1" : ""}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Não Sabe Qual Tratamento é Ideal Para Você?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Agende uma consulta gratuita e personalizaremos um plano de tratamento 
              específico para suas necessidades e objetivos.
            </p>
            <Link to={createPageUrl("BookAppointment")}>
              <Button size="lg" className="gradient-gold text-white px-8 hover:opacity-90 transition-opacity">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta Gratuita
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}