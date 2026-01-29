import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Factory, Building, TrendingUp, CheckCircle, ShieldCheck, Search, FileText, ClipboardCheck, Award, Check, Utensils, HardHat, Droplets, Zap, Globe, Calculator, Info } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const Tooltip = ({ text }: { text: string }) => (
  <div className="group relative inline-flex items-center ml-2">
    <Info className="w-4 h-4 text-slate-400 cursor-help hover:text-primary transition-colors" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-secondary text-white text-xs leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-20 text-center shadow-xl border border-slate-700 transform translate-y-2 group-hover:translate-y-0">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-secondary"></div>
    </div>
  </div>
);

const ServiceEMS: React.FC = () => {
  // Calculator State
  const [energy, setEnergy] = useState(5000); // Monthly kWh
  const [waste, setWaste] = useState(500);    // Monthly kg

  const savings = useMemo(() => {
      // Annual savings calculation
      // Monthly Input * 12 months * Efficiency Factor * Cost Factor
      
      const months = 12;
      const energyEfficiency = 0.15; // 15% improvement assumption
      const wasteEfficiency = 0.20;  // 20% reduction assumption
      
      const energySaved = energy * months * energyEfficiency;
      const wasteSaved = waste * months * wasteEfficiency;
      
      // CO2 Factors (kg CO2e)
      const co2Elec = 0.45; // kg/kWh (approx UAE grid)
      const co2Waste = 1.2; // kg/kg (landfill avoidance)
      
      const totalCo2 = (energySaved * co2Elec) + (wasteSaved * co2Waste);
      
      // Cost Factors (AED)
      const costElec = 0.45; // AED/kWh
      const costWaste = 0.8; // AED/kg (disposal cost)
      
      const totalCost = (energySaved * costElec) + (wasteSaved * costWaste);
      
      return {
          co2: Math.round(totalCo2),
          cost: Math.round(totalCost)
      };
  }, [energy, waste]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Gap Analysis",
      description: "Assess environmental impact.",
      details: "We evaluate your current environmental management practices against ISO 14001:2015 standards. We identify your organization's environmental aspects, impacts, and compliance obligations to create a clear action plan.",
      icon: <Search className="w-full h-full" />,
      smallIcon: <Search className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      id: 2,
      title: "Implementation",
      description: "Develop controls & policies.",
      details: "Our consultants assist in drafting the Environmental Policy, setting objectives, and establishing operational controls to minimize environmental footprint. We provide training to ensure staff competence.",
      icon: <FileText className="w-full h-full" />,
      smallIcon: <FileText className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      id: 3,
      title: "Internal Audit",
      description: "Verify system effectiveness.",
      details: "We conduct comprehensive internal audits to ensure the EMS is effectively implemented and maintained. We also facilitate management reviews to drive continual improvement before the final audit.",
      icon: <ClipboardCheck className="w-full h-full" />,
      smallIcon: <ClipboardCheck className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      id: 4,
      title: "Certification",
      description: "External audit support.",
      details: "We guide you through the Stage 1 and Stage 2 certification audits conducted by the Certification Body, helping you address any findings to successfully achieve ISO 14001 certification.",
      icon: <Award className="w-full h-full" />,
      smallIcon: <Award className="w-6 h-6 md:w-8 md:h-8" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
       <SEO 
         title="ISO 14001 Certification UAE | Environmental Management - Al Batra"
         description="Implement sustainable practices with ISO 14001 EMS certification. Reduce waste, lower costs, and comply with UAE environmental regulations."
       />

       {/* Hero Section */}
       <section className="pt-28 pb-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Top Text Content */}
             <div className="max-w-3xl mb-12">
                   <h2 className="text-primary font-bold tracking-wide uppercase text-xs mb-3">Service: Environmental Management</h2>
                   <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight leading-tight mb-6">
                      Environmental Management <br/>(ISO 14001) Certification
                   </h1>
                   <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                      We assist UAE businesses in implementing sustainable management systems that reduce environmental impact, ensure regulatory compliance, and improve operational efficiency.
                   </p>
             </div>

             {/* Grid: Form (Left) & Image (Right) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Form */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg relative z-10">
                   <h3 className="font-bold text-secondary mb-2 text-xl">Get Your EMS Quote</h3>
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
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
                      alt="Environmental engineer inspecting site" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors"></div>
                   {/* Overlay Badge */}
                   <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                       <div className="flex items-center gap-2">
                           <Leaf className="w-5 h-5 text-primary" />
                           <span className="text-sm font-bold text-secondary">Sustainable Solutions</span>
                       </div>
                   </div>
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

       {/* Benefits Section */}
       <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-secondary mb-4">3 Key Benefits of ISO 14001</h2>
                <p className="text-slate-500 max-w-2xl text-lg">Implementing an EMS helps you manage environmental responsibilities, reduce waste, and gain a competitive edge.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Benefit 1 */}
                 <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013" 
                        alt="Environmental Compliance" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <CheckCircle className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Environmental Compliance</h3>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Meet local and international environmental regulations effortlessly, avoiding penalties and ensuring smooth operations.
                        </p>
                    </div>
                 </div>

                 {/* Benefit 2 */}
                 <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Cost Efficiency" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Cost Efficiency</h3>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Reduce waste and energy consumption to improve your bottom line through optimized resource management.
                        </p>
                    </div>
                 </div>

                 {/* Benefit 3 */}
                 <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832" 
                        alt="Enhanced Reputation" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Enhanced Reputation</h3>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Demonstrate your commitment to sustainability to stakeholders and customers, building a greener brand image.
                        </p>
                    </div>
                 </div>
             </div>
          </div>
       </section>

       {/* Impact Calculator Section */}
       <section className="py-20 bg-secondary relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text & Inputs */}
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                        <Calculator className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Impact Estimator</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Calculate Your Potential Savings</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      See how much you could save annually by implementing an ISO 14001 Environmental Management System.
                   </p>

                   <div className="space-y-10 bg-white/5 p-8 rounded-2xl border border-white/10">
                        {/* Input 1: Energy */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-primary" /> Monthly Energy Usage
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{energy.toLocaleString()} kWh</span>
                            </div>
                            <input 
                                type="range" 
                                min="1000" 
                                max="50000" 
                                step="100" 
                                value={energy} 
                                onChange={(e) => setEnergy(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((energy - 1000) * 100) / (50000 - 1000)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>1,000 kWh</span>
                                <span>50,000 kWh</span>
                            </div>
                        </div>

                        {/* Input 2: Waste */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <Recycle className="w-4 h-4 text-primary" /> Monthly Waste Generated
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{waste.toLocaleString()} kg</span>
                            </div>
                            <input 
                                type="range" 
                                min="100" 
                                max="10000" 
                                step="50" 
                                value={waste} 
                                onChange={(e) => setWaste(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((waste - 100) * 100) / (10000 - 100)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>100 kg</span>
                                <span>10,000 kg</span>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Results Card */}
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <TrendingUp className="w-32 h-32 text-secondary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary mb-8">Estimated Annual Impact</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
                            <div className="flex items-center text-sm text-slate-500 mb-2">
                                CO₂ Emissions Reduced
                                <Tooltip text="Based on ~15% efficiency gain and average grid emission factors (0.45 kg CO2/kWh)." />
                            </div>
                            <div className="text-4xl font-extrabold text-primary mb-1">
                                {savings.co2.toLocaleString()} <span className="text-lg font-medium text-slate-400">kg</span>
                            </div>
                            <div className="text-xs text-green-600 font-bold flex items-center">
                                <Leaf className="w-3 h-3 mr-1" /> Equivalent to planting {Math.round(savings.co2 / 20)} trees
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
                            <div className="flex items-center text-sm text-slate-500 mb-2">
                                Cost Savings
                                <Tooltip text="Estimated savings from reduced energy bills (0.45 AED/kWh) and waste disposal fees." />
                            </div>
                            <div className="text-4xl font-extrabold text-secondary mb-1">
                                <span className="text-2xl align-top mr-1">AED</span>{savings.cost.toLocaleString()}
                            </div>
                            <div className="text-xs text-green-600 font-bold flex items-center">
                                <TrendingUp className="w-3 h-3 mr-1" /> ROI in ~6 months
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm text-slate-500 text-center">
                            *Estimates based on typical ISO 14001 efficiency improvements (15-20%).
                        </p>
                        <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                            Get a Personalized Assessment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Link>
                    </div>
                </div>

             </div>
          </div>
       </section>

       {/* Audience Section */}
       <section className="py-24 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-extrabold text-secondary mb-4">Who is ISO 14001 for?</h2>
             <p className="text-slate-500 max-w-2xl mx-auto mb-16">
                It is suitable for any organization—regardless of size or sector—seeking to manage its environmental responsibilities in a systematic manner.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Factory className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Manufacturing Units</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Recycle className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Waste Management</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Building className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Construction & Real Estate</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-40">
                   <Globe className="w-8 h-8 text-secondary mb-4" />
                   <span className="font-bold text-secondary text-sm">Corporate Offices</span>
                </div>
             </div>
          </div>
       </section>

      {/* Case Studies & Impact */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Sustainability Success Stories</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">Green Business is Good Business</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped companies reduce their footprint and save costs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Factory className="w-3 h-3 mr-1" /> Manufacturing
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">30%</div>
                           <div className="text-xs text-slate-400 font-medium">Waste Reduction</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Zero-Waste Initiative</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A packaging factory wanted to minimize landfill waste. We implemented an ISO 14001 framework that optimized their material usage and recycling processes.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Recycle className="w-4 h-4 text-primary mr-2" />
                                Higher Recycling Rate
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Green Award Winner
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Building className="w-3 h-3 mr-1" /> Commercial
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">AED 200k</div>
                           <div className="text-xs text-slate-400 font-medium">Annual Energy Savings</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Energy Management Optimization</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        We helped a corporate HQ implement energy-saving controls as part of their EMS, resulting in significant utility cost reductions and LEED certification points.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Zap className="w-4 h-4 text-primary mr-2" />
                                Lower Carbon Footprint
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                Full Compliance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Certification Process Section */}
      <ProcessTimeline 
        steps={steps} 
        sectionTitle="Certification Process"
        sectionSubtitle="We simplify the complex path to ISO 14001 certification into a clear, manageable timeline."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "Al Batra guided us through ISO 14001 with such clarity. We not only got certified but actually reduced our operational costs by minimizing waste."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                      alt="Sarah Jenkins" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Sarah Jenkins</div>
                    <div className="text-slate-500 text-xs">Sustainability Officer, GreenBuild LLC</div>
                </div>
            </div>
        </div>
      </section>

       {/* Cross Sell */}
      <section className="py-16 bg-white border-t border-slate-100">
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
                 <Link to="/service/qms" className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Quality Management Systems to improve operational consistency.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 2 */}
                 <Link to="/service/fsms" className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 22000 (Food Safety)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure hygiene and safety across the food supply chain.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Utensils className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 3 */}
                 <Link to="/service/ohsas" className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
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

export default ServiceEMS;