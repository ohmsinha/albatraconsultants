import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Al Batra's guidance was pivotal in our ISO 9001 certification. Their team didn't just check boxes; they transformed our operational efficiency and helped us win major government tenders.",
    name: "Jassim Al-Mansoori",
    role: "CEO, Gulf Logistics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "We needed HACCP certification on a tight deadline for a new hotel launch. The consultants were professional, knowledgeable, and helped us navigate the requirements smoothly.",
    name: "Sarah Johnson",
    role: "Operations Manager, Delight Catering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Achieving ISO 45001 was a massive goal for our construction firm. Al Batra made the complex safety standards understandable and actionable for our site teams.",
    name: "Ahmed Khalil",
    role: "Safety Director, BuildTech Construction",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-12 relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      <div className="overflow-hidden">
        <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary mx-auto">
                        <Quote className="w-8 h-8 fill-current" />
                    </div>
                    <p className="text-xl md:text-2xl font-medium text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
                        "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                        <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" 
                        />
                        <div className="text-left">
                            <div className="font-bold text-slate-900">{testimonial.name}</div>
                            <div className="text-sm text-slate-500">{testimonial.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

       {/* Navigation Buttons - Absolute positioned relative to container */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm hidden md:flex z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm hidden md:flex z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-slate-200 w-2 hover:bg-slate-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;