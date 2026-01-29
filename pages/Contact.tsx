import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Map as MapIcon, CheckCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSuccess) return;

    setIsSubmitting(true);

    // Simulate API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-surface min-h-screen font-sans">
      <SEO 
        title="Contact Us | Al Batra Management Consultancy"
        description="Get in touch with Al Batra for a free consultation on ISO certification. Located in Sharjah, serving Dubai, Abu Dhabi, and the Northern Emirates."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
           <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight">Partner with Al Batra for <br /> Excellence</h1>
           <p className="mt-4 text-lg text-slate-500 max-w-2xl">Fill out the form below for a tailored quote, or reach out directly to our Sharjah office.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-10 transition-all duration-300">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-secondary">Request a Quote</h2>
                    <p className="text-slate-500 mt-2">Tell us about your needs and we'll build a custom plan for you.</p>
                </div>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-50/50">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Sent Successfully!</h3>
                    <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
                      Your request has been sent successfully! We will contact you shortly.
                    </p>
                    <button 
                      disabled 
                      className="px-8 py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed border border-slate-200"
                    >
                      Request Submitted
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Full Name</label>
                              <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" />
                          </div>
                           <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Company Name</label>
                              <input type="text" placeholder="Al Batra Co." className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Work Email</label>
                              <input required type="email" placeholder="name@company.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" />
                          </div>
                           <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Select Service</label>
                              <div className="relative">
                                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-700 appearance-none">
                                      <option value="" disabled selected>Choose a service...</option>
                                      <option>ISO 9001 (QMS)</option>
                                      <option>ISO 22000 (FSMS)</option>
                                      <option>HACCP Certification</option>
                                      <option>ISO 45001 (OH&S)</option>
                                      <option>Other Services</option>
                                  </select>
                                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Project Details</label>
                          <textarea rows={6} placeholder="Describe your project requirements..." className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400"></textarea>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100`}
                          >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Sending Request...
                                </>
                              ) : (
                                <>
                                  Send Request 
                                  <Send className="w-4 h-4 ml-2" />
                                </>
                              )}
                          </button>
                          <div className="flex items-center text-xs text-slate-500 font-medium">
                               <Clock className="w-4 h-4 mr-2 text-primary" />
                               We usually respond within 1 business day.
                          </div>
                      </div>
                  </form>
                )}
            </div>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact Card */}
            <div className="bg-secondary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden border border-secondary-light">
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-8 text-white">Contact Information</h3>
                    
                    <div className="space-y-8">
                        <div className="flex items-start group">
                            <div className="w-12 h-12 rounded-xl bg-secondary-light/50 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-primary/20 transition-colors">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-1">Visit Us</h4>
                                <p className="font-semibold text-lg leading-tight">Office 205, Rolla Mall</p>
                                <p className="text-slate-300">Sharjah, United Arab Emirates</p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="w-12 h-12 rounded-xl bg-secondary-light/50 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-primary/20 transition-colors">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-1">Call Us</h4>
                                <p className="font-semibold text-lg leading-tight">+971 6 555 1234</p>
                                <p className="text-slate-300 text-sm mt-1">Mon-Fri, 9am-6pm GST</p>
                            </div>
                        </div>

                         <div className="flex items-start group">
                            <div className="w-12 h-12 rounded-xl bg-secondary-light/50 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-1">Email Us</h4>
                                <p className="font-semibold text-lg leading-tight break-all">info@albatra-consultancy.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-700/50">
                        <button className="w-full flex items-center justify-center px-4 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all shadow-lg active:scale-95">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat on WhatsApp
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-4">Available 9am - 6pm for instant support</p>
                    </div>
                </div>
            </div>

            {/* Map Card - Matching Style from Screenshot */}
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl shadow-sm border border-slate-200 h-[400px] relative flex flex-col items-center justify-center p-8 overflow-hidden group">
                 {/* Vignette/Shadow */}
                 <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

                 {/* Circular Map Reveal */}
                 <div className="w-48 h-48 rounded-full border-4 border-white/50 shadow-2xl relative overflow-hidden mb-8 z-10 group-hover:scale-110 transition-transform duration-500">
                     <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTdblQ08JFMj15LJ1TzffBOsaWuG7RdrAij432Lmuzlv1KGGAe3M_33_AvR_N911OAWlmHVU6aAz7CJbGICdYSsojOr9OuMFdjv3MX0BIeln-ZnrChGk6GWxhnWjOHq7GVn3B82F318_zStDq3VVhAWCaJxR-OVXsmtaM6xgPWo7d3MHovhVwyjIeWMvp5VwWzA9E9aDqtwIqW8J3IcXROSyO5PcPIVNqMWfqgSpQJqpJS9RZxUUzW-GUrtu2c3DxbSGoTH2hzc7g"
                        alt="Map Location"
                        className="w-full h-full object-cover scale-150"
                     />
                     <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary drop-shadow-md">
                        <MapPin className="w-10 h-10 fill-current" />
                     </div>
                 </div>

                 {/* Button */}
                 <a 
                    href="https://goo.gl/maps/example" 
                    target="_blank" 
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center bg-white text-secondary font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 group/btn"
                 >
                    <MapIcon className="w-4 h-4 mr-2 text-slate-400 group-hover/btn:text-primary transition-colors" />
                    Open in Google Maps
                 </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;