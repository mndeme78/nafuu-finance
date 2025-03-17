import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Phone, Mail, MapPin, ChevronRight, Users, Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-6">
              <AnimatedSection>
                <span className="inline-block px-4 py-2 rounded-full bg-nafuu-50 text-nafuu-600 font-medium text-sm mb-4">Trusted Financial Partner</span>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <h1 className="heading-xl text-navy-900">
                  Empowering Growth Through <span className="text-nafuu-500">Financial Inclusion</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <p className="text-lg md:text-xl text-navy-600 mt-6">
                  At Nafuu Microfinance, we provide accessible financial services to empower individuals and businesses to achieve economic independence and growth.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={600}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button className="btn-primary text-base gap-2">
                    Apply for a Loan <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="btn-outline text-base">
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={800}>
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-nafuu-${i*100} flex items-center justify-center text-white font-medium`}>
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-medium">Trusted by 10,000+ customers</p>
                    <div className="flex text-gold-400 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="flex-1 relative">
              <AnimatedSection delay={300}>
                <div className="relative z-10">
                  <div className="relative glass-panel shadow-xl p-4 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Nafuu Microfinance Services" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent rounded-xl"></div>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-nafuu-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold-400/20 rounded-full blur-3xl"></div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nafuu-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-50 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-nafuu-50/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nafuu-600 font-medium">Our Services</span>
              <h2 className="heading-lg mt-2 text-navy-900">Comprehensive Financial Solutions</h2>
              <p className="text-navy-600 mt-4">
                We offer a wide range of financial services designed to meet your personal and business needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Loans",
                description: "Get the capital you need to start or expand your business with our flexible loan options.",
                icon: <Briefcase className="w-8 h-8 text-nafuu-500" />,
              },
              {
                title: "Personal Loans",
                description: "Access funds for personal needs such as education, medical expenses, or home improvements.",
                icon: <Users className="w-8 h-8 text-nafuu-500" />,
              },
              {
                title: "Savings Accounts",
                description: "Secure your financial future with our competitive interest rates on savings accounts.",
                icon: <TrendingUp className="w-8 h-8 text-nafuu-500" />,
              },
              {
                title: "Financial Advisory",
                description: "Receive expert advice on managing your finances, investments, and retirement planning.",
                icon: <ShieldCheck className="w-8 h-8 text-nafuu-500" />,
              }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="border border-navy-100 hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="rounded-full bg-nafuu-50 w-14 h-14 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-3">{service.title}</h3>
                    <p className="text-navy-600 mb-6 flex-grow">{service.description}</p>
                    <a href="#" className="text-nafuu-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <AnimatedSection>
                <div className="relative">
                  <div className="bg-nafuu-500/10 absolute -left-6 -top-6 w-full h-full rounded-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="About Nafuu Microfinance" 
                    className="w-full rounded-2xl relative z-10 object-cover shadow-lg"
                  />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <AnimatedSection>
                <span className="text-nafuu-600 font-medium">About Us</span>
                <h2 className="heading-lg mt-2 text-navy-900">Our Mission and Values</h2>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <p className="text-navy-600">
                  Nafuu Microfinance Limited was established to provide financial services to underserved communities, 
                  helping them achieve economic independence and improved livelihoods. Our focus is on creating opportunities
                  for growth and prosperity through accessible financial solutions.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <div className="mt-6 space-y-3">
                  {["Customer-focused approach", "Transparency in all transactions", "Financial inclusion for all", "Ethical business practices"].map((value, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="text-nafuu-500 w-5 h-5" />
                      <span className="text-navy-700">{value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <Button className="btn-primary mt-6 text-base gap-2">
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-navy-50/50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nafuu-600 font-medium">Testimonials</span>
              <h2 className="heading-lg mt-2 text-navy-900">What Our Clients Say</h2>
              <p className="text-navy-600 mt-4">
                Hear from our satisfied customers about their experience with Nafuu Microfinance Limited.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                business: "Retail Shop Owner",
                text: "The business loan from Nafuu Microfinance helped me expand my shop and increase my inventory. Their process was smooth and the staff very supportive."
              },
              {
                name: "John Mbeki",
                business: "Agriculture Entrepreneur",
                text: "Thanks to Nafuu's agricultural loan, I was able to purchase modern farming equipment and increase my crop yield significantly. My income has grown by 40%."
              },
              {
                name: "Grace Wanjiku",
                business: "Restaurant Owner",
                text: "Nafuu Microfinance believed in my business when other banks wouldn't. Their financial advice and loan helped me open a second location."
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="border border-navy-100 bg-white h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 text-gold-400 text-lg">★★★★★</div>
                    <p className="italic text-navy-600 mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center text-navy-800 font-medium">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-navy-800">{testimonial.name}</p>
                        <p className="text-navy-500 text-sm">{testimonial.business}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nafuu-600 font-medium">Contact Us</span>
              <h2 className="heading-lg mt-2 text-navy-900">Get in Touch</h2>
              <p className="text-navy-600 mt-4">
                Have questions? Our team is here to help. Reach out to us through any of these channels.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <Card className="border border-navy-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-nafuu-50 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-nafuu-600" />
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-2">Phone</h3>
                  <p className="text-navy-600">+255 123 456 789</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border border-navy-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-nafuu-50 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-nafuu-600" />
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-2">Email</h3>
                  <p className="text-navy-600">info@nafuu.co.tz</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="border border-navy-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-nafuu-50 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-nafuu-600" />
                  </div>
                  <h3 className="font-semibold text-navy-800 mb-2">Visit Us</h3>
                  <p className="text-navy-600">123 Financial Street, Dar es Salaam</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
