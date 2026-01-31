import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ChevronRight, Hash } from 'lucide-react';

interface SearchItem {
  title: string;
  href: string;
  category: string;
  description: string;
}

const searchItems: SearchItem[] = [
  // General
  { title: "Home", href: "/", category: "General", description: "Main landing page" },
  { title: "About Us", href: "/about", category: "General", description: "Company overview and mission" },
  { title: "Contact Us", href: "/contact", category: "General", description: "Get in touch or request a quote" },
  { title: "FAQ", href: "/faq", category: "General", description: "Frequently asked questions" },
  
  // Services
  { title: "ISO 9001 (QMS)", href: "/service/qms", category: "Quality", description: "Quality Management Systems" },
  { title: "ISO 10002 (Complaints)", href: "/service/iso10002", category: "Quality", description: "Customer Satisfaction & Complaints" },
  
  { title: "ISO 22000 (FSMS)", href: "/service/fsms", category: "Food Safety", description: "Food Safety Management" },
  { title: "HACCP", href: "/service/fsms", category: "Food Safety", description: "Hazard Analysis Critical Control Point" },
  { title: "Halal Certification", href: "/service/halal", category: "Food Safety", description: "Sharia Compliance for food & cosmetics" },
  
  { title: "ISO 45001 (OH&S)", href: "/service/ohsas", category: "Health & Safety", description: "Occupational Health & Safety" },
  { title: "ISO 14001 (EMS)", href: "/service/ems", category: "Environment", description: "Environmental Management Systems" },
  { title: "ISO 50001 (Energy)", href: "/service/iso50001", category: "Environment", description: "Energy Management Systems" },
  
  { title: "ISO 27001 (ISMS)", href: "/service/isms", category: "IT & Security", description: "Information Security Management" },
  { title: "ISO 20000 (ITSMS)", href: "/service/itsms", category: "IT & Security", description: "IT Service Management" },
  { title: "ISO 22301 (BCMS)", href: "/service/bcms", category: "Resilience", description: "Business Continuity Management" },
  { title: "ISO 28000 (Supply Chain)", href: "/service/iso28000", category: "Logistics", description: "Supply Chain Security" },
  
  { title: "SEDEX (SMETA)", href: "/service/sedex", category: "Social", description: "Ethical Trade Audits" },
  { title: "ISO 26000 (CSR)", href: "/service/iso26000", category: "Social", description: "Social Responsibility Guidance" },
  
  // Specialized
  { title: "ISO 31000 (Risk)", href: "/service/iso31000", category: "Risk", description: "Risk Management Guidelines" },
  { title: "ISO 29001 (Oil & Gas)", href: "/service/iso29001", category: "Sector Specific", description: "Oil & Gas Quality Management" },
  { title: "ISO 30000 (Ship Recycling)", href: "/service/iso30000", category: "Sector Specific", description: "Ship Recycling Management" },
  { title: "ISO 39001 (Road Safety)", href: "/service/iso39001", category: "Sector Specific", description: "Road Traffic Safety" },
  { title: "ISO 29991 (Language)", href: "/service/iso29991", category: "Education", description: "Language Learning Services" },
  
  // Labs
  { title: "ISO 17025 (Labs)", href: "/service/iso17025", category: "Laboratory", description: "Testing & Calibration Laboratories" },
  { title: "ISO 15189 (Medical Labs)", href: "/service/iso15189", category: "Laboratory", description: "Medical Laboratory Competence" },
  { title: "ISO 22870 (POCT)", href: "/service/iso22870", category: "Laboratory", description: "Point of Care Testing" },
  { title: "ISO 13485 (Medical Devices)", href: "/service/iso13485", category: "Medical", description: "Medical Devices Quality Management" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchItems.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up border border-slate-200">
        
        {/* Header/Input */}
        <div className="flex items-center border-b border-slate-100 p-4">
          <Search className="w-6 h-6 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 text-lg outline-none text-slate-800 placeholder:text-slate-400"
            placeholder="Search for services, standards, or information..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Escape' && onClose()}
          />
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Default State */}
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-500">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-sm">Type to search across our services and resources.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <button onClick={() => setQuery("ISO 9001")} className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-xs font-medium transition-colors">ISO 9001</button>
                <button onClick={() => setQuery("Food Safety")} className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-xs font-medium transition-colors">Food Safety</button>
                <button onClick={() => setQuery("HACCP")} className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-xs font-medium transition-colors">HACCP</button>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Results
              </div>
              {results.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href} 
                  onClick={onClose}
                  className="flex items-start px-4 py-3 hover:bg-slate-50 transition-colors group border-l-4 border-transparent hover:border-primary"
                >
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <Hash className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">{item.category}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all self-center" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">
              <p>No results found for "{query}".</p>
              <button 
                onClick={() => setQuery('')}
                className="mt-2 text-sm text-primary hover:underline font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
          <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
          <span className="hidden sm:inline">Press <kbd className="font-sans px-1 py-0.5 bg-white border border-slate-200 rounded">Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;