import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Tablet, Wifi, Check, ArrowRight, Stethoscope, Users, Building, Search, FileText, ClipboardCheck, Award, AlertTriangle, Info, Syringe, HeartPulse, Network, Globe, ShieldCheck } from 'lucide-react';
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

const ServiceISO22870: React.FC = () => {
  // Interactive Feature State: POCT Complexity Calculator
  const [sites, setSites] = useState(5); // Number of locations
  const [operators, setOperators] = useState(20); // Number of non-lab staff
  const [connectivity, setConnectivity] = useState(false); // Connected middleware?

  const riskProfile = useMemo(() => {
      // Logic: More sites and operators increase risk. Connectivity decreases risk.
      let score = 0;
      
      // Site Score
      if (sites < 5) score += 1;
      else if (sites < 20) score += 3;
      else score += 5;

      // Operator Score
      if (operators < 20) score += 1;
      else if (operators < 100) score += 3;
      else score += 5;

      // Connectivity Modifier
      if (connectivity) score -= 3; // Connectivity significantly reduces data risk

      let level = "Low Risk";
      let color = "text-green-500";
      let recommendation = "Standard oversight sufficient. Focus on annual competency reviews.";

      if (score >= 4 && score <= 6) {
          level = "Moderate Risk";
          color = "text-orange-500";
          recommendation = "Formal POCT Committee required. Implement rigorous QC protocols.";
      } else if (score > 6) {
          level = "High Governance Needed";
          color = "text-red-500";
          recommendation = "Critical need for ISO 22870 framework. Automated middleware is highly recommended to manage data integrity.";
      }

      // Ensure score doesn't go below 0 for display logic if needed, though level logic handles it
      return { level, color, recommendation, score };
  }, [sites, operators, connectivity]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Feasibility & Scope",
      description: "Define clinical needs.",
      details: "We assess the clinical justification for POCT across your facility. We define the scope of the POCT service, identifying which tests, devices, and locations will be covered.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Governance Setup",
      description: "Committee & Policy.",
      details: "We help establish a multidisciplinary POCT Management Group (Committee) as required by ISO 22870 to oversee device selection, training, and quality assurance.",
      icon: <Users className="w-full h-full" />
    },
    {
      id: 3,
      title: "Training & QC",
      description: "Operator competence.",
      details: "We design robust training programs for non-laboratory staff (nurses, doctors) and implement Internal Quality Control (IQC) and External Quality Assurance (EQA) schemes.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 4,
      title: "Accreditation",
      description: "Assessment.",
      details: "We guide you through the accreditation process (often in conjunction with ISO 15189 for the central lab), ensuring full compliance with ISO 22870:2016 standards.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 22870 POCT Accreditation UAE | Point of Care Testing - Al Batra"
        description="Achieve ISO 22870 accreditation for Point of Care Testing. Expert consultancy for hospitals, clinics, and remote testing sites in Dubai & Sharjah."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1579684453423-f84349ca60df?q=80&w=2070&auto=format&fit=crop" 
                alt="Doctor using tablet for patient data" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Bedside Diagnostics</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Point of Care Testing <br/>(ISO 22870) <br/>
                        <span className="text-primary">Accreditation Services</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Ensure the quality and competence of testing performed near the patient. We help healthcare providers implement ISO 22870 to bridge the gap between clinical needs and laboratory standards.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Essential for Hospital Accreditation
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Manage Remote Testing Risks
                        </li>
                    </ul>

                    <div className="pt-6">
                         <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all">
                            Start Accreditation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-md ml-auto">
                     <LeadForm 
                        title="Get Your POCT Quote"
                        subtitle="Standardize your rapid testing."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 22870?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Bringing the lab to the patient requires rigorous control to ensure safety and accuracy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2832&auto=format&fit=crop" 
                        alt="Patient Care" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <HeartPulse className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Patient Outcomes</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Faster turnaround times for critical tests (like blood gas or glucose) enable immediate clinical decisions, improving patient survival and recovery rates.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Nurse training" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Operator Competence</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensure that nurses and non-lab staff operating devices are properly trained and competency-assessed, minimizing pre-analytical and analytical errors.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1516549655169-df83a092fc72?q=80&w=2070&auto=format&fit=crop" 
                        alt="Digital Health" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Activity className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Result Reliability</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Align POCT results with central laboratory standards. Proper QC ensures that a bedside result is just as trustworthy as a lab result.
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
                        <Network className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">POCT Governance Check</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Assess Your Governance Needs</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      The complexity of managing POCT increases with the number of sites and operators. Use this tool to estimate your governance requirements.
                   </p>

                   <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        
                        {/* Input 1: Testing Sites */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <Building className="w-4 h-4 text-primary" /> Testing Locations (Wards/Clinics)
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{sites}</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="50" 
                                step="1" 
                                value={sites} 
                                onChange={(e) => setSites(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>1 Site</span>
                                <span>50 Sites</span>
                            </div>
                        </div>

                        {/* Input 2: Operators */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-bold text-white flex items-center gap-2">
                                    <Users className="w-4 h-4 text-primary" /> Number of Operators
                                </label>
                                <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">{operators}</span>
                            </div>
                            <input 
                                type="range" 
                                min="5" 
                                max="200" 
                                step="5" 
                                value={operators} 
                                onChange={(e) => setOperators(Number(e.target.value))}
                                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-secondary [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                <span>5 Staff</span>
                                <span>200 Staff</span>
                            </div>
                        </div>

                        {/* Input 3: Connectivity */}
                        <div>
                             <label className="flex items-center space-x-3 cursor-pointer">
                                <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${connectivity ? 'bg-primary border-primary' : 'border-slate-500'}`} onClick={() => setConnectivity(!connectivity)}>
                                    {connectivity && <Check className="w-4 h-4 text-white" />}
                                </div>
                                <span className="text-sm font-bold text-white select-none" onClick={() => setConnectivity(!connectivity)}>
                                    Middleware Connectivity Enabled?
                                </span>
                                <Tooltip text="Are devices connected to a central server/LIS for automatic result transmission and QC monitoring?" />
                             </label>
                        </div>

                   </div>
                </div>

                {/* Results Card */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Tablet className="w-32 h-32 text-secondary" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-6">Governance Assessment</h3>
                        
                        <div className="space-y-6">
                            <div className="flex flex-col items-center justify-center py-6">
                                <div className={`text-2xl font-extrabold uppercase tracking-widest ${riskProfile.color}`}>
                                    {riskProfile.level}
                                </div>
                                <div className="text-xs text-slate-400 mt-2 font-medium">Complexity Score: {riskProfile.score}/10</div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${riskProfile.color}`} />
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Recommendation</div>
                                        <p className="text-sm text-slate-700 leading-snug">
                                            {riskProfile.recommendation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                                Build POCT Framework <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                            <p className="text-xs text-slate-400 text-center">
                                *Indicative assessment. A full gap analysis is recommended.
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 22870?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard applies to any healthcare facility performing testing outside the main laboratory:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Building className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Hospitals (ER/ICU)</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Stethoscope className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Clinics & Polyclinics</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Activity className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Home Care Services</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Syringe className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Pharmacies</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1584036561566-b93a901e3ae3?q=80&w=2070&auto=format&fit=crop" 
                            alt="Nurse performing blood test" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Clinical Accuracy Anywhere</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Empowering UAE healthcare with decentralized diagnostic excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Network className="w-3 h-3 mr-1" /> Hospital Network
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">100%</div>
                           <div className="text-xs text-slate-400 font-medium">Traceability</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Centralized Control</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A hospital group with 200+ glucometers across 15 wards faced data gaps. We implemented an ISO 22870 framework with connectivity, linking every result to a specific operator and patient.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Accredited
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Check className="w-4 h-4 text-primary mr-2" />
                                Errors Reduced
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wide">
                           <Activity className="w-3 h-3 mr-1" /> Urgent Care
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">Rapid</div>
                           <div className="text-xs text-slate-400 font-medium">Diagnostics</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Accuracy Assurance</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        An urgent care clinic needed to prove their rapid cardiac marker tests were accurate. ISO 22870 accreditation validated their IQC/EQA procedures, boosting patient trust.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Globe className="w-4 h-4 text-primary mr-2" />
                                World Class
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                                Safe
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
        sectionTitle="Accreditation Journey"
        sectionSubtitle="A systematic approach to bringing lab-quality standards to the bedside."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "We struggled to manage quality across our remote clinics. Al Batra helped us set up a centralized POCT committee and standardized our devices, making ISO 22870 accreditation achievable."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop" 
                      alt="Dr. Rania Yussef" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Dr. Rania Yussef</div>
                    <div className="text-slate-500 text-xs">Medical Director, Community Health Network</div>
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
                     <p className="text-sm text-slate-500 mt-1">Enhance your healthcare quality management.</p>
                </div>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:text-primary-dark">
                    Contact for bundle deal <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Link to="/service/iso15189" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 15189 (Labs)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">The gold standard for main medical laboratories.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Activity className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">General quality management for hospital administration.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Award className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Protect healthcare workers from biohazards.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Users className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceISO22870;