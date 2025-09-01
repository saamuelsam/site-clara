import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Award, GraduationCap, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dra. Especialista em Medicina Estética"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">500+</div>
                  <div className="text-sm text-gray-600">Procedimentos realizados</div>
                  <div className="text-xs text-yellow-600 font-medium mt-1">Este ano</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
                Sobre a Especialista
              </span>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experiência e Cuidado em 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-teal-600"> Cada Detalhe</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com mais de 5 anos de experiência em medicina estética, nossa especialista 
              combina técnicas avançadas com um olhar artístico único, sempre priorizando 
              resultados naturais e a satisfação de cada paciente.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Formação Especializada</h3>
                  <p className="text-gray-600">
                    Medicina pela USP, especialização em Dermatologia e certificações internacionais 
                    em medicina estética.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Atendimento Personalizado</h3>
                  <p className="text-gray-600">
                    Cada tratamento é cuidadosamente planejado considerando as características 
                    únicas e objetivos de cada paciente.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Resultados Comprovados</h3>
                  <p className="text-gray-600">
                    Mais de 500 procedimentos realizados com 98% de índice de satisfação 
                    entre nossos pacientes.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to={createPageUrl("About")}>
              <Button size="lg" variant="outline" className="group border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all px-8">
                Conheça Nossa História
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}