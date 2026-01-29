import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Users, Globe, Scale, Leaf,  Check, ArrowRight, Building, Search, FileText, ClipboardCheck, Award, Smile, HandHeart, Megaphone, BarChart3, HelpCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const Tooltip = ({ text }: { text: string }) => (
  <div className="group relative inline-flex items-center ml-2">
    <HelpCircle className="w-4 h-4 text-slate-400 cursor-help hover:text-primary transition-colors" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-secondary text-white text-xs leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-20 text-center shadow-xl border border-slate-700 transform translate-y-2 group-hover:translate-y-0">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-secondary"></div>
    </div>
  </div>
);

const ServiceISO26000: React.FC = () => {
  // Assessment State for 7 Core Subjects
  const [scores, setScores] = useState({
    governance: 5,
    humanRights: 5,
    labor: 5,
    environment: 5,
    fairPractices: 5,
    consumer: 5,
    community: 5
  });

  const assessment = useMemo(() => {
      const total = (Object.values(scores) as number[]).reduce((a, b) => a + b, 0);
      const average = total / 7;
      const percentage = Math.round((total / 70) * 100);
      
      let level = "Initiating";
      let description = "You are at the beginning of your CSR journey. Focus on establishing basic policies.";
      let color = "text-red-500";

      if (percentage > 40 && percentage <= 70) {
          level = "Developing";
          description = "You have good practices in place. Now focus on integrating them into core strategy.";
          color = "text-orange-500";
      } else if (percentage > 70) {
          level = "Advanced";
          description = "You are a leader in social responsibility. Focus on impact measurement and innovation.";
          color = "text-green-500";
      }

      return { total, average, percentage, level, description, color };
  }, [scores]);

  const handleScoreChange = (key: keyof typeof scores, value: number) => {
      setScores(prev => ({ ...prev, [key]: value }));
  };

  const steps: Step[] = [
    {
      id: 1,
      title: "Stakeholder Engagement",
      description: "Map & listen.",
      details: "We identify your key stakeholders (employees, community, investors) and facilitate dialogue to understand their expectations and concerns regarding your social impact.",
      icon: <Users className="w-full h-full" />
    },
    {
      id: 2,
      title: "Core Subject Review",
      description: "Assess 7 pillars.",
      details: "We conduct a gap analysis against the 7 core subjects of ISO 26000: Human Rights, Labor Practices, Environment, Fair Operating Practices, Consumer Issues, and Community Involvement.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 3,
      title: "Strategy Integration",
      description: "Embed in policy.",
      details: "We help you integrate social responsibility into your mission, code of conduct, and daily operations, moving beyond charity to strategic corporate responsibility.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 4,
      title: "Reporting & Communication",
      description: "Transparency.",
      details: "We assist in creating CSR reports (aligned with GRI or local standards) to transparently communicate your performance and progress to the world.",
      icon: <Megaphone className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ISO 26000 Social Responsibility UAE | CSR Consultancy - Al Batra"
        description="Build an ethical brand with ISO 26000 guidance. Expert CSR consultancy for sustainability, community impact, and ethical governance in UAE."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop" 
                alt="Diverse hands together team" 
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
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Ethical Business</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Social Responsibility <br/>(ISO 26000) <br/>
                        <span className="text-primary">Guidance Standard</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Go beyond profit. We guide UAE organizations to operate in a socially responsible way, contributing to sustainable development and building lasting trust with stakeholders.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Enhance Brand Reputation
                        </li>
                         <li className="flex items-center text-slate-300">
                            <Check className="w-5 h-5 text-primary mr-3" />
                            Attract & Retain Talent
                        </li>
                    </ul>

                    <div className="pt-6">
                         <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all">
                            Start CSR Strategy
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full max-w-md ml-auto">
                     <LeadForm 
                        title="Get Your ISO 26000 Quote"
                        subtitle="Build a better business."
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
                 <h2 className="text-sm text-primary font-bold tracking-wide uppercase mb-2">Why ISO 26000?</h2>
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Social responsibility is no longer optional; it is a strategic necessity for modern businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Competitive Advantage" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <HandHeart className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Competitive Advantage</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Customers, investors, and partners increasingly prefer organizations that demonstrate ethical behavior and sustainability.
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop" 
                        alt="Employee Engagement" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Employee Engagement</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            A strong CSR profile boosts morale, productivity, and retention. People want to work for companies that do good.
                        </p>
                    </div>
                </div>

                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                        alt="Risk Management" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Risk Management</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Identify and mitigate social and environmental risks early, preventing reputational damage and legal issues.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Interactive Assessment Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Text & Inputs */}
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">CSR Maturity Assessment</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-white mb-6">How mature is your organization?</h2>
                   <p className="text-slate-300 mb-8 text-lg">
                      Rate your current practices on a scale of 1-10 against the 7 Core Subjects of ISO 26000 to see where you stand.
                   </p>

                   <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        
                        {[
                          { key: 'governance', label: 'Org. Governance', desc: 'Decision-making transparency' },
                          { key: 'humanRights', label: 'Human Rights', desc: 'Due diligence & risk avoidance' },
                          { key: 'labor', label: 'Labor Practices', desc: 'Health, safety & conditions' },
                          { key: 'environment', label: 'Environment', desc: 'Pollution & resource use' },
                          { key: 'fairPractices', label: 'Fair Operating', desc: 'Anti-corruption & competition' },
                          { key: 'consumer', label: 'Consumer Issues', desc: 'Fair marketing & privacy' },
                          { key: 'community', label: 'Community', desc: 'Involvement & development' },
                        ].map((item) => (
                          <div key={item.key}>
                              <div className="flex justify-between items-end mb-2">
                                  <div>
                                    <label className="text-sm font-bold text-white block">{item.label}</label>
                                    <span className="text-xs text-slate-400">{item.desc}</span>
                                  </div>
                                  <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-1 rounded">
                                    {scores[item.key as keyof typeof scores]}
                                  </span>
                              </div>
                              <input 
                                  type="range" 
                                  min="1" 
                                  max="10" 
                                  step="1" 
                                  value={scores[item.key as keyof typeof scores]} 
                                  onChange={(e) => handleScoreChange(item.key as keyof typeof scores, Number(e.target.value))}
                                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                              />
                          </div>
                        ))}

                   </div>
                </div>

                {/* Results Card */}
                <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl relative border-t-4 border-primary">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <Award className="w-32 h-32 text-secondary" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-secondary mb-8">Your CSR Maturity Profile</h3>
                        
                        <div className="flex flex-col items-center justify-center mb-8">
                            <div className="relative w-40 h-40 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className={`${assessment.color} transition-all duration-1000 ease-out`} strokeDasharray={440} strokeDashoffset={440 - (440 * assessment.percentage) / 100} />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-4xl font-extrabold text-secondary">{assessment.percentage}%</span>
                                    <span className={`text-xs font-bold uppercase tracking-wide ${assessment.color}`}>{assessment.level}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                            <p className="text-sm text-slate-600 leading-relaxed text-center">
                                {assessment.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Link to="/contact" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors text-sm flex items-center justify-center shadow-lg group">
                                Get Detailed Analysis <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                            <p className="text-xs text-slate-400 text-center">
                                *Self-assessment only. Contact us for a formal gap analysis.
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
                        <h3 className="text-3xl font-extrabold text-secondary mb-6">Who is ISO 26000 for?</h3>
                        <p className="text-slate-500 mb-8 text-lg">Unlike other ISO standards, this is a guidance standard applicable to all types of organizations:</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Building className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Corporations</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <HeartHandshake className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">NGOs / Charities</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Scale className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">Government</span>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <Globe className="w-5 h-5 text-primary mr-3" />
                                <span className="text-secondary font-medium text-sm">SMEs</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
                            alt="Community volunteering" 
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
                 <h3 className="text-3xl font-extrabold text-secondary">Impact in Action</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">See how we've helped UAE entities transform their social footprint.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                           <Building className="w-3 h-3 mr-1" /> Corporate
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">Top 10</div>
                           <div className="text-xs text-slate-400 font-medium">Employer Brand</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Workforce Transformation</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A large retail group faced high turnover. We implemented ISO 26000 labor practices, focusing on fair wages and development. Retention improved by 25% in one year.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Smile className="w-4 h-4 text-primary mr-2" />
                                Happy Staff
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Award className="w-4 h-4 text-primary mr-2" />
                                CSR Award
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide">
                           <Leaf className="w-3 h-3 mr-1" /> Environment
                        </div>
                        <div className="text-right">
                           <div className="text-2xl font-extrabold text-primary">-40%</div>
                           <div className="text-xs text-slate-400 font-medium">Waste Gen.</div>
                        </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary mb-3">Green Supply Chain</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        A logistics firm wanted to reduce its footprint. We guided them through the environmental pillar of ISO 26000, optimizing routes and packaging to slash emissions.
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Check className="w-4 h-4 text-primary mr-2" />
                                Eco-Friendly
                            </div>
                            <div className="flex items-center text-sm text-slate-700 font-medium">
                                <Scale className="w-4 h-4 text-primary mr-2" />
                                Cost Saved
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
        sectionTitle="Implementation Framework"
        sectionSubtitle="A structured approach to embedding social responsibility into your DNA."
      />

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center text-primary/30">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-secondary mb-8 leading-snug">
                "ISO 26000 changed our perspective. We stopped seeing CSR as charity and started managing it as a core business risk and opportunity. The impact on our brand has been phenomenal."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" 
                      alt="Fatima Al-Sayed" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-left">
                    <div className="font-bold text-secondary text-sm">Fatima Al-Sayed</div>
                    <div className="text-slate-500 text-xs">Sustainability Director, Future Group</div>
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
                        <p className="text-xs text-slate-500 line-clamp-2">Directly addresses the Environmental pillar of CSR.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Leaf className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/sedex" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">SEDEX (SMETA)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Audit your supply chain for ethical trade compliance.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <HandHeart className="w-5 h-5" />
                    </div>
                 </Link>
                 <Link to="/service/ohsas" className="p-6 rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 45001 (OH&S)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure health & safety (Labor Practices).</p>
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

export default ServiceISO26000;