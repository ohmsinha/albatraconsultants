import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Globe, ShieldCheck, Check, ArrowRight, Activity, Microscope, Pill, Truck, Search, FileText, ClipboardCheck, Award, AlertCircle, Info, Settings } from 'lucide-react';
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

const ServiceISO13485: React.FC = () => {
  // Interactive Feature State: Device Classification Helper
  const [invasiveness, setInvasiveness] = useState('non-invasive');
  const [duration, setDuration] = useState('transient');
  const [isActive, setIsActive] = useState(false);

  const classification = useMemo(() => {
      // Simplified EU MDR / General Logic
      let deviceClass = "Class I";
      let complexity = "Low";
      let timeline = "4-6 Months";
      let focus = "Basic QMS & Tech Documentation";

      if (invasiveness === 'non-invasive') {
          if (isActive) {
             deviceClass = "Class I / IIa"; 
             complexity = "Medium";
             timeline = "6-8 Months";
          }
      } else if (invasiveness === 'invasive') {
          // Invasive (body orifice)
          if (duration === 'transient') {
              deviceClass = "Class I / IIa";
              complexity = "Medium";
          } else {
              deviceClass = "Class IIa / IIb";
              complexity = "High";
              timeline = "8-12 Months";
              focus = "Design Control & Clinical Eval";
          }
      } else if (invasiveness === 'surgical') {
          // Surgically Invasive
          if (duration === 'transient') {
              deviceClass = "Class IIa";
              complexity = "Medium";
              timeline = "6-9 Months";
          } else if (duration === 'short') {
              deviceClass = "Class IIb";
              complexity = "High";
              timeline = "9-12 Months";
          } else {
              deviceClass = "Class III"; // Implantable / Long term
              complexity = "Very High";
              timeline = "12+ Months";
              focus = "Full Design Assurance & Clinical Investigation";
          }
      }

      if (isActive && invasiveness === 'surgical') {
          deviceClass = "Class IIb / III";
          complexity = "Very High";
      }

      return { deviceClass, complexity, timeline, focus };
  }, [invasiveness, duration, isActive]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Regulatory Strategy",
      description: "Define scope & markets.",
      details: "We identify applicable regulations (UAE MoHAP, EU MDR, US FDA) and define the scope of your QMS. We assist in classifying your medical devices to determine specific compliance pathways.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "QMS Design (ISO 13485)",
      description: "Procedures & risk mgmt.",
      details: "We develop the Medical Device File, Quality Manual, and SOPs. Crucially, we integrate ISO 14971 Risk Management processes throughout the product lifecycle from design to post-market.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Implementation & Validation",
      description: "Put into practice.",
      details: "We help implement controls for design and development, supplier management, and production. We assist with validation of processes (e.g., sterilization, software) where required.",
      icon: <Settings className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification Audit",
      description: "Notified Body audit.",
      details: "We prepare you for the rigorous audit by a Notified Body or Certification Body. We support you in addressing non-conformities to secure your ISO 13485 certification.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 13485 Certification UAE | Medical Devices QMS - Al Batra"
        description="Achieve ISO 13485 certification for medical devices. Expert consultancy for regulatory compliance (MoHAP, MDR) and quality management in UAE."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
                alt="Medical Laboratory Technology" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">MedTech Compliance</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Medical Devices <br/>(ISO 13485) <br/>
                        <span className="text-primary">Quality Management</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Ensure safety and regulatory compliance throughout the lifecycle of your medical devices. We guide manufacturers, distributors, and service providers in the UAE to meet international standards.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            MoHAP & Global Market Compliance
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            ISO 14971 Risk Management Integration
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
                        title="Get Your ISO 13485 Quote"
                        subtitle="Accelerate your market entry."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 13485?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Compliance is the gateway to the medical market. Safety is the key to staying there.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop" 
                        alt="Global Medical Technology" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Global Market Access</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            A prerequisite for regulatory approval in major markets, including Europe (CE Marking), Canada (MDSAP), and widely recognized by the UAE Ministry of Health.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop" 
                        alt="Patient Care and Safety" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Patient Safety</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Enhance product safety and effectiveness through rigorous risk management and quality control, reducing the likelihood of recalls and adverse events.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                        alt="Regulatory Documentation" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Regulatory Confidence</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Demonstrate to regulators and partners that your QMS is robust, ensuring consistent compliance with evolving laws like the EU MDR/IVDR.
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
                        <Stethoscope className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">QMS Scope Estimator</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Estimate Your QMS Complexity</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      The complexity of your ISO 13485 implementation depends heavily on your device classification. Use this tool to get a preliminary assessment.
                   </p>

                   <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        
                        {/* Input 1: Invasiveness */}
                        <div>
                            <label className="block text-sm font-bold text-white mb-2">Device Invasiveness</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <button 
                                    onClick={() => setInvasiveness('non-invasive')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${invasiveness === 'non-invasive' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Non-Invasive
                                </button>
                                <button 
                                    onClick={() => setInvasiveness('invasive')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${invasiveness === 'invasive' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Invasive (Orifice)
                                </button>
                                <button 
                                    onClick={() => setInvasiveness('surgical')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${invasiveness === 'surgical' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Surgically Invasive
                                </button>
                            </div>
                        </div>

                        {/* Input 2: Duration */}
                        <div>
                            <label className="block text-sm font-bold text-white mb-2">Duration of Use</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <button 
                                    onClick={() => setDuration('transient')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${duration === 'transient' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Transient ({'<'}60m)
                                </button>
                                <button 
                                    onClick={() => setDuration('short')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${duration === 'short' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Short ({'<'}30d)
                                </button>
                                <button 
                                    onClick={() => setDuration('long')}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${duration === 'long' ? 'bg-primary text-white border-primary' : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-primary/50'}`}
                                >
                                    Long Term ({'>'}30d)
                                </button>
                            </div>
                        </div>

                        {/* Input 3: Active */}
                        <div>
                             <label className="flex items-center space-x-3 cursor-pointer">
                                <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${isActive ? 'bg-primary border-primary' : 'border-slate-500'}`} onClick={() => setIsActive(!isActive)}>
                                    {isActive && <Check className="w-4 h-4 text-white" />}
                                </div>
                                <span className="text-sm font-bold text-white select-none" onClick={() => setIsActive(!isActive)}>
                                    Active Device (Uses energy/source)
                                </span>
                                <Tooltip text="Does the device depend on a source of electrical energy or any source of power other than that directly generated by the human body or gravity?" />
                             </label>
                        </div>

                   </div>
                </div>

                {/* Results Card */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Activity className="w-32 h-32 text-secondary" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-6">Assessment Result</h3>
                        
                        <div className="space-y-6">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Probable Risk Class</div>
                                    <div className="text-xs text-slate-400">Based on MDD/MDR Rules</div>
                                </div>
                                <div className="text-2xl font-extrabold text-primary">
                                    {classification.deviceClass}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">QMS Complexity</div>
                                    <div className={`text-lg font-bold ${classification.complexity === 'High' || classification.complexity === 'Very High' ? 'text-red-500' : 'text-orange-500'}`}>
                                        {classification.complexity}
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Est. Timeline</div>
                                    <div className="text-lg font-bold text-secondary">
                                        {classification.timeline}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">Key Focus Area</div>
                                        <p className="text-sm text-blue-900 leading-snug">
                                            {classification.focus}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                                Start Gap Analysis <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                            <p className="text-xs text-slate-400 text-center">
                                *Indicative only. Formal classification requires detailed technical review.
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 13485?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard is applicable across the entire medical device supply chain:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Microscope className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Manufacturers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Pill className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">IVD Producers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Truck className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Distributors</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Settings className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Service Providers</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2079&auto=format&fit=crop" 
                            alt="Cleanroom manufacturing" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Clinical Excellence</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Helping UAE MedTech innovators bring safe products to market.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Microscope className="w-3 h-3 mr-1" /> Manufacturing
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">CE Mark</div>
                           <div className="text-xs text-slate-400 font-medium">Secured</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Surgical Instrument Launch</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A local manufacturer of reusable surgical instruments needed ISO 13485 to apply for CE marking. We established their full technical file and sterilization validation protocols, enabling export to Europe.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Audit Passed
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Globe className="w-4 h-4 text-primary mr-2" />
                                Export Ready
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Truck className="w-3 h-3 mr-1" /> Distribution
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">MoHAP</div>
                           <div className="text-xs text-slate-400 font-medium">Approved</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Medical Supply Chain</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A medical consumables distributor required ISO 13485 to meet new MoHAP warehousing standards. We optimized their storage, traceability, and cold chain management processes.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Check className="w-4 h-4 text-primary mr-2" />
                                Full Traceability
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                                Risk Reduced
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
        sectionSubtitle="A structured approach to navigating complex medical device regulations."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "Navigating ISO 13485 and ISO 14971 was daunting until we met Al Batra. Their technical knowledge of device classification and risk management saved us months of rework."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" 
                      alt="Dr. Hassan Zaid" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Dr. Hassan Zaid</div>
                    <div className="text-slate-500 text-xs">CEO, MedTech Innovations</div>
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
                        <p className="text-xs text-slate-500 line-clamp-2">Foundational quality management principles.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Check className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure safety in manufacturing environments.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Manage environmental impact of production.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Globe className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceISO13485;