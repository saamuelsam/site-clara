import React from "react";
import { Award, GraduationCap, Users, Heart, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-br from-teal-600 to-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Nossa História
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-teal-100 max-w-3xl"
          >
            Dedicação, experiência e paixão pela medicina estética
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dra. Ana Especialista
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-teal-600"> em Medicina Estética</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Com mais de 5 anos de dedicação à medicina estética, Dra. Ana combina 
                  conhecimento científico avançado com sensibilidade artística para criar 
                  resultados excepcionais e naturais.
                </p>
                
                <p>
                  Formada em Medicina pela Universidade de São Paulo (USP), especializou-se 
                  em Dermatologia e posteriormente aprofundou seus conhecimentos em medicina 
                  estética através de cursos internacionais na Europa e Estados Unidos.
                </p>
                
                <p>
                  Sua filosofia baseia-se na crença de que cada pessoa possui uma beleza única, 
                  e seu papel é realçar essa beleza natural através de técnicas minimamente 
                  invasivas e seguras, sempre respeitando a individualidade de cada paciente.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dra. Ana - Especialista em Medicina Estética"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: GraduationCap,
                title: "Formação Acadêmica",
                description: "Graduação em Medicina pela USP, Especialização em Dermatologia pelo Hospital das Clínicas",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Award,
                title: "Certificações",
                description: "Certificações internacionais em Botox, Preenchimentos e Tratamentos a Laser pela ASLMS",
                color: "bg-yellow-50 text-yellow-600"
              },
              {
                icon: Sparkles,
                title: "Especialização",
                description: "Cursos avançados em Paris, Londres e Miami em técnicas de rejuvenescimento facial",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Users,
                title: "Experiência",
                description: "Mais de 500 procedimentos realizados com 98% de satisfação entre pacientes",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: Heart,
                title: "Filosofia",
                description: "Acredita na beleza natural e na importância da autoestima para o bem-estar completo",
                color: "bg-red-50 text-red-600"
              },
              {
                icon: Shield,
                title: "Segurança",
                description: "Prioriza sempre a segurança, utilizando apenas produtos aprovados pela ANVISA",
                color: "bg-teal-50 text-teal-600"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Clinic Environment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nosso Ambiente
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Um espaço cuidadosamente projetado para proporcionar conforto, privacidade 
              e tranquilidade durante todos os seus tratamentos.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Sala de Tratamentos"
                },
                {
                  image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Recepção Acolhedora"
                },
                {
                  image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Equipamentos Modernos"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}