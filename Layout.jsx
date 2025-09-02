import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import './styles/global.css';

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Início", path: createPageUrl("Home") },
    { name: "Sobre", path: createPageUrl("About") },
    { name: "Tratamentos", path: createPageUrl("Services") },
    { name: "Contato", path: createPageUrl("Contact") },
  ];

  const isActivePage = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary-gold: #D4AF37;
          --primary-teal: #4A9B9B;
          --soft-cream: #FBF9F6;
          --warm-white: #FEFCF9;
          --charcoal: #2D2D2D;
          --soft-gray: #8A8A8A;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .gradient-gold {
          background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
        }
        
        .gradient-teal {
          background: linear-gradient(135deg, #4A9B9B 0%, #3A7B7B 100%);
        }

        .hero-gradient {
          background: linear-gradient(135deg, rgba(74, 155, 155, 0.05) 0%, rgba(212, 175, 55, 0.03) 100%);
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">EA</span>
              </div>
              <div>
                <div className="font-playfair text-xl font-bold text-gray-900">Estética Avançada</div>
                <div className="text-xs text-gray-500 -mt-1">Medicina Estética</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-yellow-600 ${
                    isActivePage(item.path) 
                      ? "text-yellow-600 border-b-2 border-yellow-600 pb-1" 
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl("BookAppointment")}>
                <Button className="gradient-gold text-white hover:opacity-90 transition-opacity px-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-full h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 text-base font-medium transition-colors ${
                    isActivePage(item.path) ? "text-yellow-600" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl("BookAppointment")} onClick={() => setMobileMenuOpen(false)}>
                <Button className="gradient-gold text-white w-full mt-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Mission */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EA</span>
                </div>
                <div>
                  <div className="font-playfair text-xl font-bold">Estética Avançada</div>
                  <div className="text-sm text-gray-400">Medicina Estética</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Transformamos vidas através de tratamentos estéticos seguros e eficazes, 
                sempre priorizando a naturalidade e o bem-estar de nossos pacientes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Rua das Flores, 123<br />
                    Centro, São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-300 text-sm">(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-300 text-sm">contato@esteticaavancada.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Estética Avançada. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}