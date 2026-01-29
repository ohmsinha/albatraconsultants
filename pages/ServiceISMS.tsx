import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Shield, Server, Eye, ArrowRight, Database, Wifi, Smartphone, Check, FileKey, ClipboardCheck, Award, CreditCard, Building, CheckCircle, TrendingUp } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceISMS: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Gap Analysis & Scoping",
      description: "Define scope & assess gaps.",
      details: "We determine the scope of your ISMS (Information Security Management System) and assess current controls against ISO 27001 requirements to identify vulnerabilities.",
      icon: <SearchIcon className="w-full h-full" />
    },
    {
      id: 2,
      title: "Risk Assessment",
      description: "Identify & treat risks.",
      details: "We conduct a comprehensive risk assessment to identify threats to your information assets. We help produce the Statement of Applicability (SoA) and Risk Treatment Plan.",
      icon: <FileKey className="w-full h-full" />
    },
    {
      id: 3,
      title: "Internal Audit",
      description: "Verify control effectiveness.",
      details: "Our auditors rigorously test your information security controls and policies to ensure they are effective and compliant before the external certification body arrives.",
      icon: <ClipboardCheck className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification",
      description: "Achieve ISO 27001.",
      details: "We provide full support during the Stage 1 and Stage 2 external audits, helping you address any non-conformities to secure your ISO 27001 certification.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 27001 Certification UAE | Information Security - Al Batra"
        description="Secure your data with ISO 27001 certification. Expert ISMS consultancy for IT, Finance, and Government sectors in Dubai & Sharjah."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
                alt="Cybersecurity and Data Protection" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">ISO 27001:2022 Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Information Security <br/>Management (ISO 27001) <br/>
                        <span className="text-primary">Certification Services</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Protect your organization's most valuable asset—data. We guide you through implementing a robust ISMS to manage security risks and ensure business continuity.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Comprehensive Risk Assessments
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            GDPR & Local Data Law Compliance
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
                        title="Get Your ISMS Quote"
                        subtitle="Secure your business today."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 27001?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of ISMS</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">In a digital world, information security is not just IT's responsibility—it's a business imperative.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Data Protection" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Data Protection</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensure the confidentiality, integrity, and availability (CIA) of your data, protecting it from breaches, hacks, and unauthorized access.
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
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Legal Compliance</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Demonstrate compliance with global regulations like GDPR and local UAE data protection laws, avoiding hefty fines.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Client Trust" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Eye className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Client Trust</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Give clients and stakeholders confidence that their sensitive information is safe with you, often a requirement for government tenders.
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
                        <h3 className="text-3xl font-extrabold text-white mb-6">Who needs ISO 27001?</h3>
                        <p className="text-slate-300 mb-8 text-lg">While vital for any organization handling data, ISO 27001 is essential for these sectors:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Server className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">IT Services</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <CreditCard className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Banking & Finance</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Wifi className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Telecom Providers</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Building className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Government Entities</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" 
                            alt="Data Center" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Securing Business Growth</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped UAE businesses secure their assets and win trust.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Smartphone className="w-3 h-3 mr-1" /> Fintech
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">License</div>
                           <div className="text-xs text-slate-400 font-medium">Secured</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Regulatory Breakthrough</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A fintech startup in DIFC needed ISO 27001 to obtain their operational license. We expedited their policy framework and risk management, ensuring a smooth approval.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                100% Compliant
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <TrendingUp className="w-4 h-4 text-primary mr-2" />
                                Fast Tracked
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide">
                           <Database className="w-3 h-3 mr-1" /> Data Center
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">3x</div>
                           <div className="text-xs text-slate-400 font-medium">Client Acquisition</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Enterprise Credibility</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A managed service provider was losing bids to larger competitors. After achieving ISO 27001 with our help, they immediately won a major contract with a government entity.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Vendor Approved
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Shield className="w-4 h-4 text-primary mr-2" />
                                Zero Breaches
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
        sectionSubtitle="We simplify the complex path to ISO 27001 certification into a clear, manageable timeline."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "We deal with sensitive customer data daily. Al Batra helped us implement controls that not only got us ISO 27001 certified but genuinely made our infrastructure more secure."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" 
                      alt="David Chen" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">David Chen</div>
                    <div className="text-slate-500 text-xs">CTO, Nexus Solutions</div>
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
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Quality Management Systems for consistency.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Safety management for your workforce.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Shield className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Environmental management standards.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Database className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

// Helper Icon for search step to avoid import conflict or missing icon
const SearchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

export default ServiceISMS;