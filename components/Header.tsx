import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Utensils, HeartPulse, Leaf, Globe, Lock, ArrowRight, Server, Clock, Handshake, MessageSquare, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const serviceLinks = [
    { 
      title: "QMS (ISO 9001)", 
      href: "/service/qms", 
      description: "Quality Management Systems", 
      icon: ShieldCheck 
    },
    { 
      title: "FSMS (ISO 22000)", 
      href: "/service/fsms", 
      description: "Food Safety Management", 
      icon: Utensils 
    },
    { 
      title: "OH&S (ISO 45001)", 
      href: "/service/ohsas", 
      description: "Occupational Health & Safety", 
      icon: HeartPulse 
    },
    { 
      title: "EMS (ISO 14001)", 
      href: "/service/ems", 
      description: "Environmental Management", 
      icon: Leaf 
    },
    { 
      title: "Halal Certification", 
      href: "/service/halal", 
      description: "Sharia Compliance", 
      icon: Globe 
    },
    { 
      title: "ISMS (ISO 27001)", 
      href: "/service/isms", 
      description: "Information Security", 
      icon: Lock 
    },
    { 
      title: "ITSMS (ISO 20000)", 
      href: "/service/itsms", 
      description: "IT Service Management", 
      icon: Server 
    },
    { 
      title: "BCMS (ISO 22301)", 
      href: "/service/bcms", 
      description: "Business Continuity", 
      icon: Clock 
    },
    { 
      title: "SEDEX (SMETA)", 
      href: "/service/sedex", 
      description: "Ethical Trade Audits", 
      icon: Handshake 
    },
    { 
      title: "Complaints (ISO 10002)", 
      href: "/service/iso10002", 
      description: "Customer Satisfaction", 
      icon: MessageSquare 
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Logo className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-105 transition-transform duration-300" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-secondary leading-none tracking-tight">AL BATRA</h1>
              <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase block mt-0.5">Management Consultancy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            <Link to="/" className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-700'}`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-700'}`}>
              About Us
            </Link>
            
            {/* Services Mega Menu Dropdown */}
            <div className="relative group h-full flex items-center">
              <Link 
                to="/services" 
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-8 ${isActive('/services') || location.pathname.includes('/service/') ? 'text-primary' : 'text-slate-700 group-hover:text-primary'}`}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              {/* Invisible bridge to handle hover gap */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>

              {/* Dropdown Container */}
              <div className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <div className="grid grid-cols-2 gap-4">
                  {serviceLinks.map((service) => (
                    <Link 
                      key={service.href} 
                      to={service.href}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="mt-1 p-2 bg-primary/10 rounded-md text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-secondary group-hover/item:text-primary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                  <Link to="/services" className="text-xs font-bold text-primary hover:text-primary-dark flex items-center justify-center gap-1">
                    View All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/faq" className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/faq') ? 'text-primary' : 'text-slate-700'}`}>
              FAQ
            </Link>
            <Link to="/contact" className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-700'}`}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200">
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/') ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/about') ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
            >
              About Us
            </Link>
            
            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${isActive('/services') ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1 mt-1 bg-slate-50/50 rounded-lg py-2">
                  <Link 
                    to="/services" 
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-bold text-primary"
                  >
                    View All Services
                  </Link>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-100 rounded-md"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/faq" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/faq') ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/contact') ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
            >
              Contact
            </Link>
            <div className="mt-4 px-3">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary-dark"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;