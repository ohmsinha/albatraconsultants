import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export interface Step {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  smallIcon?: React.ReactNode;
}

interface ProcessTimelineProps {
  steps: Step[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ 
  steps,
  sectionTitle = "Process to Certification",
  sectionSubtitle = "We simplify the complex path to certification into a clear, manageable timeline."
}) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h3 className="text-3xl font-extrabold text-secondary">{sectionTitle}</h3>
                 <p className="mt-4 text-slate-500 max-w-xl mx-auto">{sectionSubtitle}</p>
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Desktop View: Horizontal */}
                <div className="hidden md:block relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-[20px] z-0"></div>
                    <div className="absolute top-1/2 left-0 h-1 bg-primary/20 -translate-y-[20px] z-0 transition-all duration-500 ease-in-out" style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}></div>

                    <div className="relative z-10 flex justify-between">
                        {steps.map((step, index) => (
                            <button 
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`group flex flex-col items-center focus:outline-none transition-all duration-300 ${activeStep === index ? 'scale-110' : 'hover:scale-105'}`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 bg-white ${activeStep === index ? 'border-primary shadow-lg shadow-primary/30 text-primary' : index < activeStep ? 'border-primary text-primary bg-primary/10' : 'border-slate-200 text-slate-300'}`}>
                                    {index < activeStep ? <Check className="w-8 h-8" /> : (step.smallIcon || <span className="text-xl font-bold">{step.id}</span>)}
                                </div>
                                <div className="mt-6 text-center">
                                    <h4 className={`font-bold text-sm transition-colors duration-300 ${activeStep === index ? 'text-primary' : 'text-slate-500'}`}>{step.title}</h4>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile View: Vertical */}
                <div className="md:hidden space-y-4">
                     {steps.map((step, index) => (
                        <div 
                            key={step.id}
                            onClick={() => setActiveStep(index)}
                            className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${activeStep === index ? 'border-primary bg-primary/5 shadow-md transform scale-[1.02]' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors flex-shrink-0 ${activeStep === index ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
                                    {step.smallIcon || step.id}
                                </div>
                                <div>
                                    <div className={`font-bold text-base ${activeStep === index ? 'text-primary' : 'text-secondary'}`}>{step.title}</div>
                                    <div className={`text-xs ${activeStep === index ? 'text-slate-600' : 'text-slate-400'}`}>{step.description}</div>
                                </div>
                                {activeStep === index && (
                                    <div className="ml-auto text-primary">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </div>
                        </div>
                     ))}
                </div>

                {/* Expanded Details Area */}
                <div className="mt-12 bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm animate-fade-in relative overflow-hidden transition-all duration-500">
                     {/* Decorative background icon */}
                     <div className="absolute -top-10 -right-10 text-slate-200 opacity-20 pointer-events-none transform rotate-12">
                        <div className="w-64 h-64">
                             {steps[activeStep].icon}
                        </div>
                     </div>

                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                        <div className="hidden md:flex w-20 h-20 rounded-2xl bg-white shadow-md items-center justify-center text-primary p-4 shrink-0">
                             {steps[activeStep].icon}
                        </div>
                        <div className="animate-fade-in-up">
                             <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Step {steps[activeStep].id}</span>
                                <h3 className="text-2xl font-bold text-secondary">{steps[activeStep].title}</h3>
                             </div>
                             <h4 className="text-lg font-medium text-slate-700 mb-4">{steps[activeStep].description}</h4>
                             <p className="text-slate-500 leading-relaxed text-lg">
                                 {steps[activeStep].details}
                             </p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>
  );
};

export default ProcessTimeline;