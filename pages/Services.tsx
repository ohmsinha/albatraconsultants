import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Utensils, HeartPulse, Leaf, Globe, ChevronRight, CheckCircle, ArrowRight, Lock, Server, Clock, Handshake, MessageSquare, ShieldAlert, Anchor, Truck, HeartHandshake, Flame, Zap, Stethoscope, Shield, Languages, FlaskConical, Microscope, Tablet } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Our Services | Al Batra Management Consultancy"
        description="Comprehensive ISO and Halal certification services. QMS, FSMS, OHSAS, EMS, and Halal consultancy in UAE."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
         <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                alt="Consultancy Services" 
                className="w-full h-full object-cover opacity-10"
             />
             <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Our Services</h1>
             <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                 We provide end-to-end management consultancy services, helping you navigate the complexities of international standards and local regulations.
             </p>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">QMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Quality Management Systems (ISO 9001) implementation to ensure consistent quality in your products and services. Enhance customer satisfaction and operational efficiency.
              </p>
              <Link to="/service/qms" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Utensils className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">FSMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Food Safety Management Systems (ISO 22000, HACCP) to ensure food safety throughout the supply chain. Essential for catering, manufacturing, and hospitality.
              </p>
              <Link to="/service/fsms" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <HeartPulse className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">OHSAS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Occupational Health and Safety (ISO 45001) ensuring a safe and healthy workplace environment. Reduce risks and ensure compliance with labor laws.
              </p>
              <Link to="/service/ohsas" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Leaf className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">EMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Environmental Management Systems (ISO 14001) to manage environmental responsibilities efficiently. Sustainable practices for a better future.
              </p>
              <Link to="/service/ems" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 5 - Halal Certification */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Globe className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Halal Certification</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Ensure products meet Sharia law requirements for global recognition and consumer confidence. Comprehensive support for the entire certification process.
              </p>
              <Link to="/service/halal" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 6 - ISMS */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Lock className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Information Security Management System (ISO 27001). Protect your sensitive data and manage information risks efficiently.
              </p>
              <Link to="/service/isms" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 7 - ITSMS */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Server className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ITSMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                IT Service Management (ISO 20000). Align your IT services with business needs and ensure reliable, high-quality service delivery.
              </p>
              <Link to="/service/itsms" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 8 - BCMS */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Clock className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">BCMS Consultancy</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Business Continuity Management (ISO 22301). Prepare for disruptions and ensure your business can continue operating during crises.
              </p>
              <Link to="/service/bcms" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

             {/* Service 9 - SEDEX */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Handshake className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">SEDEX (SMETA)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Ethical Trade Audits. Prove your commitment to social compliance, labor rights, and ethical standards to global buyers.
              </p>
              <Link to="/service/sedex" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 10 - ISO 10002 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <MessageSquare className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 10002 (Complaints)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Customer Complaints Management System. Turn feedback into an opportunity for improvement and loyalty.
              </p>
              <Link to="/service/iso10002" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 11 - ISO 31000 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <ShieldAlert className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 31000 (Risk)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Risk Management Guidelines. Identify, analyze, and mitigate risks to protect your business value and ensure continuity.
              </p>
              <Link to="/service/iso31000" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 12 - ISO 30000 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Anchor className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 30000 (Ship)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Ship Recycling Management Systems. Ensure safe and environmentally sound recycling of ships and marine technology.
              </p>
              <Link to="/service/iso30000" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 13 - ISO 39001 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Truck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 39001 (Road)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Road Traffic Safety Management. Reduce death and serious injuries related to road traffic crashes for fleets.
              </p>
              <Link to="/service/iso39001" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 14 - ISO 26000 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <HeartHandshake className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 26000 (Social)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Social Responsibility Guidelines. Integrate ethical practices and sustainability into your organization's strategy.
              </p>
              <Link to="/service/iso26000" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 15 - ISO 29001 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Flame className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 29001 (Oil & Gas)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Quality Management for Petroleum, Petrochemical and Natural Gas industries. Critical for vendor approval.
              </p>
              <Link to="/service/iso29001" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 16 - ISO 50001 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Zap className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 50001 (Energy)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Energy Management Systems to improve efficiency, reduce costs, and lower greenhouse gas emissions.
              </p>
              <Link to="/service/iso50001" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 17 - ISO 13485 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Stethoscope className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 13485 (Medical)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Medical Devices Quality Management. Ensure regulatory compliance and safety throughout the product lifecycle.
              </p>
              <Link to="/service/iso13485" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 18 - ISO 28000 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 28000 (Supply Chain)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Security Management Systems for the Supply Chain. Protect goods from theft, piracy, and terrorism.
              </p>
              <Link to="/service/iso28000" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 19 - ISO 29991 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Languages className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 29991 (Language)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Language Learning Services. Improve transparency and student satisfaction in language education.
              </p>
              <Link to="/service/iso29991" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 20 - ISO 17025 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <FlaskConical className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 17025 (Labs)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Laboratory Management System. Demonstrate technical competence and valid results for testing and calibration.
              </p>
              <Link to="/service/iso17025" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 21 - ISO 15189 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Microscope className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 15189 (Medical)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Quality Management System for Medical Laboratories. Ensure patient safety and accurate diagnostic results.
              </p>
              <Link to="/service/iso15189" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service 22 - ISO 22870 */}
            <div className="group bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Tablet className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ISO 22870 (POCT)</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Point of Care Testing Requirements for Quality and Competence. Manage bedside and remote testing effectively.
              </p>
              <Link to="/service/iso22870" className="text-sm font-semibold text-primary group-hover:text-teal-700 flex items-center mt-auto">
                View Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 bg-surface border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-extrabold text-secondary mb-6">Need a custom solution?</h2>
                  <p className="text-lg text-slate-500 mb-8">
                      We understand that every business is unique. Contact us today to discuss your specific requirements and we will tailor a consultancy package for you.
                  </p>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center text-slate-600">
                          <CheckCircle className="w-5 h-5 text-primary mr-3" />
                          <span>Initial Gap Analysis Included</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                          <CheckCircle className="w-5 h-5 text-primary mr-3" />
                          <span>Dedicated Lead Auditor</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                          <CheckCircle className="w-5 h-5 text-primary mr-3" />
                          <span>Post-Certification Support</span>
                      </li>
                  </ul>
                  <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-lg transition-colors">
                      Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
               </div>
               <div>
                   <LeadForm 
                        title="Quick Inquiry" 
                        subtitle="Tell us which services you are interested in."
                   />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Services;