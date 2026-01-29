import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Factory, Wrench, Check, ArrowRight, ShieldCheck, Settings, Droplets, Search, FileText, ClipboardCheck, Award, TrendingUp, AlertTriangle, Briefcase, BarChart3, Info } from 'lucide-react';
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

const ServiceISO29001: React.FC = () => {
  // Calculator State
  const [revenue, setRevenue] = useState(5000000); // Annual Revenue
  const [defectRate, setDefectRate] = useState(5); // % Rework/Defects

  const impact = useMemo(() => {
      // Cost of Non-Quality (CONQ) Logic
      // In Oil & Gas, rework is expensive.
      
      const currentLoss = revenue * (defectRate / 100);
      
      // ISO 29001 typically targets a 50% reduction in CONQ through prevention
      const reductionFactor = 0.50;
      const potentialSavings = currentLoss * reductionFactor;
      
      const roi = Math.round((potentialSavings / 50000) * 100); // Assuming ~50k implementation cost for ROI calc

      return { 
          currentLoss: Math.round(currentLoss), 
          potentialSavings: Math.round(potentialSavings),
          roi 
      };
  }, [revenue, defectRate]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Context & Risk Analysis",
      description: "Supply chain mapping.",
      details: "We analyze your specific role in the Oil & Gas supply chain, identifying critical operational risks and customer requirements (e.g., API Q1/Q2 alignment) to define the QMS scope.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "System Design",
      description: "Defect prevention focus.",
      details: "We develop procedures specifically designed to prevent defects and reduce variation and waste, integrating sector-specific requirements for traceability and contingency planning.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Implementation",
      description: "Operational controls.",
      details: "We assist in implementing strict operational controls, including maintenance integrity, design and development verification, and supplier quality management protocols.",
      icon: <Settings className="w-full h-full" />
    },
    {
      id: 4,
      title: "Certification Audit",
      description: "Achieve ISO 29001.",
      details: "We guide you through the rigorous external audit process, helping you demonstrate compliance to the Certification Body and securing your status as a qualified industry supplier.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 29001 Certification UAE | Oil & Gas Quality Management - Al Batra"
        description="Specialized ISO 29001 consultancy for Petroleum, Petrochemical, and Natural Gas industries. Secure vendor approval with ADNOC, Aramco, and major EPCs."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1563252722-4a0293eb029b?q=80&w=2070&auto=format&fit=crop" 
                alt="Oil refinery industrial complex" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Petroleum & Gas Experts</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Oil & Gas QMS <br/>(ISO 29001) <br/>
                        <span className="text-primary">Certification Services</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Precision is non-negotiable in the energy sector. We help organizations in the petroleum, petrochemical, and natural gas industries implement ISO 29001 to manage risk and ensure quality.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Pre-qualification for Majors (ADNOC, etc.)
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Defect Prevention & Risk Management
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
                        title="Get Your ISO 29001 Quote"
                        subtitle="Vendor approval starts here."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 29001?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Standardization in the oil and gas sector is vital for safety, reliability, and business continuity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1516937965742-b9b59523bb74?q=80&w=2070&auto=format&fit=crop" 
                        alt="Risk Mitigation" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Risk Mitigation</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Systematically identify and control risks in a high-hazard industry, preventing catastrophic failures and ensuring asset integrity.
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Vendor Qualification" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Vendor Qualification</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            ISO 29001 is often a mandatory prerequisite for tendering with National Oil Companies (NOCs) and International Oil Companies (IOCs).
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                        alt="Supply Chain Consistency" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Settings className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Supply Chain Consistency</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Reduce variation and waste in the supply chain. Ensure that products and services consistently meet the strict technical specifications of the sector.
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
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Cost of Non-Quality (CONQ)</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Estimate Revenue Recovery</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      Defects and rework in the energy sector are costly. Calculate how much you could save by implementing a robust QMS focused on defect prevention.
                   </p>

                   <div className="space-y-10 bg-white/5 p-8 rounded-2xl border border-white/10">
                        {/* Input: Revenue */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-primary" /> Annual Revenue / Project Value
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{revenue.toLocaleString()} AED</span>
                            </div>
                            <input 
                                type="range" 
                                min="1000000" 
                                max="100000000" 
                                step="1000000" 
                                value={revenue} 
                                onChange={(e) => setRevenue(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((revenue - 1000000) * 100) / (100000000 - 1000000)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>1M AED</span>
                                <span>100M AED</span>
                            </div>
                        </div>

                        {/* Input: Defect Rate */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-primary" /> Est. Cost of Poor Quality (COPQ)
                                    <Tooltip text="Percentage of revenue lost to rework, scrap, warranty claims, and downtime." />
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{defectRate}%</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="20" 
                                step="0.5" 
                                value={defectRate} 
                                onChange={(e) => setDefectRate(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-secondary [&::-moz-range-thumb]:border-4 hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #0FA3A3, #0FA3A3)`,
                                    backgroundSize: `${((defectRate - 1) * 100) / (20 - 1)}% 100%`,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>1% (Best Class)</span>
                                <span>20% (High Waste)</span>
                            </div>
                        </div>
                   </div>
                </div>

                {/* Results Card */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Factory className="w-32 h-32 text-secondary" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-8">Financial Impact Analysis</h3>
                        
                        <div className="space-y-6 mb-8">
                            <div className="p-5 bg-red-50 rounded-xl border border-red-100 flex justify-between items-center">
                                <div>
                                    <div className="text-xs font-bold text-red-600 mb-1 uppercase tracking-wide">Current Annual Loss</div>
                                    <div className="text-sm text-slate-500">Money wasted on non-quality</div>
                                </div>
                                <div className="text-xl font-extrabold text-secondary">
                                    <span className="text-sm text-slate-400 mr-1">AED</span>{impact.currentLoss.toLocaleString()}
                                </div>
                            </div>

                            <div className="p-5 bg-teal-50 rounded-xl border border-teal-100 flex justify-between items-center relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-xs font-bold text-teal-600 mb-1 uppercase tracking-wide">Potential Recovery</div>
                                    <div className="text-sm text-slate-500">Est. savings with ISO 29001</div>
                                </div>
                                <div className="text-2xl font-extrabold text-primary relative z-10">
                                    <span className="text-sm text-slate-400 mr-1">AED</span>{impact.potentialSavings.toLocaleString()}
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center mb-6">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Estimated ROI</span>
                            <div className="text-3xl font-extrabold text-secondary mt-1">{impact.roi}%</div>
                            <span className="text-[10px] text-slate-400">First year return on consultancy investment</span>
                        </div>

                        <div className="space-y-4">
                            <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                                Start Recovering Revenue <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                            <p className="text-xs text-slate-400 text-center">
                                *Based on reducing defect rate by 50% through systematic quality management.
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 29001?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard is designed for the entire supply chain of the oil and gas sector:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Factory className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">OEM Manufacturers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Droplets className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Drilling Contractors</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Wrench className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Service Providers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Briefcase className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">EPC Contractors</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1516937965742-b9b59523bb74?q=80&w=2070&auto=format&fit=crop" 
                            alt="Industrial Pipeline" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Excellence in Energy</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Supporting the backbone of the UAE's economy with superior quality standards.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Factory className="w-3 h-3 mr-1" /> Manufacturing
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">Vendor</div>
                           <div className="text-xs text-slate-400 font-medium">Status Approved</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Major Contract Win</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A valve manufacturer in Abu Dhabi was struggling to get pre-qualified with ADNOC. We helped them upgrade their ISO 9001 to ISO 29001, resulting in immediate vendor approval.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Settings className="w-4 h-4 text-primary mr-2" />
                                Process Control
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                API Compliant
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wide">
                           <Wrench className="w-3 h-3 mr-1" /> Services
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">-60%</div>
                           <div className="text-xs text-slate-400 font-medium">Field Failures</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Service Reliability</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        An oilfield maintenance company faced penalties for service delays. We implemented the contingency planning requirements of ISO 29001, drastically improving uptime and client trust.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <TrendingUp className="w-4 h-4 text-primary mr-2" />
                                Revenue Growth
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                                Safety Integrated
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
        sectionSubtitle="A structured approach to aligning your operations with Oil & Gas industry standards."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 29001 was the differentiator we needed. Al Batra's knowledge of the specific technical requirements for the gas industry helped us secure a long-term contract with a major EPC."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop" 
                      alt="Eng. Tariq Mahmood" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Eng. Tariq Mahmood</div>
                    <div className="text-slate-500 text-xs">Technical Director, PetroServe</div>
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
                        <p className="text-xs text-slate-500 line-clamp-2">Critical for safety in high-hazard oil & gas environments.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Manage environmental impact and spill prevention.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Droplets className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/iso31000" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 31000 (Risk)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Enterprise risk management for volatile markets.</p>
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

export default ServiceISO29001;