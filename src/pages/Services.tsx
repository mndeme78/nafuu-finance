import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import Background from "@/components/Background";
import { Link } from "react-router-dom";
import {
  LineChart,
  PieChart,
  Calculator,
  Landmark,
  ScrollText,
  Users,
  CheckCircle2,
  ArrowRight,
  BadgeDollarSign,
  Briefcase,
  Scale,
  Target,
  Coins,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const mainServices = [
  {
    id: "investment",
    title: "Investment Plans",
    icon: TrendingUp,
    description: "Grow your wealth with our diverse investment solutions",
    features: [
      "Fixed Deposit Schemes",
      "Mutual Funds",
      "Retirement Planning",
      "Professional Portfolio Management",
      "Regular Investment Updates",
    ],
    link: "/investment",
    color: "bg-emerald-500",
  },
  {
    id: "advisory",
    title: "Financial Advisory",
    icon: LineChart,
    description: "Expert guidance for your financial decisions",
    features: [
      "Personal Financial Planning",
      "Investment Consultation",
      "Tax Planning",
      "Retirement Planning",
      "Estate Planning",
    ],
    link: "/advisory",
    color: "bg-blue-500",
  },
];

const serviceFeatures = [
  {
    icon: Shield,
    title: "Secure & Regulated",
    description: "All our services are regulated and protected",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals at your service",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Tailored solutions for your objectives",
  },
  {
    icon: Clock,
    title: "Timely Support",
    description: "Quick response and regular updates",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20 overflow-hidden">
        <Background pattern="hexagons" color="text-white" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financial Services for Your Success
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover our comprehensive range of financial services designed to help you achieve
                your financial goals with confidence.
              </p>
              <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white">
                Explore Our Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        <Background pattern="dots" color="text-gray-100" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive financial solutions with a focus on security, expertise, and your success.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#00A7B1]/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#00A7B1]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-20 overflow-hidden">
        <Background pattern="grid" color="text-gray-200" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our specialized financial services tailored to meet your investment and advisory needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service) => (
              <AnimatedSection key={service.id}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${service.color} bg-opacity-10`}>
                        <service.icon className={`w-6 h-6 ${service.color} text-opacity-100`} />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#00A7B1]" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                          <DialogDescription>{service.description}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-6 py-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-[#00A7B1]" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                            <ul className="space-y-2">
                              {service.benefits?.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-[#00A7B1]" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-end gap-4 pt-4">
                            <Button variant="outline" onClick={() => window.location.href = service.link}>
                              Get Started
                            </Button>
                            <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90">
                              Contact Us
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy-900 to-navy-800 overflow-hidden">
        <Background pattern="waves" color="text-white" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8">
                Connect with our team to learn more about our services and how we can help you
                achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
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