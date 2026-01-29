import React from 'react';
import { MapPin, Phone, Smartphone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-bold text-white tracking-wide">AL BATRA</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Leading ISO & Food Safety Management Consultancy in the UAE. Helping businesses achieve excellence through compliance and best practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-primary text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-primary text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-primary text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/service/halal" className="text-sm hover:text-primary transition-colors">Halal Certification</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Consulting Services</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Office # 514, Rolla Mall, Rolla Square Park, Sharjah, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+971 6 575 5601</span>
              </li>
              <li className="flex items-center">
                <Smartphone className="text-primary mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+971 56 409 1521</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@albatraconsultants.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-slate-700 h-48 w-full bg-slate-800 relative group">
            <img
              alt="Map Location"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTdblQ08JFMj15LJ1TzffBOsaWuG7RdrAij432Lmuzlv1KGGAe3M_33_AvR_N911OAWlmHVU6aAz7CJbGICdYSsojOr9OuMFdjv3MX0BIeln-ZnrChGk6GWxhnWjOHq7GVn3B82F318_zStDq3VVhAWCaJxR-OVXsmtaM6xgPWo7d3MHovhVwyjIeWMvp5VwWzA9E9aDqtwIqW8J3IcXROSyO5PcPIVNqMWfqgSpQJqpJS9RZxUUzW-GUrtu2c3DxbSGoTH2hzc7g"
            />
            <div className="absolute bottom-2 left-2 bg-white text-slate-900 text-[10px] uppercase px-2 py-1 rounded shadow font-bold">
              View on Google Maps
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2023 Al Batra Management Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;