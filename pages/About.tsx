import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, ShieldCheck, Target, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import TestimonialCarousel from '../components/TestimonialCarousel';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="About Us | Al Batra Management Consultancy UAE"
        description="Learn about Al Batra Management Consultancy, a boutique firm in Sharjah dedicated to helping UAE businesses achieve global standards through local expertise."
      />
      
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
         <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Corporate Office" 
                className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="max-w-3xl">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                    About Al Batra <br/>Management Consultancy
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl">
                    Your trusted partner for ISO certification and management system excellence in the UAE.
                </p>
             </div>
         </div>
       </section>

       {/* Navigation Bar (In-page) */}
       <div className="bg-white border-b border-slate-200 sticky top-20 z-40 hidden md:block">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex space-x-8 py-4">
                   <a href="#mission" className="text-sm font-bold text-primary hover:text-primary-dark">Who We Are</a>
                   <a href="#values" className="text-sm font-medium text-slate-500 hover:text-primary">Our Values</a>
                   <a href="#history" className="text-sm font-medium text-slate-500 hover:text-primary">History</a>
                   <a href="#leadership" className="text-sm font-medium text-slate-500 hover:text-primary">Leadership</a>
               </div>
           </div>
       </div>

      {/* Main Content / Mission Section - Requested Design */}
      <section id="mission" className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                  <span className="h-0.5 w-12 bg-primary"></span>
                  <span className="text-primary font-bold uppercase tracking-widest text-xs">Our Mission</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary leading-tight">
                  A boutique approach to <br />
                  <span className="text-primary relative inline-block">
                    global standards.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                  </span>
              </h2>
              <p className="text-lg text-slate-500 italic border-l-4 border-primary/30 pl-6 py-2">
                  "At Al Batra, we believe certification is not just a badge, but a journey towards sustainable business growth and operational maturity."
              </p>
              <p className="text-slate-600 leading-relaxed">
                  Al Batra Consultants (ABC) was founded on the principle that management consultancy should be accessible, practical, and deeply collaborative. Based in the heart of Sharjah, we serve as a strategic partner to organizations across Dubai, Abu Dhabi, and the Northern Emirates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mb-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-secondary text-sm">Approved Expertise</h4>
                      <p className="text-xs text-slate-500 mt-2">Sharjah Municipality approved for GHP consultancy.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mb-3">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-secondary text-sm">Client-Centric</h4>
                      <p className="text-xs text-slate-500 mt-2">Focus on long-term relationships and genuine improvement.</p>
                  </div>
              </div>
            </div>

            {/* Right Content - Profile Card (Pratima Sinha) */}
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
              
              <div className="bg-white p-2 rounded-[2rem] shadow-2xl relative z-10 border border-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-50 rounded-[1.5rem] overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                        alt="Pratima Sinha" 
                        className="w-full h-[500px] object-cover object-top"
                      />
                      
                      {/* Floating Name Plate */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100 text-center">
                          <h3 className="text-2xl font-bold text-secondary">Pratima Sinha</h3>
                          <p className="text-xs font-bold text-primary tracking-widest uppercase mt-1">Lead Manager</p>
                          <p className="text-xs text-slate-400 mt-3 italic mb-3">"My commitment is to personally ensure every client receives the attention they deserve."</p>
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-600 text-xs font-bold">
                              <Award className="w-4 h-4 text-primary" />
                              15+ YEARS UAE EXPERTISE
                          </div>
                      </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    <div className="px-4">
                        <div className="text-4xl font-extrabold text-white mb-2">15+</div>
                        <div className="text-xs font-bold text-teal-100 uppercase tracking-widest">Years Experience</div>
                    </div>
                     <div className="px-4">
                        <div className="text-4xl font-extrabold text-white mb-2">500+</div>
                        <div className="text-xs font-bold text-teal-100 uppercase tracking-widest">Clients Empowered</div>
                    </div>
                     <div className="px-4">
                        <div className="text-4xl font-extrabold text-white mb-2">10+</div>
                        <div className="text-xs font-bold text-teal-100 uppercase tracking-widest">Core Standards</div>
                    </div>
                     <div className="px-4">
                        <div className="text-4xl font-extrabold text-white mb-2">100%</div>
                        <div className="text-xs font-bold text-teal-100 uppercase tracking-widest">Local Approval</div>
                    </div>
               </div>
          </div>
      </div>

      {/* Values Section */}
      <section id="values" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                   <h2 className="text-3xl font-extrabold text-secondary">Our Values in Action</h2>
                   <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {/* Value 1 */}
                   <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6 text-primary">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-4">Unyielding Trust</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Trust is the cornerstone of certification. We maintain total transparency in our processes, ensuring your business's integrity is never compromised.
                        </p>
                   </div>
                   {/* Value 2 */}
                   <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6 text-primary">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-4">Deep Partnership</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            We don't act as external auditors; we act as partners. Your goals become ours, and your successes are the metrics by which we measure our own.
                        </p>
                   </div>
                   {/* Value 3 */}
                   <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6 text-primary">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-4">Practical Logic</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Theory is useless without execution. We provide solutions that actually work in the real-world operational environment of the UAE.
                        </p>
                   </div>
               </div>
          </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <div className="mb-12">
                   <h2 className="text-3xl font-extrabold text-secondary">Our Approach</h2>
                   <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
               </div>
               
               <div className="space-y-6 text-lg text-slate-500 leading-relaxed text-left md:text-center">
                   <p>
                       At Al Batra Management Consultancy, we reject the notion of generic, "cookie-cutter" solutions. We understand that every organization has its own unique operational rhythm, culture, and challenges. Our methodology begins with deep listening—we take the time to thoroughly understand your specific business context before we even open a standard manual. This ensures that the management systems we design are not just compliant, but genuinely useful tools that drive efficiency and clarity within your daily operations.
                   </p>
                   <p>
                       We bridge the gap between complex international standards and local UAE regulatory requirements. Our consultants are experts at translating technical ISO clauses into practical, actionable steps that your team can easily implement. We prioritize simplified documentation and robust process controls, ensuring that compliance becomes a natural byproduct of your workflow rather than an administrative burden. Whether it's navigating municipality guidelines or aligning with global best practices, we ensure you are covered on all fronts.
                   </p>
                   <p>
                       Ultimately, our goal is to build capability, not dependency. We work side-by-side with your staff, providing comprehensive training and knowledge transfer throughout the project lifecycle. By the time the external auditors arrive, your team will confidently own their processes. We view certification not as the finish line, but as the baseline for a long-term partnership focused on continuous improvement and sustainable growth.
                   </p>
               </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                   <h2 className="text-3xl font-extrabold text-secondary">What Our Clients Say</h2>
                   <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
               </div>
               <TestimonialCarousel />
          </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-light/20"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to start your certification journey?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Join hundreds of visionary businesses across the UAE who have achieved excellence through our tailored consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-lg">
                    Request a Consultation
                </Link>
                <Link to="/#services" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                    Our Services
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;