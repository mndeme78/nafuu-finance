import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Shield,
  Heart,
  Briefcase,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Active Customers",
    icon: Users,
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: Clock,
  },
  {
    value: "95%",
    label: "Customer Satisfaction",
    icon: Heart,
  },
  {
    value: "24/7",
    label: "Customer Support",
    icon: Globe,
  },
];

const values = [
  {
    title: "Integrity",
    description: "We conduct our business with the highest standards of ethics and transparency.",
    icon: Shield,
  },
  {
    title: "Innovation",
    description: "We continuously evolve our services to meet changing financial needs.",
    icon: TrendingUp,
  },
  {
    title: "Customer Focus",
    description: "Our customers' success and satisfaction drive every decision we make.",
    icon: Target,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every service we provide.",
    icon: Award,
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    description: "20+ years of experience in financial services leadership.",
  },
  {
    name: "Michael Chen",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    description: "Expert in financial planning and risk management.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Customer Relations",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&q=80",
    description: "Dedicated to ensuring exceptional customer experience.",
  },
  {
    name: "David Omondi",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=300&q=80",
    description: "Leading our digital transformation initiatives.",
  },
];

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Established with a vision to provide accessible financial services.",
  },
  {
    year: "2012",
    title: "Regional Expansion",
    description: "Expanded operations to cover major cities across the country.",
  },
  {
    year: "2016",
    title: "Digital Innovation",
    description: "Launched our first mobile banking platform.",
  },
  {
    year: "2020",
    title: "Industry Recognition",
    description: "Awarded Best Microfinance Institution of the Year.",
  },
  {
    year: "2023",
    title: "Sustainable Growth",
    description: "Reached milestone of serving over 10,000 customers.",
  },
];

export default function About() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({
    ...stat,
    currentValue: 0,
    targetValue: parseInt(stat.value) || 0
  })));

  // Animate stats when they come into view
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => prev.map(stat => ({
        ...stat,
        currentValue: stat.currentValue < stat.targetValue ? 
          stat.currentValue + Math.ceil(stat.targetValue / 50) : 
          stat.targetValue
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/80 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
          alt="About Us hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-nafuu-500/20 text-nafuu-50 font-medium text-sm mb-4">
                Our Story
              </span>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Building Financial Futures Together
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="text-lg text-gray-200">
                Since 2008, we've been committed to empowering individuals and businesses 
                with accessible financial solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with animations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {animatedStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="border-none shadow-none bg-transparent hover:bg-primary/5 transition-colors cursor-pointer group">
                  <CardContent className="text-center p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-navy-800 mb-2">
                      {typeof stat.currentValue === 'number' ? 
                        Math.min(stat.currentValue, stat.targetValue).toLocaleString() : 
                        stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 rounded-full" />
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/5 rounded-full" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Our Mission"
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Mission</h2>
                  <p className="text-gray-600">
                    To provide accessible, innovative financial solutions that empower individuals 
                    and businesses to achieve their goals and build sustainable futures.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Vision</h2>
                  <p className="text-gray-600">
                    To be the leading microfinance institution known for excellence, 
                    innovation, and positive impact in the communities we serve.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced with hover effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide our actions and define our commitment to our customers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                      <value.icon className="w-10 h-10 text-primary mb-4 transform transition-transform hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced with member details dialog */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals leading our organization towards excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden group">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-xl font-semibold text-navy-800">{member.name}</h3>
                        <p className="text-primary font-medium mb-2">{member.role}</p>
                        <p className="text-gray-600 text-sm">{member.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{member.name}</DialogTitle>
                      <DialogDescription>{member.role}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-gray-600">{member.description}</p>
                      <div className="flex gap-4 pt-4">
                        <Button variant="outline" className="flex items-center gap-2">
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones - Enhanced with interactive timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key milestones that have shaped our growth and success.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex items-start gap-6 mb-8 group cursor-pointer">
                  <div className="flex-shrink-0 w-24 py-2 text-center rounded-full bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                      <h3 className="text-xl font-semibold text-navy-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  Have questions about our services? We'd love to hear from you.
                </p>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Message subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Enhanced with hover effects */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Join thousands of satisfied customers who trust us with their financial needs.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-transform">
                  Open an Account
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-navy-900 transform hover:scale-105 transition-transform"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
} 