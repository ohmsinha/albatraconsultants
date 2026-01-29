import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, TrendingUp, Check, ArrowRight, ShoppingBag, Landmark, Stethoscope, Building2, Search, FileText, ClipboardCheck, Award, HeartHandshake, BarChart, Smile, CheckCircle, ShieldCheck, Lock, Activity } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceISO10002: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Current State Assessment",
      description: "Review handling process.",
      details: "We evaluate your current method of handling customer complaints against ISO 10002:2018 guidelines. We identify gaps in accessibility, responsiveness, and accountability.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Framework Design",
      description: "Develop policy & procedures.",
      details: "Our consultants assist in designing a customer-focused complaints handling policy and detailed procedures. We establish clear escalation paths and resolution timelines.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Training & Rollout",
      description: "Empower frontline staff.",
      details: "We provide specialized training for your customer service team on empathy, active listening, and the specific mechanics of the new ISO 10002 compliant system.",
      icon: <Users className="w-full h-full" />
    },
    {
      id: 4,
      title: "Audit & Compliance",
      description: "Verify conformity.",
      details: "We conduct an internal audit to ensure the system is working effectively and meeting the standard's requirements, preparing you for third-party verification or certification.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 10002 Certification UAE | Complaints Management - Al Batra"
        description="Enhance customer satisfaction with ISO 10002 Complaints Management System. Expert consultancy for handling grievances and improving service quality in UAE."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
                alt="Professional Agreement Handshake" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
             />
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">ISO 10002:2018 Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Customer Complaints <br/>Management (ISO 10002) <br/>
                        <span className="text-primary">System Certification</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Turn complaints into opportunities. We help UAE businesses implement a world-class system for handling customer feedback, ensuring issues are resolved effectively and loyalty is maintained.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Increase Customer Retention
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Identify Operational Weaknesses
                        </li>
                    </ul>

                    <div className="pt-6">
                         <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all">
                            Start Implementation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-md ml-auto">
                     <LeadForm 
                        title="Get Your ISO 10002 Quote"
                        subtitle="Improve your service recovery today."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 10002?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Effective complaints handling is a strategic tool for customer retention and service improvement.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Customer Loyalty" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <HeartHandshake className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Customer Loyalty</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            A well-handled complaint often creates a more loyal customer than one who never had an issue. Build trust through transparency.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                        alt="Operational Insight" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <BarChart className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Operational Insight</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Complaints are free market research. Systematically analyzing them reveals root causes of problems in your products or processes.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2070&auto=format&fit=crop" 
                        alt="Brand Reputation" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Smile className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Brand Reputation</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Demonstrate to the market that you care. An ISO 10002 certified system is a powerful signal of your commitment to service excellence.
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
                        <h3 className="text-3xl font-extrabold text-white mb-6">Who needs ISO 10002?</h3>
                        <p className="text-slate-300 mb-8 text-lg">Essential for any organization dealing directly with customers or public services:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <ShoppingBag className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Retail & E-commerce</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Landmark className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Banking & Finance</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Stethoscope className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Healthcare Providers</span>
                            </div>
                            <div className="flex items-center p-4 bg-secondary/50 rounded-lg border border-slate-600/50">
                                <Building2 className="w-5 h-5 text-primary mr-3" />
                                <span className="text-white font-medium text-sm">Government Services</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000" 
                            alt="Call center agents" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Service Recovery Wins</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how structured complaint handling transforms business outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <ShoppingBag className="w-3 h-3 mr-1" /> Retail
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">85%</div>
                           <div className="text-xs text-slate-400 font-medium">Faster Resolution</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Turning Critics into Fans</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A major electronics retailer in Dubai was losing customers due to slow warranty claims. We implemented ISO 10002, streamlining the escalation process and introducing automated updates.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Smile className="w-4 h-4 text-primary mr-2" />
                                NPS Score Up
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <TrendingUp className="w-4 h-4 text-primary mr-2" />
                                Repeat Sales
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wide">
                           <Building2 className="w-3 h-3 mr-1" /> Hospitality
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">5-Star</div>
                           <div className="text-xs text-slate-400 font-medium">Reviews Increased</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Guest Experience Overhaul</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A hotel chain wanted to standardize how front desk staff handled grievances. We trained their team on the ISO 10002 framework, empowering staff to resolve issues on the spot.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Consistent
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Users className="w-4 h-4 text-primary mr-2" />
                                Staff Confident
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
        sectionTitle="Implementation Roadmap"
        sectionSubtitle="A structured approach to building a world-class complaints handling system."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 10002 transformed how we view complaints. We used to dread them; now we see them as free consulting advice from our customers. Al Batra's training was exceptional."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                      alt="Layla Al-Hashemi" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Layla Al-Hashemi</div>
                    <div className="text-slate-500 text-xs">Customer Experience Head, RetailGroup</div>
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
                        <p className="text-xs text-slate-500 line-clamp-2">The foundation for quality and customer satisfaction.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Award className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/isms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 27001 (ISMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Protect customer data and privacy.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Lock className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/bcms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 22301 (BCMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure service continuity during disruptions.</p>
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

export default ServiceISO10002;