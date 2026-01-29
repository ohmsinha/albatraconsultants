import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Utensils, HeartPulse, Leaf, ChevronRight, ArrowUp, Users, Award, Globe } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Al Batra Management Consultancy | ISO & Food Safety Experts UAE"
        description="Premier ISO consultancy in Sharjah & Dubai. Specializing in ISO 9001, ISO 14001, ISO 45001, HACCP, and Food Safety certification services."
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 flex items-center min-h-[650px] lg:min-h-[750px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2yIp9kMMd6x72RdcTie25YM8m1wBCPUb6cLHgAKwOjO_rObjfd8tGgvDTBOD5TF6jIq3JZupy-_wsHJsy4c0xjFEUpoWz9Hj8EHrY0CrptczU3nfNvI2C5YWKGXifZYlf6yz7_MhaDtNb-CM3SGP1tWz31xD8G961P2qRHWxmH05HFn0wihUD01qipXfGrWeLBOiA9zhq41ehaILhc1ibPHHfxWn1acta0iviU3doCG3JcAKl1YIrcLHyztFYb5kz3jSiuayndZc"
            alt="Scientific lab setting with food safety equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/40 border border-teal-500/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Trusted UAE Advisors</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                ISO & Food Safety <br className="hidden lg:block" /> Consulting — <br />
                <span className="text-primary">Practical. Compliant. Local.</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                Navigate regulatory landscapes with confidence. We specialize in ISO certification, Food Safety Management Systems (FSMS), and Occupational Health auditing for businesses across the UAE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-teal-900/20">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border border-slate-400 hover:bg-white/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Hero Form */}
            <div className="w-full max-w-md ml-auto">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://placehold.co/120x40/transparent/475569?text=Bateel" alt="Bateel" className="h-8 md:h-10 w-auto object-contain" />
            <img src="https://placehold.co/120x40/transparent/475569?text=ETIHAD" alt="ETIHAD" className="h-8 md:h-10 w-auto object-contain" />
            <img src="https://placehold.co/120x40/transparent/475569?text=FleetLine" alt="FleetLine" className="h-8 md:h-10 w-auto object-contain" />
            <img src="https://placehold.co/120x40/transparent/475569?text=Dubai+Asset" alt="Dubai Asset Mgmt" className="h-8 md:h-10 w-auto object-contain" />
            <img src="https://placehold.co/120x40/transparent/475569?text=American+Center" alt="American Center" className="h-8 md:h-10 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* About Us Teaser Section */}
      <section id="about" className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <div className="inline-flex items-center gap-2 mb-4">
                      <span className="h-0.5 w-8 bg-primary"></span>
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">Who We Are</span>
                      <span className="h-0.5 w-8 bg-primary"></span>
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-6">Your Strategic Partner for Excellence</h2>
                 <p className="text-lg text-slate-500 leading-relaxed mb-8">
                     Al Batra Consultants (ABC) is a premier boutique consultancy based in Sharjah, dedicated to elevating UAE businesses through ISO certification and operational mastery.
                 </p>
                 <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-primary-dark">
                     Read Our Full Story <ArrowRight className="ml-2 w-5 h-5" />
                 </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                      <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                          <CheckCircle className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-secondary text-lg mb-2">Approved Expertise</h3>
                      <p className="text-sm text-slate-500">Municipality approved consultants for GHP and safety.</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                      <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                          <Users className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-secondary text-lg mb-2">Client-Centric</h3>
                      <p className="text-sm text-slate-500">Building long-term partnerships, not just transactions.</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                      <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                          <Award className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-secondary text-lg mb-2">15+ Years Experience</h3>
                      <p className="text-sm text-slate-500">Deep local knowledge of UAE regulations and markets.</p>
                 </div>
            </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
              Consultancy Services
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
              Al Batra Management Consultancy has the vast experience and expertise to effectively coach your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {/* Service 1 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">QMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                Quality Management Systems (ISO 9001) implementation to ensure consistent quality in your products and services.
              </p>
              <Link to="/service/qms" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Utensils className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">FSMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                Food Safety Management Systems (ISO 22000, HACCP) to ensure food safety throughout the supply chain.
              </p>
              <Link to="/service/fsms" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <HeartPulse className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">OHSAS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                Occupational Health and Safety (ISO 45001) ensuring a safe and healthy workplace environment.
              </p>
              <Link to="/service/ohsas" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Leaf className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">EMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                Environmental Management Systems (ISO 14001) to manage environmental responsibilities efficiently.
              </p>
              <Link to="/service/ems" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 shadow-sm text-sm font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-secondary relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white mb-12">
            <div className="p-6">
              <div className="text-5xl font-extrabold text-primary mb-2">10+</div>
              <div className="text-lg font-medium text-slate-300">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extrabold text-primary mb-2">200+</div>
              <div className="text-lg font-medium text-slate-300">Certified Clients</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extrabold text-primary mb-2">100%</div>
              <div className="text-lg font-medium text-slate-300">Success Rate</div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to elevate your standards?</h2>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-secondary bg-white hover:bg-slate-100 transition-all shadow-lg">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Floating Scroll Top Button */}
      <a href="#" className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 opacity-80 hover:opacity-100 hidden md:block">
        <ArrowUp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Home;