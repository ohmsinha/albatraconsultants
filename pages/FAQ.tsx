import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight, Settings, ShieldCheck, Activity, Leaf, DollarSign, FileText, Globe, Lock, Server, Clock, Handshake, Stethoscope, Zap, Truck, GraduationCap, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const faqCategories = [
  {
    id: 'general',
    title: 'General & Strategy',
    icon: <Settings className="w-4 h-4" />,
    items: [
      {
        question: "Why should we hire a consultant instead of doing it ourselves?",
        answer: "While it is possible to attempt implementation internally, ISO standards are technical and documentation-heavy. A consultant brings specialized expertise, interpretation of the clauses, pre-built templates, and experience with auditors. This significantly speeds up the process and reduces the burden on your staff."
      },
      {
        question: "Does Al Batra issue the ISO certificate?",
        answer: "No consultancy firm is authorized to issue the actual certificate; that would be a conflict of interest. We prepare your system, train your team, and ensure you are compliant. We then coordinate with an accredited third-party Certification Body (CB) who conducts the final audit and issues the certificate."
      },
      {
        question: "What is ISO 31000 Risk Management?",
        answer: "ISO 31000 provides guidelines on managing risk faced by organizations. It is not a certification standard like ISO 9001 (you don't get 'certified'), but it provides a framework for identifying, analyzing, and mitigating risks to protect business value."
      },
      {
        question: "Do you support businesses outside of Sharjah?",
        answer: "Yes! While our head office is in Sharjah, we actively serve clients across all seven emirates, including Dubai, Abu Dhabi, Ajman, and Ras Al Khaimah."
      }
    ]
  },
  {
    id: 'qms',
    title: 'Quality (ISO 9001, 10002)',
    icon: <ShieldCheck className="w-4 h-4" />,
    items: [
      {
        question: "Is ISO 9001 only for large manufacturing companies?",
        answer: "Not at all. ISO 9001 is applicable to any organization, regardless of size or industry. We have successfully helped small trading offices, service providers, IT firms, and startups achieve certification."
      },
      {
        question: "How does ISO 10002 help with customer complaints?",
        answer: "ISO 10002 provides a guideline for planning, designing, developing, operating, maintaining, and improving an effective complaints-handling process. It turns a negative experience into an opportunity to improve customer loyalty."
      }
    ]
  },
  {
    id: 'food',
    title: 'Food & Halal',
    icon: <Utensils className="w-4 h-4" />,
    items: [
      {
        question: "Is HACCP mandatory for all food businesses?",
        answer: "In the UAE, most municipalities require food-related businesses (restaurants, catering, trading, manufacturing) to implement a HACCP-based food safety system."
      },
      {
        question: "What products can be Halal certified?",
        answer: "Beyond meat and food products, Halal certification extends to cosmetics, pharmaceuticals, personal care products, and services (like logistics) to ensure the entire supply chain is Sharia-compliant."
      },
      {
        question: "Is UAE Halal certification accepted globally?",
        answer: "Yes, Halal certificates issued by UAE-accredited bodies are widely recognized in GCC countries and globally due to the UAE's strict adherence to standards."
      }
    ]
  },
  {
    id: 'hse',
    title: 'HSE & Energy',
    icon: <Leaf className="w-4 h-4" />,
    items: [
      {
        question: "Is ISO 45001 mandatory in the UAE?",
        answer: "It is increasingly required for construction companies, industrial facilities, and businesses working with government entities or the oil & gas sector to demonstrate their commitment to workforce safety."
      },
      {
        question: "How much can ISO 50001 (Energy) really save?",
        answer: "By establishing an energy baseline and monitoring usage, most organizations identify low-cost operational improvements (like fixing leaks or optimizing HVAC schedules) that can save 10-20% on energy bills in the first year."
      },
      {
        question: "Does ISO 14001 guarantee environmental compliance?",
        answer: "ISO 14001 requires you to identify and comply with applicable legal requirements (like UAE Federal Law No. 24). Implementing the standard creates the framework to ensure you stay compliant and avoid fines."
      }
    ]
  },
  {
    id: 'itsec',
    title: 'IT & Security',
    icon: <Lock className="w-4 h-4" />,
    items: [
      {
        question: "We use cloud providers (AWS/Azure). Do we still need ISO 27001?",
        answer: "Yes. Cloud providers secure the infrastructure, but you are responsible for your customer data, access controls, and internal processes. ISO 27001 ensures *your* management of that data is secure."
      },
      {
        question: "How does ISO 20000 differ from ITIL?",
        answer: "ITIL is a framework of best practices for IT Service Management. ISO 20000 is the standard you can be certified against. Implementing ITIL practices is the best preparation for ISO 20000."
      },
      {
        question: "What is ISO 22301 Business Continuity?",
        answer: "It is a standard to ensure your business can continue operating during disruptions (cyberattacks, natural disasters, etc.). It goes beyond IT Disaster Recovery to cover HR, facilities, and communications."
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Labs',
    icon: <Stethoscope className="w-4 h-4" />,
    items: [
      {
        question: "What is the difference between ISO 9001 and ISO 13485?",
        answer: "ISO 13485 includes specific regulatory requirements for medical devices (like risk management ISO 14971) and focuses on safety and efficacy, whereas ISO 9001 focuses on customer satisfaction."
      },
      {
        question: "ISO 15189 vs ISO 17025: Which one for my lab?",
        answer: "ISO 15189 is specifically for medical/clinical laboratories dealing with patient samples. ISO 17025 is for general testing and calibration laboratories (e.g., construction materials, food testing, instrument calibration)."
      },
      {
        question: "What is ISO 22870 for Point of Care Testing?",
        answer: "It is an extension of ISO 15189 specifically for testing performed near the patient (e.g., bedside glucose). It ensures that tests done outside the main lab are just as accurate and reliable."
      }
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial & Transport',
    icon: <Truck className="w-4 h-4" />,
    items: [
      {
        question: "Who needs ISO 29001 (Oil & Gas)?",
        answer: "It is designed for the product and service supply chain of the petroleum, petrochemical, and natural gas industries. It is often a pre-qualification requirement for major operators like ADNOC or Aramco."
      },
      {
        question: "What is ISO 28000 for Supply Chain Security?",
        answer: "It manages security risks (theft, piracy, terrorism) in the supply chain. It is critical for logistics companies, freight forwarders, and port operators seeking AEO (Authorized Economic Operator) status."
      },
      {
        question: "How does ISO 39001 help fleet operators?",
        answer: "It provides a framework for Road Traffic Safety (RTS) to reduce death and serious injury. It helps manage driver fatigue, vehicle maintenance, and route planning."
      },
      {
        question: "What is ISO 30000 for Ship Recycling?",
        answer: "It ensures safe and environmentally sound recycling of ships, complying with the Hong Kong Convention. It is essential for ship-breaking yards to handle hazardous materials correctly."
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Compliance',
    icon: <Handshake className="w-4 h-4" />,
    items: [
      {
        question: "Does SEDEX issue a certificate?",
        answer: "No. SEDEX provides an audit report (SMETA) which is uploaded to their platform. Customers view this report to assess your compliance; there is no 'pass/fail' certificate, only a report of findings."
      },
      {
        question: "Can we get certified to ISO 26000?",
        answer: "No, ISO 26000 is a guidance standard for Social Responsibility, not a management system standard. You cannot be certified to it, but you can have an assessment to verify you are following its guidelines."
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    icon: <GraduationCap className="w-4 h-4" />,
    items: [
      {
        question: "What is ISO 29991?",
        answer: "It is a specific quality standard for language learning services. It covers curriculum design, assessment, and teacher competence, helping language institutes distinguish themselves from informal tutoring."
      }
    ]
  },
  {
    id: 'costs',
    title: 'Costs & Timelines',
    icon: <DollarSign className="w-4 h-4" />,
    items: [
      {
        question: "How long does the certification process take?",
        answer: "Typically 3 to 6 months for SMEs. Larger organizations or complex standards (like ISO 27001 or 17025) may take 6 to 12 months."
      },
      {
        question: "What determines the cost?",
        answer: "Costs depend on company size (employee count), number of sites, and complexity of operations. It includes our consultancy fee and the separate Certification Body audit fee. Contact us for a precise quote."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>('general-0');
  const [activeCategory, setActiveCategory] = useState('general');

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header + padding
      
      // Find which category is currently in view
      for (const cat of faqCategories) {
        const element = document.getElementById(cat.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveCategory(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Frequently Asked Questions | ISO Certification UAE"
        description="Answers to common questions about ISO 9001, ISO 14001, ISO 45001, HACCP, and specialized standards like ISO 17025 and ISO 27001 in the UAE."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Knowledge Base</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Expert answers on ISO certification, compliance, and management systems across all industries.
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12">
                  
                  {/* Sticky Sidebar */}
                  <aside className="lg:w-1/4">
                      <div className="sticky top-28 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                          <div className="p-4 bg-slate-50 border-b border-slate-100">
                              <h3 className="font-bold text-secondary">Categories</h3>
                          </div>
                          <nav className="p-2 space-y-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
                              {faqCategories.map((cat) => (
                                  <button
                                      key={cat.id}
                                      onClick={() => scrollToSection(cat.id)}
                                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                                        activeCategory === cat.id 
                                        ? 'bg-primary/10 text-primary' 
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-secondary'
                                      }`}
                                  >
                                      {cat.icon}
                                      <span className="truncate">{cat.title}</span>
                                  </button>
                              ))}
                          </nav>
                      </div>
                      
                      {/* Mobile Horizontal Scroll */}
                      <div className="lg:hidden w-full overflow-x-auto pb-4 flex gap-2 mb-6">
                           {faqCategories.map((cat) => (
                                  <button
                                      key={cat.id}
                                      onClick={() => scrollToSection(cat.id)}
                                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                                        activeCategory === cat.id 
                                        ? 'bg-primary text-white border-primary' 
                                        : 'bg-white text-slate-600 border-slate-200'
                                      }`}
                                  >
                                      {cat.title}
                                  </button>
                              ))}
                      </div>
                  </aside>

                  {/* FAQ Content */}
                  <div className="lg:w-3/4 space-y-12">
                      {faqCategories.map((category) => (
                          <div key={category.id} id={category.id} className="scroll-mt-28">
                              <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
                                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-primary">
                                      {category.icon}
                                  </div>
                                  <h2 className="text-2xl font-bold text-secondary">{category.title}</h2>
                              </div>
                              
                              <div className="space-y-4">
                                  {category.items.map((faq, index) => {
                                      const itemId = `${category.id}-${index}`;
                                      const isOpen = openItem === itemId;
                                      
                                      return (
                                          <div 
                                            key={index} 
                                            className={`bg-white border rounded-xl transition-all duration-200 overflow-hidden ${isOpen ? 'border-primary/30 shadow-md ring-1 ring-primary/10' : 'border-slate-200 hover:border-primary/30'}`}
                                          >
                                              <button
                                                onClick={() => toggleFAQ(itemId)}
                                                className="w-full flex justify-between items-start text-left p-6 focus:outline-none"
                                              >
                                                  <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-secondary' : 'text-slate-700'}`}>
                                                      {faq.question}
                                                  </span>
                                                  <span className={`flex-shrink-0 mt-1 transition-colors ${isOpen ? 'text-primary' : 'text-slate-400'}`}>
                                                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                                  </span>
                                              </button>
                                              
                                              <div 
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                              >
                                                  <div className="overflow-hidden">
                                                      <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                                                          {faq.answer}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      );
                                  })}
                              </div>
                          </div>
                      ))}
                  </div>

              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-secondary mb-4">Still have questions?</h2>
              <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                  Can't find the answer you're looking for? Please contact our team for a personalized consultation.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-lg">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
          </div>
      </section>

    </div>
  );
};

export default FAQ;