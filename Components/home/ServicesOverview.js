import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sparkles, Zap, Heart, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sparkles,
    title: "Botox & Preenchimentos",
    description: "Suavização de rugas e linhas de expressão com técnicas precisas e resultados naturais.",
    benefits: ["Efeito natural", "Procedimento rápido", "Sem tempo de inatividade"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: Zap,
    title: "Tratamentos a Laser",
    description: "Rejuvenescimento facial com tecnologia laser de última geração para renovação celular.",
    benefits: ["Tecnologia avançada", "Resultados duradouros", "Mínimo desconforto"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: Heart,
    title: "Peelings Químicos",
    description: "Renovação da pele através de peelings personalizados para cada tipo de pele.",
    benefits: ["Pele renovada", "Textura melhorada", "Manchas reduzidas"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: Star,
    title: "Microagulhamento",
    description: "Estimulação natural do colágeno para uma pele mais firme, lisa e rejuvenescida.",
    benefits: ["Produção de colágeno", "Cicatrizes amenizadas", "Pele mais firme"],
    image: "https://images.unsplash.com/photo-1616391018661-8d5e2b6e96c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Tratamentos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de tratamentos estéticos com as mais avançadas 
            tecnologias, sempre priorizando sua segurança e satisfação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={createPageUrl("Services")}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group hover:bg-yellow-600 hover:text-white hover:border-yellow-600 transition-all"
                    >
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to={createPageUrl("Services")}>
            <Button size="lg" className="gradient-gold text-white px-8 hover:opacity-90 transition-opacity">
              Ver Todos os Tratamentos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}