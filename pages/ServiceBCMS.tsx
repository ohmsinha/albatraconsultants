import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldAlert, Activity, Check, ArrowRight, Building, Server, Globe, RefreshCw, FileText, ClipboardCheck, Award, Search, CheckCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceBCMS: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Business Impact Analysis (BIA)",
      description: "Identify critical functions.",
      details: "We conduct a thorough BIA to identify your organization's critical business functions and the resources required to support them. We determine Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Strategy & Planning",
      description: "Develop recovery plans.",
      details: "Based on the risks identified, we help design business continuity strategies and plans. This includes disaster recovery procedures, crisis management structures, and communication protocols.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Testing & Exercising",
      description: "Simulate disruptions.",
      details: "Plans are only good if they work. We facilitate table-top exercises and simulations to test your response capabilities, train your staff, and refine the plans based on the outcomes.",
      icon: <Activity className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification",
      description: "Achieve ISO 22301.",
      details: "We support you through the external audit process, ensuring your BCMS meets all requirements of ISO 22301:2019 and helping you achieve internationally recognized certification.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 22301 Certification UAE | Business Continuity - Al Batra"
        description="Ensure business resilience with ISO 22301 BCMS certification. Expert consultancy for disaster recovery, NCEMA compliance, and risk management in Dubai & Sharjah."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Strategy Meeting for Business Continuity" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">ISO 22301:2019 Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Business Continuity <br/>(ISO 22301) <br/>
                        <span className="text-primary">Certification Services</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Prepare for the unexpected. We help UAE organizations build resilience against disruptions, ensuring you can continue operating during crises like cyberattacks, natural disasters, or supply chain failures.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Aligns with NCEMA Guidelines
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Minimize Downtime & Financial Loss
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
                        title="Get Your BCMS Quote"
                        subtitle="Build a resilient business today."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 22301?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of BCMS</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Resilience isn't just about surviving a crisis; it's about thriving through it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop" 
                        alt="Operational Resilience" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <RefreshCw className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Operational Resilience</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensure your critical business functions can continue or recover quickly in the event of a major disruption, protecting your bottom line.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" 
                        alt="Legal & Regulatory Compliance" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ShieldAlert className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Legal & Regulatory Compliance</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Meet the strict continuity requirements often mandated for government contractors, financial institutions, and essential service providers in the UAE.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                        alt="Stakeholder Confidence" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Stakeholder Confidence</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Demonstrate to clients, investors, and insurers that your business is robust and reliable, even in the face of adversity.
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
                        <h3 className="text-3xl font-extrabold text-white mb-6">Who needs ISO 22301?</h3>
                        <p className="text-slate-300 mb-8 text-lg">BCMS is critical for organizations where downtime is not an option:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Building className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Government Entities</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Globe className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Financial Services</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Server className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Telecom & Data</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Activity className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Healthcare</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80&w=1000" 
                            alt="Emergency Operations Center" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Uninterrupted Excellence</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped UAE businesses stay operational during critical events.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Globe className="w-3 h-3 mr-1" /> Banking
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">2 Hrs</div>
                           <div className="text-xs text-slate-400 font-medium">Recovery Time</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">System Resilience</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A regional bank needed to ensure their payment gateway could withstand cyber incidents. We established a mirrored site and protocols, reducing potential downtime from days to hours.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Audit Passed
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldAlert className="w-4 h-4 text-primary mr-2" />
                                Risk Mitigated
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wide">
                           <Building className="w-3 h-3 mr-1" /> Logistics
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">100%</div>
                           <div className="text-xs text-slate-400 font-medium">Supply Continuity</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Supply Chain Security</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A logistics firm faced risks from vendor failures. We helped them implement a BCMS that included alternative supplier strategies, ensuring operations continued during a major regional disruption.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Client Trust
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Clock className="w-4 h-4 text-primary mr-2" />
                                Minimal Delays
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
        sectionSubtitle="We simplify the complex path to ISO 22301 certification into a clear, manageable timeline."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "When the server outage hit last month, we were back up in 45 minutes thanks to the continuity plans Al Batra helped us put in place. The investment paid for itself in one day."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop" 
                      alt="James Wilson" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">James Wilson</div>
                    <div className="text-slate-500 text-xs">IT Director, FutureTech Systems</div>
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
                 <Link to="/service/isms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 27001 (ISMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Information Security Management to protect data assets.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Server className="w-5 h-5" />
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
                 <Link to="/service/itsms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 20000 (ITSMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">IT Service Management for reliable delivery.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Activity className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceBCMS;