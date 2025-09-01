import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, Award, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-amber-50/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">Medicina Estética Certificada</span>
              </div>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Beleza Natural,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-teal-600"> Resultados </span>
              Excepcionais
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Descubra o melhor de você com nossos tratamentos estéticos personalizados. 
              Combinamos técnicas avançadas com cuidado humano para realçar sua beleza única.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={createPageUrl("BookAppointment")}>
                <Button size="lg" className="gradient-gold text-white px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta Gratuita
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 text-lg hover:bg-gray-900 hover:text-white transition-all"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Nossos Tratamentos
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Pacientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Índice de Satisfação</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional aesthetic treatment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <Heart className="w-8 h-8 text-red-500" />
                <div>
                  <div className="font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-600">Segurança</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}