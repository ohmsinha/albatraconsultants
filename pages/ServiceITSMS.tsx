import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Clock, TrendingUp, CheckCircle, ShieldCheck, Search, FileText, ClipboardCheck, Award, ArrowRight, Monitor, Cloud, Headphones, Check, Briefcase } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceITSMS: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Gap Analysis",
      description: "Assess IT processes.",
      details: "We evaluate your current IT service management practices against ISO 20000-1:2018 requirements and ITIL frameworks to identify gaps in service delivery, support, and relationship management.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Service Design",
      description: "Define SLAs & controls.",
      details: "We help you define Service Level Agreements (SLAs), operational level agreements, and design robust processes for incident, problem, and change management tailored to your business goals.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Implementation",
      description: "Deploy & train.",
      details: "Our team guides the rollout of new service management processes. We provide training to IT staff to ensure they understand their roles in delivering value and maintaining compliance.",
      icon: <ClipboardCheck className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification",
      description: "Achieve ISO 20000.",
      details: "We support you through the external audit process, helping you demonstrate conformity to the auditor and ensuring you achieve the ISO 20000 certification successfully.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 20000 Certification UAE | IT Service Management - Al Batra"
        description="Optimize your IT services with ISO 20000 certification. Expert ITSMS consultancy for MSPs, IT departments, and technology providers in Dubai & Sharjah."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="IT Server Room and Technicians" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">ISO 20000-1:2018 Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        IT Service Management <br/>(ISO 20000) <br/>
                        <span className="text-primary">Certification Services</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Align your IT services with business needs. We help Managed Service Providers (MSPs) and internal IT departments implement global best practices for reliable service delivery.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Aligns with ITIL Framework
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Boosts Client Confidence & SLAs
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
                        title="Get Your ITSMS Quote"
                        subtitle="Optimize your IT delivery today."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 20000?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of ITSMS</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Demonstrate your ability to meet customer requirements and deliver effective IT services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                        alt="Service Reliability" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Service Reliability</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Establish consistent, reliable processes for incident and problem management, reducing downtime and improving response times.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                        alt="Competitive Edge" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Competitive Edge</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Differentiate your IT services in a crowded market. ISO 20000 is often a mandatory requirement for government and enterprise tenders.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Aligned Objectives" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Monitor className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Aligned Objectives</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensure IT goals are directly supporting business objectives, moving IT from a cost center to a strategic partner.
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
                        <h3 className="text-3xl font-extrabold text-white mb-6">Who needs ISO 20000?</h3>
                        <p className="text-slate-300 mb-8 text-lg">This standard is vital for any organization providing IT services, whether internally or commercially:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Cloud className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Cloud Providers</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Headphones className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Managed Services</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Server className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Data Centers</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Monitor className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Internal IT Depts</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=1000" 
                            alt="IT Support Team" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Excellence in IT Delivery</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped IT providers streamline operations and win more business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Cloud className="w-3 h-3 mr-1" /> MSP
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">99.9%</div>
                           <div className="text-xs text-slate-400 font-medium">SLA Compliance</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Service Transformation</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A Dubai-based Managed Service Provider struggled with missed tickets and client complaints. We implemented ISO 20000 processes, resulting in a dramatic improvement in response times.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Contract Renewals Up
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <TrendingUp className="w-4 h-4 text-primary mr-2" />
                                30% Efficiency Gain
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide">
                           <Server className="w-3 h-3 mr-1" /> Enterprise IT
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">40%</div>
                           <div className="text-xs text-slate-400 font-medium">Reduced Downtime</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Operational Stability</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        An internal IT department for a logistics firm needed to support rapid expansion. We helped structure their service catalog and change management, stabilizing operations during growth.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Fully Auditable
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Clock className="w-4 h-4 text-primary mr-2" />
                                Faster Resolutions
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
        sectionSubtitle="We simplify the complex path to ISO 20000 certification into a clear, manageable timeline."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 20000 was a game-changer for our IT agency. Al Batra helped us professionalize our service delivery, and now we are winning bigger contracts with multinational clients."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" 
                      alt="Mark Stevens" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Mark Stevens</div>
                    <div className="text-slate-500 text-xs">Director, TechNova Solutions</div>
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
                        <ShieldCheck className="w-5 h-5" />
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
                 <Link to="/service/bcms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 22301 (BCMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Business Continuity Management for resilience.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Clock className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceITSMS;