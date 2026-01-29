import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Languages, GraduationCap, Globe, BookOpen, Check, ArrowRight, Building2, Users, School, Lightbulb, Search, FileText, ClipboardCheck, Award, MessageCircle, BarChart3, Info } from 'lucide-react';
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

const ServiceISO29991: React.FC = () => {
  // Interactive Feature State: LSP Readiness Pulse Check
  const [curriculum, setCurriculum] = useState(1);
  const [assessment, setAssessment] = useState(1);
  const [resources, setResources] = useState(1);

  const readiness = useMemo(() => {
      const totalScore = curriculum + assessment + resources; // Max 9
      const percentage = Math.round((totalScore / 9) * 100);
      
      let level = "Initial";
      let color = "text-red-500";
      let feedback = "Significant gaps in documentation and structure.";
      
      if (percentage >= 40 && percentage < 75) {
          level = "Developing";
          color = "text-orange-500";
          feedback = "Core processes exist but lack standardization.";
      } else if (percentage >= 75) {
          level = "Advanced";
          color = "text-green-500";
          feedback = "Well-positioned for ISO 29991 certification.";
      }

      return { level, color, feedback, percentage };
  }, [curriculum, assessment, resources]);

  const steps: Step[] = [
    {
      id: 1,
      title: "Needs Analysis",
      description: "Define learning goals.",
      details: "We review how you identify the language learning needs of your students and interested parties. We check if your current needs analysis process is documented and effective.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Service Design",
      description: "Curriculum & resources.",
      details: "We assist in aligning your curriculum design, learning materials, and environment with ISO 29991 standards, ensuring clear learning outcomes are defined.",
      icon: <BookOpen className="w-full h-full" />
    },
    {
      id: 3,
      title: "Teacher Competence",
      description: "Staff qualifications.",
      details: "We verify that your language teachers possess the required linguistic competence and pedagogical skills, establishing a framework for their continuous professional development.",
      icon: <GraduationCap className="w-full h-full" />
    },
    {
      id: 4,
      title: "Assessment & Audit",
      description: "Verify & certify.",
      details: "We audit your assessment methods to ensure transparency and validity. Finally, we guide you through the external certification audit to achieve ISO 29991 status.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 29991 Certification UAE | Language Learning Services - Al Batra"
        description="Elevate your language school with ISO 29991 certification. Expert consultancy for language institutes, tutoring centers, and corporate training in UAE."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Diverse group of students learning" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Education Excellence</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Language Learning <br/>(ISO 29991) <br/>
                        <span className="text-primary">Services Standard</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Distinguish your language institute with the global standard for language learning services. Enhance student satisfaction, transparency, and educational outcomes.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Standardize Curriculum Design
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Validate Assessment Methods
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
                        title="Get Your ISO 29991 Quote"
                        subtitle="Professionalize your language services."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 29991?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">For language service providers, quality is the ultimate differentiator in a crowded market.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
                        alt="Handshake and trust" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Award className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Credibility & Trust</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Demonstrate to students and corporate clients that your language services meet rigorous international standards for quality and transparency.
                        </p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                        alt="Happy students in class" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Student Satisfaction</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensure consistent delivery of learning outcomes through structured needs analysis and assessment, leading to happier, more successful learners.
                        </p>
                    </div>
                </div>

                {/* Benefit 3 */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                        alt="International flags and maps" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Global Recognition</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Gain a competitive edge in the international market. ISO 29991 is recognized worldwide as a mark of excellence in language education.
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
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">LSP Readiness Pulse Check</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">How prepared is your institute?</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      Assess your current maturity level against key ISO 29991 pillars: Curriculum, Assessment, and Resources.
                   </p>

                   <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        
                        {/* Input 1: Curriculum */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-white">Curriculum Design</label>
                                <span className="text-xs text-primary font-mono">{curriculum === 1 ? 'Ad-hoc' : curriculum === 2 ? 'Structured' : 'ISO Aligned'}</span>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((val) => (
                                    <button 
                                        key={val}
                                        onClick={() => setCurriculum(val)}
                                        className={`flex-1 py-2 rounded text-xs font-bold transition-all ${curriculum === val ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                                    >
                                        {val === 1 ? 'Basic' : val === 2 ? 'Standard' : 'Advanced'}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-2">
                                {curriculum === 1 ? 'Courses created on demand without formal structure.' : curriculum === 2 ? 'Defined syllabus exists but lacks review cycles.' : 'Formal design process with needs analysis & review.'}
                            </p>
                        </div>

                        {/* Input 2: Assessment */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-white">Assessment Methods</label>
                                <span className="text-xs text-primary font-mono">{assessment === 1 ? 'Informal' : assessment === 2 ? 'Defined' : 'Transparent'}</span>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((val) => (
                                    <button 
                                        key={val}
                                        onClick={() => setAssessment(val)}
                                        className={`flex-1 py-2 rounded text-xs font-bold transition-all ${assessment === val ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                                    >
                                        {val === 1 ? 'Teacher-led' : val === 2 ? 'Testing' : 'Validated'}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-2">
                                {assessment === 1 ? 'Subjective evaluation by individual teachers.' : assessment === 2 ? 'Standard tests used at end of course.' : 'Clear criteria shared with students; valid & reliable tools.'}
                            </p>
                        </div>

                        {/* Input 3: Resources */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-white">Learning Resources</label>
                                <span className="text-xs text-primary font-mono">{resources === 1 ? 'Variable' : resources === 2 ? 'Available' : 'Optimized'}</span>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((val) => (
                                    <button 
                                        key={val}
                                        onClick={() => setResources(val)}
                                        className={`flex-1 py-2 rounded text-xs font-bold transition-all ${resources === val ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                                    >
                                        {val === 1 ? 'Ad-hoc' : val === 2 ? 'Supplied' : 'Curated'}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-2">
                                {resources === 1 ? 'Teachers use their own materials.' : resources === 2 ? 'Standard textbooks provided.' : 'Resources mapped to outcomes; environment optimized.'}
                            </p>
                        </div>

                   </div>
                </div>

                {/* Results Card */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Languages className="w-32 h-32 text-secondary" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-6">Readiness Analysis</h3>
                        
                        <div className="space-y-6">
                            <div className="flex flex-col items-center justify-center py-6">
                                <div className="text-5xl font-extrabold text-secondary mb-2">{readiness.percentage}%</div>
                                <div className={`text-sm font-bold uppercase tracking-widest ${readiness.color}`}>
                                    {readiness.level} Maturity
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <div className="flex items-start gap-3">
                                    <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
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
                                Get Detailed Gap Analysis <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                            <p className="text-xs text-slate-400 text-center">
                                *Preliminary self-assessment. Official audit required for certification.
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who needs ISO 29991?</h3>
                        <p className="text-slate-500 mb-8 text-lg">This standard is specifically designed for language learning services outside formal education:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <School className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Language Institutes</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Building2 className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Corporate Training</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Users className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Tutoring Centers</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Globe className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Online Platforms</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                            alt="Corporate language training" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Excellence in Education</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Helping UAE language providers raise the bar.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <School className="w-3 h-3 mr-1" /> Institute
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">+35%</div>
                           <div className="text-xs text-slate-400 font-medium">Enrollment</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Dubai Language School</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A private language institute faced stiff competition. By achieving ISO 29991, they differentiated their brand, proving their quality to parents and adult learners, boosting enrollment significantly.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                Market Leader
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <MessageCircle className="w-4 h-4 text-primary mr-2" />
                                Student Trust
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Building2 className="w-3 h-3 mr-1" /> Corporate
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">100%</div>
                           <div className="text-xs text-slate-400 font-medium">Consistency</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Training Provider</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A corporate training firm delivering business English across multiple branches used ISO 29991 to standardize their curriculum and assessment, ensuring consistent quality for all clients.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Check className="w-4 h-4 text-primary mr-2" />
                                Standardized
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Users className="w-4 h-4 text-primary mr-2" />
                                Client Retention
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
        sectionTitle="Certification Journey"
        sectionSubtitle="A structured pathway to validating your language services."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 29991 gave us the framework we lacked. It helped us organize our curriculum and assess our students more fairly. The feedback from learners has been overwhelmingly positive."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=200&auto=format&fit=crop" 
                      alt="Maria Gonzalez" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Maria Gonzalez</div>
                    <div className="text-slate-500 text-xs">Academic Director, LinguaWorld</div>
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
                     <p className="text-sm text-slate-500 mt-1">Combine standards for total quality management.</p>
                </div>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:text-primary-dark">
                    Contact for bundle deal <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Link to="/service/qms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">General quality management for operational efficiency.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Award className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/iso10002" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 10002 (Complaints)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Handle student feedback and complaints effectively.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <MessageCircle className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/isms" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 27001 (ISMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Protect student data and intellectual property.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <ClipboardCheck className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceISO29991;