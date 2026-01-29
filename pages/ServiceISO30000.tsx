import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, ShieldCheck, Recycle, Check, ArrowRight, Ship, Factory, TriangleAlert, Scale, Search, FileText, ClipboardCheck, Award, CheckCircle, Info, Calculator, Flame } from 'lucide-react';
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

const ServiceISO30000: React.FC = () => {
  // Calculator State
  const [ldt, setLdt] = useState(5000); // Light Displacement Tonnage

  const recoveryEstimates = useMemo(() => {
      // Industry average estimates based on LDT
      const steel = Math.round(ldt * 0.85); // 85% Ferrous Scrap
      const nonFerrous = Math.round(ldt * 0.05); // 5% Non-Ferrous (Copper, Brass, etc.)
      const machinery = Math.round(ldt * 0.07); // 7% Reusable Machinery
      const hazMat = Math.round(ldt * 0.03); // 3% Hazardous Materials (Asbestos, PCBs, etc.)
      
      return { steel, nonFerrous, machinery, hazMat };
  }, [ldt]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Facility Assessment",
      description: "Gap analysis & IHM.",
      details: "We evaluate your Ship Recycling Facility (SRF) against ISO 30000 standards. We also review the Inventory of Hazardous Materials (IHM) management procedures to ensure all incoming risks are identified.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "SRFP Development",
      description: "Ship Recycling Facility Plan.",
      details: "We assist in developing a comprehensive Ship Recycling Facility Plan (SRFP) that outlines operational procedures, emergency response, and environmental monitoring protocols required for certification.",
      icon: <FileText className="w-full h-full animate-pulse drop-shadow-xl text-primary-dark" strokeWidth={2.5} />
    },
    {
      id: 3,
      title: "Training & Implementation",
      description: "Safety & hazmat handling.",
      details: "We provide specialized training for workers on cutting procedures, falling from heights, and safe handling of hazardous materials like asbestos and heavy metals, ensuring a culture of safety.",
      icon: <ShieldCheck className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification Audit",
      description: "Achieve ISO 30000.",
      details: "We guide you through the external audit by an accredited certification body, helping you demonstrate compliance with the Hong Kong Convention and ISO 30000 requirements.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 30000 Ship Recycling Certification UAE | Marine Technology - Al Batra"
        description="Implement safe and environmentally sound ship recycling with ISO 30000. Expert consultancy for shipyards and marine recycling facilities in UAE and the region."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1516937965742-b9b59523bb74?q=80&w=2070&auto=format&fit=crop" 
                alt="Ship in dry dock industrial" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Marine Tech Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Ship Recycling <br/>(ISO 30000) <br/>
                        <span className="text-primary">Management Systems</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Ensure safe and environmentally sound ship recycling. We help recycling facilities comply with ISO 30000:2009 and the Hong Kong Convention, minimizing risks to workers and the environment.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Hong Kong Convention Compliance
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Hazardous Material Management
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
                        title="Get Your ISO 30000 Quote"
                        subtitle="Safe breaking. Compliant future."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 30000?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Transforming ship recycling from a hazardous industry into a safe, sustainable operation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2070&auto=format&fit=crop" 
                        alt="Worker Safety" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Worker Safety</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Drastically reduce accidents, explosions, and exposure to toxins (like asbestos) by implementing rigorous safety protocols and training.
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1611273426761-53c8577a26af?q=80&w=2070&auto=format&fit=crop" 
                        alt="Environmental Protection" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Recycle className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Environmental Protection</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Prevent oil spills and heavy metal contamination of soil and sea. Ensure downstream waste management is compliant with local laws.
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" 
                        alt="Global Compliance" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Global Compliance</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Meet requirements of the Hong Kong Convention and EU Ship Recycling Regulation, attracting international ship owners who need green recycling.
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
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text & Inputs */}
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                        <Calculator className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Material Recovery Estimator</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Estimate Recycling Potential</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      Input the vessel's Light Displacement Tonnage (LDT) to estimate material recovery and hazardous waste management requirements based on ISO 30000 best practices.
                   </p>

                   <div className="space-y-10 bg-white/5 p-8 rounded-2xl border border-white/10">
                        {/* Input: LDT */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <Anchor className="w-4 h-4 text-primary" /> Light Displacement Tonnage (LDT)
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{ldt.toLocaleString()} Tons</span>
                            </div>
                            <input 
                                type="range" 
                                min="1000" 
                                max="50000" 
                                step="500" 
                                value={ldt} 
                                onChange={(e) => setLdt(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((ldt - 1000) * 100) / (50000 - 1000)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>1,000 LDT (Small Vessel)</span>
                                <span>50,000 LDT (Super Tanker)</span>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Results Card */}
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Ship className="w-32 h-32 text-secondary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary mb-8">Estimated Material Breakdown</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="flex items-center text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
                                Recoverable Steel
                                <Tooltip text="High-quality melting scrap, typically 85-90% of vessel weight." />
                            </div>
                            <div className="text-3xl font-extrabold text-secondary">
                                {recoveryEstimates.steel.toLocaleString()} <span className="text-sm font-medium text-slate-400">Tons</span>
                            </div>
                        </div>

                        <div className="p-5 bg-orange-50 rounded-xl border border-orange-100">
                            <div className="flex items-center text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">
                                Non-Ferrous Metals
                                <Tooltip text="Copper, Bronze, Brass, Aluminium from cabling and fittings." />
                            </div>
                            <div className="text-3xl font-extrabold text-secondary">
                                {recoveryEstimates.nonFerrous.toLocaleString()} <span className="text-sm font-medium text-slate-400">Tons</span>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                                Machinery & Reusables
                                <Tooltip text="Generators, pumps, engines, and navigation equipment for resale." />
                            </div>
                            <div className="text-3xl font-extrabold text-secondary">
                                {recoveryEstimates.machinery.toLocaleString()} <span className="text-sm font-medium text-slate-400">Tons</span>
                            </div>
                        </div>

                        <div className="p-5 bg-red-50 rounded-xl border border-red-100 relative overflow-hidden">
                            <div className="absolute -right-4 -bottom-4 opacity-10 text-red-500">
                                <TriangleAlert className="w-20 h-20" />
                            </div>
                            <div className="flex items-center text-xs font-bold text-red-600 mb-2 uppercase tracking-wide">
                                Hazardous Waste (HazMat)
                                <Tooltip text="Asbestos, PCBs, heavy metals, oily sludge requiring specialized ISO 30000 disposal." />
                            </div>
                            <div className="text-3xl font-extrabold text-secondary relative z-10">
                                {recoveryEstimates.hazMat.toLocaleString()} <span className="text-sm font-medium text-slate-400">Tons</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs text-slate-400 text-center italic">
                            *Estimates based on typical cargo vessel composition. Actual values vary by ship type.
                        </p>
                        <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                            Plan Your Recycling Facility <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Link>
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 30000?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard is vital for the marine recycling ecosystem:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Ship className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Recycling Yards</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Anchor className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Ship Owners</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Factory className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Waste Managers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Scale className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Cash Buyers</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1569263979104-565b36c15563?q=80&w=2072&auto=format&fit=crop" 
                            alt="Industrial recycling plant" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Green Recycling in Action</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Helping recycling yards meet international standards and secure global contracts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Ship className="w-3 h-3 mr-1" /> Ship Yard
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">EU</div>
                           <div className="text-xs text-slate-400 font-medium">List Approval</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Regulatory Breakthrough</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A major ship recycling facility aimed to get on the EU List of approved yards. We implemented ISO 30000 and upgraded their downstream waste management to meet strict European standards.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Certified
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Scale className="w-4 h-4 text-primary mr-2" />
                                Compliant
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wide">
                           <Flame className="w-3 h-3 mr-1" /> Safety
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">0</div>
                           <div className="text-xs text-slate-400 font-medium">Fatalities</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Safety Overhaul</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A yard faced high accident rates during hot work (cutting). We introduced gas-free-for-hot-work certification protocols and mandatory PPE training under the ISO 30000 framework.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Risk Reduced
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                                Safe Operations
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
        sectionTitle="ISO 30000 Implementation"
        sectionSubtitle="A structured approach to transforming your facility into a world-class green recycling yard."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 30000 certification transformed our yard's reputation. We are now the preferred partner for European ship owners who demand green recycling."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
                      alt="Capt. Rajesh Gupta" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Capt. Rajesh Gupta</div>
                    <div className="text-slate-500 text-xs">Director, Green Marine Recycling</div>
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
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure workforce safety in hazardous environments.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Environmental management for soil and water protection.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Recycle className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Quality Management Systems for process efficiency.</p>
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

export default ServiceISO30000;