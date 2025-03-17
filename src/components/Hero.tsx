import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-nafuu-50 text-nafuu-600 font-medium text-sm mb-4">Trusted Financial Partner</span>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-navy-900">
                Empowering Growth Through <span className="text-nafuu-500">Financial Inclusion</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-base md:text-xl text-navy-600 mt-4 md:mt-6 max-w-2xl mx-auto md:mx-0">
                At Nafuu Microfinance, we provide accessible financial services to empower individuals and businesses to achieve economic independence and growth.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 justify-center md:justify-start">
                <Button className="btn-primary text-base gap-2 w-full sm:w-auto">
                  Apply for a Loan <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-outline text-base w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={800}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-8 justify-center md:justify-start">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-nafuu-${i*100} flex items-center justify-center text-white text-sm md:text-base font-medium`}>
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-medium text-sm md:text-base">Trusted by 10,000+ customers</p>
                  <div className="flex text-gold-400 mt-1 justify-center sm:justify-start">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="flex-1 relative w-full md:w-auto">
            <AnimatedSection delay={300}>
              <div className="relative z-10">
                <div className="relative glass-panel shadow-xl p-2 md:p-4 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                    alt="Nafuu Microfinance Services" 
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-nafuu-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 bg-gold-400/20 rounded-full blur-3xl"></div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nafuu-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-50 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Hero;
