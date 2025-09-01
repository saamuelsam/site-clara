import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/entities/Testimonial";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  const loadTestimonials = async () => {
    try {
      const data = await Testimonial.filter({ is_featured: true }, '-created_date');
      setTestimonials(data);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    }
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 gradient-teal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            A confiança e satisfação de nossos pacientes são nosso maior orgulho
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative mb-8">
                <Quote className="w-16 h-16 text-teal-300/50 mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                  "{currentTestimonial.review_text}"
                </p>
              </div>

              <div className="flex justify-center items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentTestimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-teal-300"
                    }`}
                  />
                ))}
              </div>

              <div className="text-teal-100">
                <div className="font-semibold text-lg text-white mb-1">
                  {currentTestimonial.client_name}
                </div>
                <div className="text-sm">
                  {currentTestimonial.service_received}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-white scale-125" : "bg-teal-300/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}