import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Al Batra Consultancy Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;