import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Smile, Gavel, Check, ArrowRight, Truck, HardHat, Building2, Package, Utensils, BarChart3, Clock, Trophy, Briefcase, Search, FileText, ClipboardCheck, Award, CheckCircle, Leaf } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceQMS: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Gap Analysis",
      description: "Assess current processes against ISO 9001.",
      details: "We conduct a thorough on-site review of your existing operations, identifying non-conformities and opportunities for improvement. You receive a detailed roadmap report outlining exactly what needs to be done.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Documentation",
      description: "Develop procedures and train staff.",
      details: "Our team assists in drafting the Quality Manual, SOPs, and policies tailored to your business. We provide comprehensive staff training to ensure everyone understands their roles in the QMS.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Internal Audit",
      description: "Verify system effectiveness.",
      details: "We perform a simulated audit to check for readiness. Management review meetings are facilitated to evaluate system performance and address any gaps before the external audit.",
      icon: <ClipboardCheck className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification",
      description: "External audit support.",
      details: "We guide you through the Stage 1 and Stage 2 audits conducted by the Certification Body. We help address any findings to ensure you successfully achieve your ISO 9001 certification.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 9001 Certification Consultant UAE | Quality Management - Al Batra"
        description="Achieve ISO 9001 certification in Dubai & Sharjah with Al Batra. Expert QMS consultancy for operational excellence, tender eligibility, and process improvement."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             {/* Hero Background Image */}
             <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Quality Management Planning" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
             />
             {/* Decorative background elements */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">ISO 9001:2015 Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Quality Management Systems (QMS) <br/>
                        <span className="text-primary">Certification Services</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Achieve operational excellence with the world's most recognized quality standard. We guide UAE businesses through assessment, implementation, and certification for ISO 9001.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            100% Certification Success Rate
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Experienced Lead Auditors
                        </li>
                    </ul>

                    <div className="pt-6">
                         <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all">
                            Start Certification
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-md ml-auto">
                     <LeadForm 
                        title="Get Your QMS Quote"
                        subtitle="Fast response. No hidden fees."
                        buttonText="Request Quote"
                        className="bg-white"
                     />
                </div>
            </div>
        </div>
      </section>

      {/* Trusted Bar (Simplified) */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-center gap-8 md:gap-12 opacity-40 grayscale">
                <span className="font-serif font-bold text-lg">Bateel</span>
                <span className="font-sans font-bold text-lg">ETIHAD</span>
                <span className="font-mono font-bold text-lg">FleetLine</span>
                <span className="uppercase font-bold text-lg">Dubai Asset Mgmt</span>
                <span className="font-bold text-lg">American Center</span>
             </div>
        </div>
      </div>

      {/* 3 Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 9001?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of QMS</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Implementing a Quality Management System isn't just about the certificate. It's about building a better business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                        alt="Operational Efficiency" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Operational Efficiency</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Streamline your internal processes, reduce waste, and minimize errors, leading to significant cost savings and better resource management.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Customer Satisfaction" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Smile className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Customer Satisfaction</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Deliver consistent quality products and services that meet customer requirements, enhancing trust and loyalty in the market.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                        alt="Regulatory Compliance" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Gavel className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Regulatory Compliance</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Meet statutory and regulatory requirements with ease, and qualify for government tenders and large corporate contracts in the UAE.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-secondary-light/30 rounded-3xl p-8 md:p-12 border border-slate-600/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-extrabold text-white mb-6">Who is this for?</h3>
                        <p className="text-slate-300 mb-8 text-lg">ISO 9001 is industry-agnostic, but we see the highest impact in these sectors within the UAE:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Building2 className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Manufacturing</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <HardHat className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Construction</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Truck className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Logistics & Supply</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Package className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Healthcare Services</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
                            alt="Business meeting" 
                            className="absolute inset-0 w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Case Studies & Impact */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Success Stories</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">Real Results, Real Growth</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped UAE businesses transform their operations through ISO 9001 certification.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <HardHat className="w-3 h-3 mr-1" /> Construction
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">100%</div>
                           <div className="text-xs text-slate-400 font-medium">Tender Eligibility</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Rapid Tender Qualification</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A Dubai-based contracting firm needed ISO 9001 certification urgently to bid for a major government project. Our accelerated implementation plan got them certified in record time.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Clock className="w-4 h-4 text-primary mr-2" />
                                6 Weeks to Certified
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Trophy className="w-4 h-4 text-primary mr-2" />
                                Project Awarded
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wide">
                           <Truck className="w-3 h-3 mr-1" /> Logistics
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">40%</div>
                           <div className="text-xs text-slate-400 font-medium">Error Reduction</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Operational Optimization</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A logistics provider in JAFZA faced high shipping error rates. We mapped and standardized their handling procedures, significantly cutting waste and improving turnaround.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <BarChart3 className="w-4 h-4 text-primary mr-2" />
                                15% Cost Savings
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Briefcase className="w-4 h-4 text-primary mr-2" />
                                Client Retention Up
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Process to Certification */}
      <ProcessTimeline 
        steps={steps} 
        sectionTitle="Process to Certification"
        sectionSubtitle="We simplify the complex path to ISO 9001 certification into a clear, manageable timeline."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "Al Batra's practical approach to ISO 9001 made a huge difference for our factory. We achieved certification in just 3 months and saw immediate improvements in our production line efficiency."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                      alt="Ahmed Al-Farsi" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Ahmed Al-Farsi</div>
                    <div className="text-slate-500 text-xs">Production Manager, Advanced Manufacturing Co.</div>
                </div>
            </div>
        </div>
      </section>

      {/* Cross Sell */}
      <section className="py-16 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                     <h3 className="text-xl font-bold text-secondary">Other Services</h3>
                     <p className="text-sm text-slate-500 mt-1">Explore our other ISO & safety certification services.</p>
                </div>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:text-primary-dark">
                    Contact for bundle deal <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Card 1 */}
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Environmental Management Systems to reduce your ecological footprint.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Leaf className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 2 */}
                 <Link to="/service/fsms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">HACCP / ISO 22000</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Food Safety Management for catering and manufacturing.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Utensils className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 3 */}
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Occupational Health & Safety to protect your workforce.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <HardHat className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceQMS;