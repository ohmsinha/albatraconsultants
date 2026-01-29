import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Scale, Users, Hammer, Factory, Warehouse, Flame, Search, Wrench, CheckCircle, HeartPulse, Activity, Shield, HardHat, FileText, ClipboardCheck, Award } from 'lucide-react';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceOHSAS: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Gap Analysis",
      description: "Review current safety measures.",
      details: "We evaluate your existing Occupational Health & Safety measures against ISO 45001 standards to identify risks, hazards, and compliance gaps. We generate a strategic plan to close these gaps efficiently.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Implementation",
      description: "Risk assessment & controls.",
      details: "We assist in developing risk assessments, safety policies, and operational controls. We also provide essential training to ensure workforce awareness and participation in the safety management system.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Internal Audit",
      description: "Test system integrity.",
      details: "Our team performs internal audits to ensure your OH&S management system is functioning correctly and meeting all regulatory and standard requirements prior to the final certification.",
      icon: <ClipboardCheck className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification",
      description: "Achieve ISO 45001.",
      details: "We guide you through the certification audit process, providing support to address auditor findings and helping you secure your internationally recognized ISO 45001 certification.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
       <SEO 
         title="ISO 45001 Certification UAE | Health & Safety Consultancy - Al Batra"
         description="Protect your workforce with ISO 45001 certification. Expert Occupational Health & Safety (OH&S) consultancy for construction and industrial sectors in UAE."
       />

       {/* Hero Section */}
       <section className="pt-28 pb-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Top Text Content */}
             <div className="max-w-3xl mb-12">
                   <h2 className="text-primary font-bold tracking-wide uppercase text-xs mb-3">Service: Health & Safety</h2>
                   <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight leading-tight mb-6">
                      Occupational Health & <br/>Safety (ISO 45001) <br/>Certification
                   </h1>
                   <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                      We help UAE businesses implement robust systems to manage health and safety risks, ensuring a safe workplace and legal compliance with local and international standards.
                   </p>
             </div>

             {/* Grid: Form (Left) & Image (Right) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Form */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg relative z-10">
                   <h3 className="font-bold text-secondary mb-2 text-xl">Get Your OHSAS Quote</h3>
                   <p className="text-slate-500 text-sm mb-6">Fill out the form below to speak with an expert.</p>
                   <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                         <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Name</label>
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white placeholder:text-slate-400" />
                             </div>
                             <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                                <input type="text" placeholder="050 123 4567" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white placeholder:text-slate-400" />
                             </div>
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                            <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white placeholder:text-slate-400" />
                         </div>
                         <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-md mt-2">
                            Request Free Consultation <ArrowRight className="w-4 h-4 ml-2"/>
                         </button>
                         <p className="text-xs text-center text-slate-400 mt-2">Your information is kept strictly confidential.</p>
                   </form>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[400px] md:min-h-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                   <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                      alt="Construction safety planning" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors"></div>
                </div>
             </div>
          </div>
       </section>

       {/* Benefits Section */}
       <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-secondary mb-4">3 Key Benefits of ISO 45001</h2>
                <p className="text-slate-500 max-w-2xl text-lg">Implementing this standard proactively identifies and mitigates workplace hazards while boosting morale.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Benefit 1 */}
                 <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2070&auto=format&fit=crop" 
                        alt="Risk Reduction" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Risk Reduction</h3>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Proactively identify and mitigate workplace hazards before incidents occur, creating a safer environment for everyone.
                        </p>
                    </div>
                 </div>

                 {/* Benefit 2 */}
                 <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                        alt="Legal Compliance" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Legal Compliance</h3>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Stay aligned with UAE labor laws and international safety regulations to avoid penalties and legal complications.
                        </p>
                    </div>
                 </div>

                 {/* Benefit 3 */}
                 <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                        alt="Employee Trust" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Employee Trust</h3>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Improve worker morale and safety culture within the organization, showing your team that their wellbeing is a priority.
                        </p>
                    </div>
                 </div>
             </div>
          </div>
       </section>

       {/* Audience Section */}
       <section className="py-24 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-extrabold text-secondary mb-4">Who is ISO 45001 for?</h2>
             <p className="text-slate-500 max-w-2xl mx-auto mb-16">
                Any organization looking to reduce workplace risks and improve safety conditions can benefit. It is particularly critical for high-risk industries.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Hammer className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Construction Companies</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Factory className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Industrial Plants</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Warehouse className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Logistics & Warehousing</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Flame className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Oil & Gas Sectors</span>
                </div>
             </div>
          </div>
       </section>

      {/* Case Studies & Impact */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Safety Success Stories</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">Protecting Lives & Bottom Lines</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Implementing ISO 45001 isn't just about compliance; it's about creating a sustainable safety culture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wide">
                           <Flame className="w-3 h-3 mr-1" /> Heavy Industry
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">1 Million</div>
                           <div className="text-xs text-slate-400 font-medium">Accident-Free Hours</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Safety Culture Transformation</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A steel fabrication unit faced frequent minor incidents. We implemented a behavioral safety program alongside ISO 45001, drastically changing the on-floor safety mindset.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Shield className="w-4 h-4 text-primary mr-2" />
                                25% Lower Insurance
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <HeartPulse className="w-4 h-4 text-primary mr-2" />
                                High Staff Retention
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Wrench className="w-3 h-3 mr-1" /> Facility Management
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">100%</div>
                           <div className="text-xs text-slate-400 font-medium">Audit Pass Rate</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Regulatory Assurance</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A large FM company needed to align with new municipal safety codes. Our gap analysis and system implementation ensured they passed all external inspections with zero non-conformities.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Activity className="w-4 h-4 text-primary mr-2" />
                                18% Less Downtime
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Municipality Certified
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
        sectionSubtitle="We simplify the complex path to ISO 45001 certification into a clear, manageable timeline."
      />

       {/* Trusted By (Light) */}
       <div className="bg-white py-24 border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-4 text-center">
               <p className="text-slate-400 text-sm mb-12">Trusted by leading companies in the UAE</p>
               <div className="flex flex-wrap justify-center gap-6 opacity-30">
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
               </div>
           </div>
       </div>

       {/* Cross Sell */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                     <h3 className="text-xl font-bold text-secondary">Explore Other Certifications</h3>
                     <p className="text-sm text-slate-500 mt-1">Combine certifications for integrated management systems (IMS).</p>
                </div>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:text-primary-dark">
                    Contact for bundle deal <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Card 1 */}
                 <Link to="/service/qms" className="p-6 bg-white rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Quality Management Systems to improve operational consistency.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 2 */}
                 <Link to="/service/fsms" className="p-6 bg-white rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 22000 (Food Safety)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure hygiene and safety across the food supply chain.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 3 */}
                 <Link to="/service/ems" className="p-6 bg-white rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Environmental Management Systems to reduce your ecological footprint.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceOHSAS;