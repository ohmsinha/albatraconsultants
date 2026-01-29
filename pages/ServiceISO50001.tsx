import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Zap, TrendingDown, Leaf, Check, ArrowRight, Building2, Factory, Server, Home, Search, FileText, ClipboardCheck, Award, BarChart3, Lightbulb, Plug, Info } from 'lucide-react';
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

const ServiceISO50001: React.FC = () => {
  // Calculator State
  const [annualBill, setAnnualBill] = useState(500000); // Annual Electricity Bill in AED

  const projection = useMemo(() => {
      // ISO 50001 typically delivers 10-20% savings in first few years
      const lowSavingsPct = 0.10;
      const highSavingsPct = 0.20;
      
      const lowSavings = annualBill * lowSavingsPct;
      const highSavings = annualBill * highSavingsPct;
      
      // ROI Estimation (Rough assumption: Implementation cost is fixed or scales slightly, lets assume a base for calculation)
      // This is a simplified ROI for the visual
      const estimatedROI = "6-12 Months";

      // CO2 Estimation (0.45 kg CO2 per kWh, approx 0.45 AED per kWh commercial rate -> 1 AED = 1 kWh approx for ease)
      // 1 AED ~ 1 kWh (simplified commercial rate) -> 0.45kg CO2
      const kwhEquivalent = annualBill; 
      const co2Reduced = (kwhEquivalent * 0.15) * 0.45; // Average 15% reduction

      return {
          low: Math.round(lowSavings),
          high: Math.round(highSavings),
          roi: estimatedROI,
          co2: Math.round(co2Reduced)
      };
  }, [annualBill]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Energy Review",
      description: "Analyze consumption.",
      details: "We conduct a comprehensive energy review to establish your baseline. We identify significant energy uses (SEUs) and prioritize opportunities for improving energy performance.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "EnPIs & Baselines",
      description: "Set targets.",
      details: "We help you define Energy Performance Indicators (EnPIs) and Energy Baselines (EnBs) to measure future progress objectively against ISO 50001 standards.",
      icon: <BarChart3 className="w-full h-full" />
    },
    {
      id: 3,
      title: "Implementation",
      description: "Operational controls.",
      details: "We implement operational controls for your significant energy users, train staff on energy-efficient practices, and integrate energy management into procurement processes.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification",
      description: "External audit.",
      details: "We guide you through the certification audit, ensuring your EnMS is compliant and fully effective, leading to ISO 50001 certification and long-term cost savings.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 50001 Certification UAE | Energy Management System - Al Batra"
        description="Cut energy costs and carbon footprint with ISO 50001. Expert EnMS consultancy for factories, commercial buildings, and facilities in UAE."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
                alt="Solar panels and modern city" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Energy Efficiency Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Energy Management <br/>(ISO 50001) <br/>
                        <span className="text-primary">System Certification</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Slash your utility bills and carbon footprint. We help UAE organizations implement a structured framework to monitor, manage, and reduce energy consumption systematically.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            10-20% Typical Energy Savings
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Support UAE Net Zero 2050
                        </li>
                    </ul>

                    <div className="pt-6">
                         <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all">
                            Start Saving Energy
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-md ml-auto">
                     <LeadForm 
                        title="Get Your ISO 50001 Quote"
                        subtitle="Optimize your energy performance."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 50001?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of EnMS</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Energy management is the quickest way to reduce operational costs and environmental impact.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Financial Growth" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <TrendingDown className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Cost Reduction</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Directly impact your bottom line by systematically reducing energy waste and optimizing usage patterns across your facilities.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                        alt="Compliance Documents" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Regulatory Compliance</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Stay ahead of UAE energy regulations and government mandates for green buildings and industrial efficiency standards.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop" 
                        alt="Nature and Sustainability" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Leaf className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Sustainability</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Reduce your carbon footprint and demonstrate corporate social responsibility, enhancing your brand image.
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
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Energy Savings Projector</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Project Your Savings</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      ISO 50001 implementation often yields 10-20% savings in the first year through low-cost or no-cost operational improvements.
                   </p>

                   <div className="space-y-10 bg-white/5 p-8 rounded-2xl border border-white/10">
                        {/* Input: Annual Bill */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-primary" /> Annual Energy Bill (AED)
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{annualBill.toLocaleString()} AED</span>
                            </div>
                            <input 
                                type="range" 
                                min="100000" 
                                max="10000000" 
                                step="50000" 
                                value={annualBill} 
                                onChange={(e) => setAnnualBill(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((annualBill - 100000) * 100) / (10000000 - 100000)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>100k AED</span>
                                <span>10M AED</span>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Results Card */}
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Lightbulb className="w-32 h-32 text-secondary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary mb-8">Potential Annual Impact</h3>
                    
                    <div className="space-y-6 mb-8">
                        <div className="p-5 bg-teal-50 rounded-xl border border-teal-100 flex justify-between items-center">
                            <div>
                                <div className="text-xs font-bold text-teal-600 mb-1 uppercase tracking-wide">Potential Savings</div>
                                <div className="text-sm text-slate-500">Estimated 10% - 20% reduction</div>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-bold text-secondary">
                                    <span className="text-slate-400 text-xs">up to</span> {projection.high.toLocaleString()} AED
                                </div>
                                <div className="text-xs text-slate-400">
                                    min {projection.low.toLocaleString()} AED
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-green-50 rounded-xl border border-green-100 flex justify-between items-center">
                            <div>
                                <div className="text-xs font-bold text-green-600 mb-1 uppercase tracking-wide">Environmental Impact</div>
                                <div className="text-sm text-slate-500">CO2 Emissions Avoided</div>
                            </div>
                            <div className="text-2xl font-extrabold text-secondary">
                                {projection.co2.toLocaleString()} <span className="text-sm text-slate-400">kg</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center mb-6">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Estimated ROI Period</span>
                        <div className="text-3xl font-extrabold text-secondary mt-1">{projection.roi}</div>
                        <span className="text-[10px] text-slate-400">For implementation costs</span>
                    </div>

                    <div className="space-y-4">
                        <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                            Start Your Energy Audit <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Link>
                        <p className="text-xs text-slate-400 text-center">
                            *Estimates are indicative. Actual savings depend on facility type and current efficiency.
                        </p>
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 50001?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard is highly effective for energy-intensive sectors:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Factory className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Manufacturing</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Building2 className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Commercial Buildings</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Server className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Data Centers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Home className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Hotels & Malls</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1565514020176-db79373eb885?q=80&w=2070&auto=format&fit=crop" 
                            alt="Industrial plant at night" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Efficiency in Action</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Real results from UAE businesses that prioritized energy management.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Factory className="w-3 h-3 mr-1" /> Industrial
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">-25%</div>
                           <div className="text-xs text-slate-400 font-medium">Electricity Bill</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Plastic Factory Upgrade</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A plastics manufacturer in Sharjah had high utility costs. By implementing ISO 50001, we identified optimizing compressor usage and process heating, cutting costs by 25%.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Plug className="w-4 h-4 text-primary mr-2" />
                                Consumption Low
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Green Certified
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Home className="w-3 h-3 mr-1" /> Hospitality
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">Gold</div>
                           <div className="text-xs text-slate-400 font-medium">Green Key Status</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Hotel Sustainability</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A 5-star hotel in Dubai wanted to improve its eco-credentials. We helped establish an EnMS, optimizing HVAC and lighting systems, earning them a prestigious Green Key award.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <TrendingDown className="w-4 h-4 text-primary mr-2" />
                                Lower Overhead
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Leaf className="w-4 h-4 text-primary mr-2" />
                                Eco-Friendly
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
        sectionTitle="ISO 50001 Implementation"
        sectionSubtitle="A structured approach to mastering your energy performance."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "We thought our bills were fixed costs. ISO 50001 showed us we were wasting 20% of our energy. The savings paid for the consultancy in 6 months."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop" 
                      alt="Saeed Al-Nuaimi" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Saeed Al-Nuaimi</div>
                    <div className="text-slate-500 text-xs">Facility Director, Gulf Towers</div>
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
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Manage environmental impact beyond just energy.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Leaf className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure quality in your operational processes.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Check className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure safety while improving efficiency.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Award className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceISO50001;