import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Globe, Users, Check, ArrowRight, Factory, Truck, ShoppingBag, Search, FileText, ClipboardCheck, Award, ShieldCheck, CheckCircle, Shield, Lock } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceSEDEX: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Registration & SAQ",
      description: "Join Sedex & self-assess.",
      details: "We assist you in registering your site on Sedex Advance and completing the comprehensive Self-Assessment Questionnaire (SAQ) to establish your baseline compliance profile.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 2,
      title: "Gap Analysis",
      description: "Pre-audit assessment.",
      details: "Our consultants conduct a mock audit against ETI Base Code and local laws to identify non-compliances in labor standards, health & safety, and business ethics before the real audit.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 3,
      title: "SMETA Audit",
      description: "On-site verification.",
      details: "We support you during the SMETA (Sedex Members Ethical Trade Audit) 2-Pillar or 4-Pillar audit conducted by an Affiliate Audit Company, ensuring all documentation and site conditions are ready.",
      icon: <ClipboardCheck className="w-full h-full" />
    },
    {
      id: 4,
      title: "CAPR Management",
      description: "Close non-compliances.",
      details: "If any issues are found, we help you implement corrective actions and upload evidence to the Sedex platform to close the Corrective Action Plan Report (CAPR) and finalize your report.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="SEDEX SMETA Certification UAE | Ethical Trade Audit - Al Batra"
        description="Pass your SMETA audit with confidence. Expert SEDEX consultancy in UAE for social compliance, labor rights, and ethical supply chain management."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                alt="Factory workers and ethical trade" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
             />
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Social Compliance Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        SEDEX / SMETA <br/>
                        <span className="text-primary">Ethical Trade Audits</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Demonstrate your commitment to responsible business practices. We help UAE suppliers pass SMETA audits (2-Pillar & 4-Pillar) to meet the ethical standards of global retailers and brands.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            ETI Base Code Compliance
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Approved by Major Retailers
                        </li>
                    </ul>

                    <div className="pt-6">
                         <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all">
                            Start SMETA Process
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-md ml-auto">
                     <LeadForm 
                        title="Get Your SEDEX Quote"
                        subtitle="Prepare for your audit today."
                        buttonText="Request Quote"
                        className="bg-white"
                     />
                </div>
            </div>
        </div>
      </section>

      {/* Trusted Bar */}
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why SEDEX?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of SMETA</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Join the world's largest platform for sharing responsible sourcing data on supply chains.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Supply Chain Visibility" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Handshake className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Supply Chain Visibility</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Share your audit reports with multiple customers through the Sedex Advance platform, reducing the need for redundant audits.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                        alt="Worker Welfare" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Worker Welfare</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensure fair labor practices, safe working conditions, and ethical treatment of employees, boosting morale and retention.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1494412574643-35d3d4706f13?q=80&w=2072&auto=format&fit=crop" 
                        alt="Global Market Access" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Global Market Access</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Many major international retailers (e.g., Walmart, Tesco, Nestlé) require Sedex membership and SMETA audits as a condition of trade.
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
                        <h3 className="text-3xl font-extrabold text-white mb-6">Who needs SEDEX?</h3>
                        <p className="text-slate-300 mb-8 text-lg">SMETA audits are relevant for any organization supplying to brands committed to ethical trade:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Factory className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Manufacturers</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <ShoppingBag className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">FMCG Suppliers</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Truck className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Packaging Firms</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Users className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Labor Agencies</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1596496050844-36105e630e7d?auto=format&fit=crop&q=80&w=1000" 
                            alt="Logistics Workers" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Ethical Trade in Action</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped UAE suppliers secure contracts with global giants.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <ShoppingBag className="w-3 h-3 mr-1" /> Garments
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">UK</div>
                           <div className="text-xs text-slate-400 font-medium">Export Contract</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Audit Success</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A uniform manufacturer in Ajman risked losing a UK retail contract due to labor compliance issues. We rectified their payroll and safety protocols, helping them pass the 4-Pillar SMETA audit.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Contract Secured
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Users className="w-4 h-4 text-primary mr-2" />
                                Happy Workforce
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Factory className="w-3 h-3 mr-1" /> Food Processing
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">0</div>
                           <div className="text-xs text-slate-400 font-medium">Critical Non-Conformities</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Operational Excellence</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A food packaging supplier needed to join Sedex to supply a multinational FMCG brand. We streamlined their health & safety management, ensuring a flawless audit report.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Brand Approved
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                                Safer Workplace
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
        sectionTitle="SMETA Audit Process"
        sectionSubtitle="We guide you through every step of the Sedex Members Ethical Trade Audit."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "We were intimidated by the SMETA requirements, but Al Batra's team made it simple. They identified gaps in our HR policies we didn't know existed, and we passed the audit with flying colors."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" 
                      alt="Ravi Kumar" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Ravi Kumar</div>
                    <div className="text-slate-500 text-xs">General Manager, TexStyle Manufacturing</div>
                </div>
            </div>
        </div>
      </section>

      {/* Cross Sell */}
      <section className="py-16 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                     <h3 className="text-xl font-bold text-secondary">Complementary Certifications</h3>
                     <p className="text-sm text-slate-500 mt-1">Combine standards for a robust Integrated Management System.</p>
                </div>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:text-primary-dark">
                    Contact for bundle deal <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure workforce safety (Pillar 2 of SMETA).</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Users className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Environmental management (Pillar 4 of SMETA).</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Globe className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Quality Management Systems for consistency.</p>
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

export default ServiceSEDEX;