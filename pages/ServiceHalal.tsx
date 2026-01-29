import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Globe, ThumbsUp, Utensils, Droplets, Pill, Truck, Search, FileText, Award, ArrowRight, CheckCircle, Leaf, HardHat } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import ProcessTimeline, { Step } from '../components/ProcessTimeline';

const ServiceHalal: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Gap Analysis",
      description: "Assess ingredients & process.",
      details: "We assess your current product ingredients, supply chain, and manufacturing processes against Halal requirements to identify any non-compliant areas for improvement.",
      icon: <Search className="w-full h-full" />
    },
    {
      id: 2,
      title: "Implementation",
      description: "Documentation & controls.",
      details: "Our consultants help you develop the necessary documentation, Halal assurance policies, and standard operating procedures (SOPs) to ensure strict adherence to Islamic laws.",
      icon: <FileText className="w-full h-full" />
    },
    {
      id: 3,
      title: "Audit & Certification",
      description: "Final audit support.",
      details: "We guide you through the final audit process conducted by the Halal certification body to ensure you successfully achieve your certification valid across the UAE and internationally.",
      icon: <Award className="w-full h-full" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Halal Certification Services UAE | Al Batra Management Consultancy"
        description="Expert Halal certification consultancy in UAE. We help food, cosmetic, and pharmaceutical businesses achieve Sharia compliance and global recognition."
      />
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Content + Form */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-primary font-bold tracking-wide uppercase text-xs mb-2">SERVICE: HALAL CERTIFICATION</h2>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight leading-tight mb-6">
                            Halal Certification <br/>Services
                        </h1>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            We assist businesses with the Halal certification process, ensuring products meet Sharia law requirements. Our expert consultants ensure the journey is hassle-free, resulting in a certificate from a recognized body valid across the UAE and internationally.
                        </p>
                    </div>

                    <div className="max-w-md">
                        <LeadForm 
                            title="Get Your Halal Quote"
                            subtitle="Request a free consultation today."
                            buttonText="Request Free Consultation"
                            className="bg-slate-50 border-slate-200 shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                     {/* Modern Office / Consulting Image for Halal Services */}
                     <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Halal Certification Consultation Meeting" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors"></div>
                     {/* Badge Overlay */}
                     <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                        <div className="bg-primary rounded-full p-1 text-white">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase">Sharia Compliance</p>
                            <p className="text-sm font-bold text-secondary">Expert Consulting</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3 Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                 <h3 className="text-3xl font-extrabold text-secondary">3 Key Benefits of Halal Certification</h3>
                 <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Ensuring your products are Sharia-compliant opens new markets and builds consumer trust.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1: Compliance (People discussing/auditing) */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                        alt="Sharia Compliance Discussion" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Check className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Sharia Compliance</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Ensuring products are permitted or lawful according to Islamic Law, adhering to strict hygiene and preparation standards.
                        </p>
                    </div>
                </div>

                {/* Benefit 2: Global Recognition (Logistics/Shipping) */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1494412574643-35d3d4706f13?q=80&w=2072&auto=format&fit=crop" 
                        alt="Global Logistics" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Global Recognition</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Certificates are recognized and valid internationally and across all of UAE, facilitating export to Muslim-majority markets.
                        </p>
                    </div>
                </div>

                {/* Benefit 3: Consumer Confidence (Shoppers) */}
                <div className="relative group rounded-xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                    <img 
                        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop" 
                        alt="Happy Shoppers" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/70 to-secondary/30"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                        <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                            <ThumbsUp className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Consumer Confidence</h4>
                        <p className="text-sm text-slate-200 leading-relaxed opacity-90">
                            Building trust by guaranteeing products have no forbidden components, appealing to Halal-conscious consumers globally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-24 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-extrabold text-secondary mb-4">Who is Halal Certification for?</h2>
             <p className="text-slate-500 max-w-2xl mx-auto mb-16">
                It is essential for businesses in food, cosmetics, pharmaceuticals, and logistics seeking to serve Muslim consumers.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-48 group">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Utensils className="w-7 h-7 text-secondary" />
                   </div>
                   <span className="font-bold text-secondary text-sm">Food Manufacturers</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-48 group">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Droplets className="w-7 h-7 text-secondary" />
                   </div>
                   <span className="font-bold text-secondary text-sm">Cosmetics Industry</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-48 group">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Pill className="w-7 h-7 text-secondary" />
                   </div>
                   <span className="font-bold text-secondary text-sm">Pharmaceuticals</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-lg flex flex-col items-center justify-center hover:bg-slate-100 transition-colors h-48 group">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Truck className="w-7 h-7 text-secondary" />
                   </div>
                   <span className="font-bold text-secondary text-sm">Logistic Services</span>
                </div>
             </div>
          </div>
       </section>

      {/* Process to Certification */}
      <div className="bg-secondary">
          <ProcessTimeline 
            steps={steps} 
            sectionTitle={<span className="text-white">Certification Process</span>}
            sectionSubtitle={<span className="text-slate-400">OUR METHODOLOGY</span>}
          />
      </div>

      {/* Trusted By (Light) */}
       <div className="bg-white py-24 border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-4 text-center">
               <p className="text-slate-400 text-sm mb-12">Trusted by leading companies in the UAE</p>
               <div className="flex flex-wrap justify-center gap-6 opacity-30">
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
                    <div className="w-32 h-16 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest">LOGO</div>
               </div>
           </div>
       </div>

       {/* Cross Sell */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                     <h3 className="text-xl font-bold text-secondary">Explore Other Certifications</h3>
                     <p className="text-sm text-slate-500 mt-1">Combine certifications for integrated management systems (IMS).</p>
                </div>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center hover:text-primary-dark">
                    Contact for bundle deal <ArrowRight className="w-4 h-4 ml-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Card 1 */}
                 <Link to="/service/qms" className="p-6 bg-white rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 9001 (QMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Quality Management Systems to improve operational consistency.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 2 */}
                 <Link to="/service/fsms" className="p-6 bg-white rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 22000 (Food Safety)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Ensure hygiene and safety across the food supply chain.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Utensils className="w-5 h-5" />
                    </div>
                 </Link>
                 {/* Card 3 */}
                 <Link to="/service/ems" className="p-6 bg-white rounded-lg border border-slate-100 hover:border-primary/50 transition-colors flex justify-between items-start group shadow-sm">
                    <div>
                        <h4 className="font-bold text-secondary text-sm mb-2">ISO 14001 (EMS)</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">Environmental Management Systems to reduce your ecological footprint.</p>
                    </div>
                    <div className="text-slate-300 group-hover:text-primary transition-colors">
                        <Leaf className="w-5 h-5" />
                    </div>
                 </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceHalal;