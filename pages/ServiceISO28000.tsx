import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, Globe, Lock, Anchor, AlertTriangle, Check, ArrowRight, Search, FileText, ClipboardCheck, Award, Ship, Package, Map, Info, Radar } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const Tooltip = ({ text }: { text: string }) => (
  <div className="group relative inline-flex items-center ml-2">
    <Info className="w-4 h-4 text-slate-400 cursor-help hover:text-primary transition-colors" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-secondary text-white text-xs leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-20 text-center shadow-xl border border-slate-700 transform translate-y-2 group-hover:translate-y-0">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-secondary"></div>
    </div>
  </div>
);

const ServiceISO28000: React.FC = () => {
  // Interactive Feature State: Supply Chain Risk Meter
  const [scope, setScope] = useState('domestic');
  const [cargo, setCargo] = useState('general');
  const [visibility, setVisibility] = useState('checkpoints');

  const riskAssessment = useMemo(() => {
      let score = 0;
      
      // Scope Weight
      if (scope === 'domestic') score += 1;
      else if (scope === 'regional') score += 2;
      else score += 3; // Global

      // Cargo Weight
      if (cargo === 'general') score += 1;
      else if (cargo === 'high-value') score += 3;
      else score += 3; // Hazardous/Critical

      // Visibility Weight (Inverse: Less visibility = higher risk)
      if (visibility === 'tracking') score += 1;
      else if (visibility === 'checkpoints') score += 2;
      else score += 3; // Blind spots

      let level = "Low";
      let color = "text-green-500";
      let recommendation = "Maintain current controls and conduct annual audits.";

      if (score >= 5 && score <= 7) {
          level = "Moderate";
          color = "text-orange-500";
          recommendation = "Implement stricter access controls and supplier vetting.";
      } else if (score > 7) {
          level = "Critical";
          color = "text-red-600";
          recommendation = "Urgent need for ISO 28000 framework to plug security gaps.";
      }

      return { level, color, recommendation, score };
  }, [scope, cargo, visibility]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Security Assessment",
      description: "Threat & vulnerability scan.",
      details: "We map your entire supply chain to identify physical, functional, and operational threats. We assess current security measures against ISO 28000 requirements.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Risk Management Plan",
      description: "Design countermeasures.",
      details: "We develop a comprehensive security plan outlining procedures for access control, cargo handling, personnel security, and incident response.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Implementation",
      description: "Deploy controls.",
      details: "Our team assists in implementing the security controls, conducting drills, and training staff on recognizing and responding to security threats.",
      icon: <Shield className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification Audit",
      description: "External validation.",
      details: "We guide you through the certification audit, ensuring your Security Management System (SMS) meets international standards for supply chain security.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 28000 Certification UAE | Supply Chain Security - Al Batra"
        description="Secure your logistics and supply chain with ISO 28000. Expert consultancy for freight forwarders, ports, and manufacturers in UAE."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1494412574643-35d3d4706f13?q=80&w=2072&auto=format&fit=crop" 
                alt="Container Ship at Sea" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Supply Chain Security</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Security Management <br/>(ISO 28000) <br/>
                        <span className="text-primary">System Certification</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        In a volatile world, securing your supply chain is critical. ISO 28000 provides the framework to identify risks, minimize theft, and ensure the integrity of goods from point of origin to destination.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Prevent Theft & Tampering
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Align with AEO & C-TPAT
                        </li>
                    </ul>

                    <div className="pt-6">
                         <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all">
                            Start Assessment
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-md ml-auto">
                     <LeadForm 
                        title="Get Your ISO 28000 Quote"
                        subtitle="Secure your logistics network."
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

      {/* 3 Key Benefits with Background Images */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 28000?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Protect your assets, your people, and your reputation in the global marketplace.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                        alt="Cargo Inspection" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Resilience & Continuity</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Build a robust system that allows you to manage security incidents effectively, minimizing disruption to the flow of goods.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop" 
                        alt="Customs and Trade" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Trade Facilitation</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Align with Authorized Economic Operator (AEO) and C-TPAT requirements, often leading to faster customs clearance and fewer inspections.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop" 
                        alt="Warehouse Security" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Asset Protection</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Systematically identify and mitigate risks of theft, pilferage, and piracy, protecting valuable cargo and corporate assets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Text & Inputs */}
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                        <Radar className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Vulnerability Meter</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Assess Your Risk Exposure</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      The complexity of your supply chain dictates your security risk. Use this tool to gauge your vulnerability level.
                   </p>

                   <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        
                        {/* Input 1: Scope */}
                        <div>
                            <label className="block text-sm font-bold text-white mb-2">Network Scope</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <button 
                                    onClick={() => setScope('domestic')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${scope === 'domestic' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Domestic
                                </button>
                                <button 
                                    onClick={() => setScope('regional')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${scope === 'regional' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Regional
                                </button>
                                <button 
                                    onClick={() => setScope('global')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${scope === 'global' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Global
                                </button>
                            </div>
                        </div>

                        {/* Input 2: Cargo Type */}
                        <div>
                            <label className="block text-sm font-bold text-white mb-2">Cargo Sensitivity</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <button 
                                    onClick={() => setCargo('general')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${cargo === 'general' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    General Goods
                                </button>
                                <button 
                                    onClick={() => setCargo('high-value')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${cargo === 'high-value' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    High Value
                                </button>
                                <button 
                                    onClick={() => setCargo('hazardous')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${cargo === 'hazardous' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    HazMat / Critical
                                </button>
                            </div>
                        </div>

                        {/* Input 3: Visibility */}
                        <div>
                            <label className="block text-sm font-bold text-white mb-2">Current Visibility</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <button 
                                    onClick={() => setVisibility('tracking')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${visibility === 'tracking' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Full Tracking
                                </button>
                                <button 
                                    onClick={() => setVisibility('checkpoints')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${visibility === 'checkpoints' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Checkpoints
                                </button>
                                <button 
                                    onClick={() => setVisibility('blindspots')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${visibility === 'blindspots' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Blind Spots
                                </button>
                            </div>
                        </div>

                   </div>
                </div>

                {/* Results Card */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <AlertTriangle className="w-32 h-32 text-secondary" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-6">Risk Profile Analysis</h3>
                        
                        <div className="space-y-6">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Vulnerability Level</div>
                                    <div className="text-xs text-slate-400">Based on standard ISO 28000 metrics</div>
                                </div>
                                <div className={`text-2xl font-extrabold ${riskAssessment.color}`}>
                                    {riskAssessment.level}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">Recommendation</div>
                                        <p className="text-sm text-blue-900 leading-snug">
                                            {riskAssessment.recommendation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                                Strengthen Your Security <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                            <p className="text-xs text-slate-400 text-center">
                                *Preliminary assessment. A full on-site gap analysis is recommended.
                            </p>
                        </div>
                    </div>
                </div>

             </div>
          </div>
       </section>

      {/* Who is this for? */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 28000?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard is applicable to all organizations involved in manufacturing, service, storage or transportation:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Truck className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Logistics Firms</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Anchor className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Port Operators</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Package className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Freight Forwarders</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Map className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Customs Brokers</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                            alt="Warehouse Logistics" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Secure Chains, Safe Cargo</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Helping UAE businesses protect their supply chains and gain global trust.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Truck className="w-3 h-3 mr-1" /> Logistics
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">AEO</div>
                           <div className="text-xs text-slate-400 font-medium">Status Granted</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Customs Fast Track</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A JAFZA-based logistics provider needed to improve customs clearance times. Implementing ISO 28000 helped them achieve Authorized Economic Operator (AEO) status, prioritizing their shipments.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Certified
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Globe className="w-4 h-4 text-primary mr-2" />
                                Faster Transit
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Package className="w-3 h-3 mr-1" /> Manufacturing
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">0%</div>
                           <div className="text-xs text-slate-400 font-medium">Cargo Theft</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Asset Protection</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        An electronics manufacturer faced pilferage during transport. We established strict chain-of-custody protocols under ISO 28000, eliminating losses and reducing insurance premiums.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Lock className="w-4 h-4 text-primary mr-2" />
                                Secure Route
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Shield className="w-4 h-4 text-primary mr-2" />
                                Risk Mitigated
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
        sectionSubtitle="A structured approach to securing your supply chain from end to end."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "Security used to be a headache. With ISO 28000, it's now a competitive advantage. Our international clients trust us more because they know their cargo is safe."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                      alt="Mr. Vikram Singh" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Mr. Vikram Singh</div>
                    <div className="text-slate-500 text-xs">Operations Head, Global Freight LLC</div>
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
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure quality consistency alongside security.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Check className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/iso39001" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 39001 (Traffic)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Road traffic safety for your transport fleet.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Truck className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/iso31000" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 31000 (Risk)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Broader enterprise risk management.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <AlertTriangle className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceISO28000;