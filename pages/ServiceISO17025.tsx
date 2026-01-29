import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Globe, Check, ArrowRight, Microscope, Scale, FileCheck, Search, FileText, ClipboardCheck, Award, AlertCircle, Info, Beaker, ShieldCheck, Ruler } from 'lucide-react';
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

const ServiceISO17025: React.FC = () => {
  // Interactive Feature State: Lab Readiness Calculator
  const [mgmtSystem, setMgmtSystem] = useState(1);
  const [methods, setMethods] = useState(1);
  const [calibration, setCalibration] = useState(1);

  const readiness = useMemo(() => {
      const totalScore = mgmtSystem + methods + calibration; // Max 9
      const percentage = Math.round((totalScore / 9) * 100);
      
      let level = "Gap Analysis Needed";
      let color = "text-red-500";
      let feedback = "Fundamental documentation and technical controls need to be established.";
      
      if (percentage >= 40 && percentage < 75) {
          level = "Development Phase";
          color = "text-orange-500";
          feedback = "Core systems exist but lack the technical rigor required for accreditation.";
      } else if (percentage >= 75) {
          level = "Audit Ready";
          color = "text-green-500";
          feedback = "Systems appear robust. Ready for internal audit and pre-assessment.";
      }

      return { level, color, feedback, percentage };
  }, [mgmtSystem, methods, calibration]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Gap Analysis",
      description: "Management & Technical review.",
      details: "We evaluate your current lab operations against ISO 17025:2017 clauses (4 to 8), focusing on impartiality, structural requirements, and technical resource competence.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "System Development",
      description: "Quality Manual & SOPs.",
      details: "We assist in drafting the Quality Manual, technical SOPs, and method validation protocols. We ensure document control systems are established to maintain data integrity.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Implementation & Validation",
      description: "PT & Calibration.",
      details: "We guide you through method validation, estimation of measurement uncertainty, and participation in Proficiency Testing (PT) schemes to prove technical competence.",
      icon: <FlaskConical className="w-full h-full" />
    },
    {
      id: 4,
      title: "Accreditation",
      description: "External assessment.",
      details: "We support you during the assessment by the Accreditation Body (e.g., EIAC, ENAS, GAC), helping you address non-conformities to secure your accreditation.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 17025 Accreditation UAE | Laboratory Management - Al Batra"
        description="Achieve ISO 17025 accreditation for testing and calibration laboratories. Expert consultancy for EIAC, ENAS, and GAC compliance in Dubai & Sharjah."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                alt="Laboratory Science and Testing" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Laboratory Competence</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Laboratory Management <br/>(ISO 17025) <br/>
                        <span className="text-primary">Accreditation Services</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Demonstrate that your laboratory operates competently and generates valid results. We guide Testing and Calibration labs through the rigorous ISO 17025 accreditation process.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Global Recognition (ILAC MRA)
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Support for EIAC / ENAS / GAC
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
                        title="Get Your ISO 17025 Quote"
                        subtitle="Prove your technical competence."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 17025?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Accreditation is not just a badge; it is the ultimate proof of your laboratory's reliability and precision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1581093588401-fbb073d7812c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Global Trade" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">International Acceptance</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Through the ILAC MRA, your test reports and calibration certificates are accepted globally, removing the need for re-testing in export markets.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop" 
                        alt="Data Analysis" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <FileCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Data Reliability</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensure consistent, valid results through rigorous method validation, measurement uncertainty estimation, and equipment traceability.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop" 
                        alt="Lab Technician" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Competitive Edge</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Distinguish your laboratory from non-accredited competitors. Accreditation is often a mandatory requirement for government tenders and high-value contracts.
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
                        <Microscope className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Accreditation Readiness Check</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">Are you ready for accreditation?</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      Assess your laboratory's current status against key ISO 17025 pillars: Management System, Method Validation, and Metrological Traceability.
                   </p>

                   <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        
                        {/* Input 1: Management System */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-white">Management System</label>
                                <span className="text-xs text-primary font-mono">{mgmtSystem === 1 ? 'None' : mgmtSystem === 2 ? 'ISO 9001' : 'ISO 17025 Implemented'}</span>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((val) => (
                                    <button 
                                        key={val}
                                        onClick={() => setMgmtSystem(val)}
                                        className={`flex-1 py-2 rounded text-xs font-bold transition-all ${mgmtSystem === val ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                                    >
                                        {val === 1 ? 'No Formal System' : val === 2 ? 'ISO 9001 Certified' : 'Option A / B Aligned'}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-2">
                                {mgmtSystem === 1 ? 'No documented policies or procedures in place.' : mgmtSystem === 2 ? 'General QMS in place, but lacks technical requirements.' : 'Policies address impartiality, confidentiality, and structure.'}
                            </p>
                        </div>

                        {/* Input 2: Methods */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-white">Method Verification</label>
                                <span className="text-xs text-primary font-mono">{methods === 1 ? 'Standard' : methods === 2 ? 'Verified' : 'Validated'}</span>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((val) => (
                                    <button 
                                        key={val}
                                        onClick={() => setMethods(val)}
                                        className={`flex-1 py-2 rounded text-xs font-bold transition-all ${methods === val ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                                    >
                                        {val === 1 ? 'Standard Only' : val === 2 ? 'Verified' : 'Fully Validated'}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-2">
                                {methods === 1 ? 'Using standard methods without internal checks.' : methods === 2 ? 'Performance characteristics checked against standard.' : 'Non-standard/In-house methods fully validated with uncertainty budget.'}
                            </p>
                        </div>

                        {/* Input 3: Calibration */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-white">Metrological Traceability</label>
                                <span className="text-xs text-primary font-mono">{calibration === 1 ? 'Ad-hoc' : calibration === 2 ? 'Traceable' : 'Accredited'}</span>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((val) => (
                                    <button 
                                        key={val}
                                        onClick={() => setCalibration(val)}
                                        className={`flex-1 py-2 rounded text-xs font-bold transition-all ${calibration === val ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                                    >
                                        {val === 1 ? 'Internal/None' : val === 2 ? 'Traceable Certs' : 'ISO 17025 Cal.'}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-2">
                                {calibration === 1 ? 'Equipment checked internally without standards.' : calibration === 2 ? 'Calibrated by external body, traceability not fully verified.' : 'All critical equipment calibrated by ISO 17025 accredited labs.'}
                            </p>
                        </div>

                   </div>
                </div>

                {/* Results Card */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Beaker className="w-32 h-32 text-secondary" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-6">Readiness Analysis</h3>
                        
                        <div className="space-y-6">
                            <div className="flex flex-col items-center justify-center py-6">
                                <div className="text-5xl font-extrabold text-secondary mb-2">{readiness.percentage}%</div>
                                <div className={`text-sm font-bold uppercase tracking-widest ${readiness.color}`}>
                                    {readiness.level}
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Assessment Findings</div>
                                        <p className="text-sm text-slate-700 leading-snug">
                                            {readiness.feedback}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                                Book Gap Analysis <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                            <p className="text-xs text-slate-400 text-center">
                                *Preliminary assessment. Formal gap analysis required.
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 17025?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard applies to any organization that performs testing, sampling, or calibration:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <FlaskConical className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Testing Labs</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Scale className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Calibration Labs</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Microscope className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">R&D Centers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <ShieldCheck className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">3rd Party Inspection</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" 
                            alt="Microscope analysis" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Proven Competence</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Helping UAE laboratories achieve the highest standard of technical excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <FlaskConical className="w-3 h-3 mr-1" /> Food Testing
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">Global</div>
                           <div className="text-xs text-slate-400 font-medium">Export Accepted</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Export Barrier Removed</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A food analysis lab's reports were being rejected by European importers. We helped them achieve ISO 17025 accreditation, ensuring their results are now accepted globally under the ILAC MRA.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Accredited
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Check className="w-4 h-4 text-primary mr-2" />
                                Reliable Data
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Ruler className="w-3 h-3 mr-1" /> Calibration
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">100%</div>
                           <div className="text-xs text-slate-400 font-medium">Contract Win Rate</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Tender Qualification</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A calibration lab serving the oil & gas sector was ineligible for major government tenders. We structured their Uncertainty Budgets and QMS, enabling them to win lucrative contracts with ADNOC.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                                Traceable
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Scale className="w-4 h-4 text-primary mr-2" />
                                High Precision
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
        sectionSubtitle="A systematic approach to proving your technical competence."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 17025 accreditation was a complex beast, especially the uncertainty calculations. Al Batra's consultants made it understandable and guided our technical team every step of the way."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop" 
                      alt="Dr. Amina Farooq" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Dr. Amina Farooq</div>
                    <div className="text-slate-500 text-xs">Lab Manager, Precision Analytics</div>
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
                     <p className="text-sm text-slate-500 mt-1">Enhance your laboratory's management system.</p>
                </div>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:text-primary-dark">
                    Contact for bundle deal <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Foundational quality management for the broader organization.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Award className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure safety of lab personnel handling hazardous materials.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ems" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Proper disposal of chemical and biological waste.</p>
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

export default ServiceISO17025;