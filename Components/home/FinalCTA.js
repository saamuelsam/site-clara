import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronta Para Se Sentir
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400"> Ainda Mais Bela?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Dê o primeiro passo rumo à sua transformação. Agende uma consulta gratuita 
            e descubra como podemos realçar sua beleza natural com segurança e excelência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to={createPageUrl("BookAppointment")}>
              <Button size="lg" className="gradient-gold text-white px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta Gratuita
              </Button>
            </Link>
            
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+5511999999999" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </a>
              
              <a 
                href="mailto:contato@esteticaavancada.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@esteticaavancada.com</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Consulta Gratuita</h3>
              <p className="text-gray-400 text-sm">
                Avaliação completa sem compromisso para entender suas necessidades
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-400 text-sm">
                Cada tratamento é único e desenvolvido especialmente para você
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Suporte Completo</h3>
              <p className="text-gray-400 text-sm">
                Acompanhamento pós-procedimento para garantir os melhores resultados
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}