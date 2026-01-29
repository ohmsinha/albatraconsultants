import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, AlertTriangle, Check, ArrowRight, MapPin, UserCheck, TrendingUp, Search, FileText, ClipboardCheck, Award, HeartPulse, Activity, Calculator, Bus } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const Tooltip = ({ text }: { text: string }) => (
  <div className="group relative inline-flex items-center ml-2">
    <AlertTriangle className="w-4 h-4 text-slate-400 cursor-help hover:text-primary transition-colors" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-secondary text-white text-xs leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-20 text-center shadow-xl border border-slate-700 transform translate-y-2 group-hover:translate-y-0">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-secondary"></div>
    </div>
  </div>
);

const ServiceISO39001: React.FC = () => {
  // Calculator State
  const [fleetSize, setFleetSize] = useState(50);
  const [accidentCost, setAccidentCost] = useState(100000); // Annual cost in AED

  const savings = useMemo(() => {
      // Industry estimates for ISO 39001 implementation
      const accidentReduction = 0.35; // 35% reduction in accidents
      const insuranceSavings = 0.10; // 10% reduction in premiums (estimated)
      const efficiencyGain = 0.05; // 5% fuel/maintenance savings due to better driving
      
      const directSavings = accidentCost * accidentReduction;
      // Rough estimate: insurance cost is often ~5-10% of vehicle value, let's approximate based on fleet size
      // Avg commercial vehicle insurance ~3000 AED * Fleet Size
      const estimatedInsurance = fleetSize * 3000;
      const insuranceSaved = estimatedInsurance * insuranceSavings;
      
      const totalSavings = directSavings + insuranceSaved;
      
      return {
          direct: Math.round(directSavings),
          insurance: Math.round(insuranceSaved),
          total: Math.round(totalSavings)
      };
  }, [fleetSize, accidentCost]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Context & Scope",
      description: "Analyze traffic risks.",
      details: "We identify your organization's role in the road traffic system, analyze crash data, and define the scope of the RTS management system tailored to your fleet and routes.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "RTS Planning",
      description: "Set safety targets.",
      details: "We help establish RTS performance factors (e.g., speed limits, vehicle safety features) and set measurable objectives to reduce death and serious injuries.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Operational Support",
      description: "Driver training & controls.",
      details: "Implementation of rigorous driver training programs, vehicle maintenance schedules, and emergency response procedures to ensure road safety policies are practiced daily.",
      icon: <UserCheck className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification Audit",
      description: "Achieve ISO 39001.",
      details: "We guide you through the external audit process, ensuring your RTSMS is compliant and effective, leading to certification and enhanced reputation.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 39001 Road Traffic Safety UAE | Fleet Management - Al Batra"
        description="Reduce accidents and save lives with ISO 39001 Road Traffic Safety (RTS) certification. Expert consultancy for logistics, transport, and corporate fleets in UAE."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=2018&auto=format&fit=crop" 
                alt="Trucks on highway at sunset" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Road Safety Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Road Traffic Safety <br/>(ISO 39001) <br/>
                        <span className="text-primary">Management Systems</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Protect your drivers, fleet, and brand. We help UAE organizations implement the ISO 39001 framework to reduce death and serious injuries related to road traffic crashes.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Reduce Accident Rates & Costs
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Demonstrate CSR Commitment
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
                        title="Get Your ISO 39001 Quote"
                        subtitle="Safer roads. Better business."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 39001?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of RTSMS</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Beyond compliance, it's a moral imperative and a smart financial decision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop" 
                        alt="Save Lives" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <HeartPulse className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Save Lives</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            The primary goal is to reduce death and serious injury. A structured system identifies high-risk routes and behaviors to prevent tragedies.
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Cost Reduction" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Cost Reduction</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Fewer accidents mean lower repair costs, reduced insurance premiums, and less downtime for vehicles and drivers.
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                        alt="Corporate Responsibility" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Corporate Responsibility</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Demonstrate to stakeholders and the community that your organization is a responsible road user committed to public safety.
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Fleet ROI Estimator</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Calculate Potential Savings</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      Implementing ISO 39001 improves driver behavior and reduces incidents. Estimate your potential annual savings based on your fleet metrics.
                   </p>

                   <div className="space-y-10 bg-white/5 p-8 rounded-2xl border border-white/10">
                        {/* Input: Fleet Size */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <Truck className="w-4 h-4 text-primary" /> Fleet Size
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{fleetSize} Vehicles</span>
                            </div>
                            <input 
                                type="range" 
                                min="10" 
                                max="500" 
                                step="10" 
                                value={fleetSize} 
                                onChange={(e) => setFleetSize(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((fleetSize - 10) * 100) / (500 - 10)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>10 Vehicles</span>
                                <span>500 Vehicles</span>
                            </div>
                        </div>

                        {/* Input: Accident Costs */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-primary" /> Annual Accident Costs (AED)
                                    <Tooltip text="Includes direct repairs, fines, medical costs, and downtime." />
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{accidentCost.toLocaleString()} AED</span>
                            </div>
                            <input 
                                type="range" 
                                min="50000" 
                                max="2000000" 
                                step="50000" 
                                value={accidentCost} 
                                onChange={(e) => setAccidentCost(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((accidentCost - 50000) * 100) / (2000000 - 50000)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>50k AED</span>
                                <span>2M AED</span>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Results Card */}
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Truck className="w-32 h-32 text-secondary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary mb-8">Estimated Annual Impact</h3>
                    
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="p-5 bg-teal-50 rounded-xl border border-teal-100 flex justify-between items-center">
                            <div>
                                <div className="text-xs font-bold text-teal-600 mb-1 uppercase tracking-wide">Accident Cost Savings</div>
                                <div className="text-sm text-slate-500">Based on ~35% reduction in incidents</div>
                            </div>
                            <div className="text-2xl font-extrabold text-secondary">
                                <span className="text-sm text-slate-400 mr-1">AED</span>{savings.direct.toLocaleString()}
                            </div>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 flex justify-between items-center">
                            <div>
                                <div className="text-xs font-bold text-blue-600 mb-1 uppercase tracking-wide">Insurance Savings</div>
                                <div className="text-sm text-slate-500">Potential premium reduction</div>
                            </div>
                            <div className="text-2xl font-extrabold text-secondary">
                                <span className="text-sm text-slate-400 mr-1">AED</span>{savings.insurance.toLocaleString()}
                            </div>
                        </div>

                        <div className="p-6 bg-slate-800 rounded-xl shadow-md text-white mt-2">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Total Projected Savings</div>
                                    <div className="text-4xl font-extrabold">{savings.total.toLocaleString()} <span className="text-lg text-slate-400">AED</span></div>
                                </div>
                                <TrendingUp className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs text-slate-400 text-center italic">
                            *Estimates based on industry averages for ISO 39001 adoption. Actual results vary by organization.
                        </p>
                        <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                            Start Your Safety Journey <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 39001?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard is applicable to any organization that interacts with the road traffic system:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Truck className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Logistics Companies</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Bus className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Public Transport</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <MapPin className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Taxi Fleets</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <UserCheck className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">School Transport</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1586797824967-0c2f0b7493b2?q=80&w=2070&auto=format&fit=crop" 
                            alt="City bus traffic" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Safer Roads, Stronger Business</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped UAE fleets minimize risk and maximize efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Truck className="w-3 h-3 mr-1" /> Logistics
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">-40%</div>
                           <div className="text-xs text-slate-400 font-medium">Accident Rate</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Fleet Safety Turnaround</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A major distribution company faced rising insurance costs due to frequent minor accidents. We implemented ISO 39001 driver protocols, resulting in a 40% drop in incidents within 12 months.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Premium Reduced
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <TrendingUp className="w-4 h-4 text-primary mr-2" />
                                Uptime Increased
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 text-xs font-bold uppercase tracking-wide">
                           <Bus className="w-3 h-3 mr-1" /> Transport
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">100%</div>
                           <div className="text-xs text-slate-400 font-medium">Compliance</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">School Bus Safety</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A school transport provider needed to assure parents of student safety. We helped them certify to ISO 39001, setting a new benchmark for safety in educational transport.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Check className="w-4 h-4 text-primary mr-2" />
                                Parent Trust
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                                Zero Fatalities
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
        sectionTitle="ISO 39001 Implementation"
        sectionSubtitle="A structured approach to making your fleet safer and more efficient."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 39001 helped us identify risks we hadn't even considered. Our drivers are more aware, our vehicles are better maintained, and our accident costs have plummeted."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=200&auto=format&fit=crop" 
                      alt="Khalid Al-Amri" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Khalid Al-Amri</div>
                    <div className="text-slate-500 text-xs">Fleet Manager, Desert Transport Co.</div>
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
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure driver health and safety beyond traffic risks.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <HeartPulse className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Manage environmental impact of fleet emissions.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Activity className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Quality Management Systems for logistics efficiency.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Check className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceISO39001;