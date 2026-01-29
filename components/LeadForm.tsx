import React from 'react';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Get a Free Consultation", 
  subtitle = "Speak with an expert about your certification needs.",
  buttonText = "Request Callback",
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-2xl shadow-2xl p-8 border border-slate-100 ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border-slate-300 bg-slate-50 text-slate-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">Business Email</label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border-slate-300 bg-slate-50 text-slate-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="block w-full rounded-lg border-slate-300 bg-slate-50 text-slate-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2 border"
            placeholder="+971 50 000 0000"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-secondary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors mt-2"
        >
          {buttonText}
        </button>
        <p className="text-xs text-center text-slate-400 mt-4">
          No obligation. Your data is secure.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
