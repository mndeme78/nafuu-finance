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
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const advisoryServices = [
  {
    id: "personal-planning",
    title: "Personal Financial Planning",
    icon: Calculator,
    description: "Comprehensive financial planning for individuals and families",
    features: [
      "Personalized financial assessment",
      "Goal-based planning strategies",
      "Budget and savings plans",
      "Debt management advice",
      "Regular plan reviews and updates",
    ],
  },
  {
    id: "investment-consultation",
    title: "Investment Consultation",
    icon: LineChart,
    description: "Expert guidance for your investment decisions",
    features: [
      "Portfolio analysis and optimization",
      "Risk assessment and management",
      "Investment strategy development",
      "Market trends analysis",
      "Regular portfolio reviews",
    ],
  },
  {
    id: "tax-planning",
    title: "Tax Planning",
    icon: ScrollText,
    description: "Optimize your tax efficiency with expert guidance",
    features: [
      "Tax-saving investment advice",
      "Tax compliance guidance",
      "Annual tax planning",
      "Business tax strategies",
      "Tax documentation support",
    ],
  },
  {
    id: "retirement-planning",
    title: "Retirement Planning",
    icon: PieChart,
    description: "Secure your future with comprehensive retirement planning",
    features: [
      "Retirement needs analysis",
      "Pension planning",
      "Investment strategy for retirement",
      "Social security optimization",
      "Healthcare cost planning",
    ],
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    icon: Landmark,
    description: "Protect and transfer your wealth effectively",
    features: [
      "Will and trust planning",
      "Asset protection strategies",
      "Inheritance planning",
      "Estate tax minimization",
      "Succession planning",
    ],
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    icon: Briefcase,
    description: "Strategic financial guidance for businesses",
    features: [
      "Business financial planning",
      "Cash flow management",
      "Growth strategies",
      "Risk management",
      "Business succession planning",
    ],
  },
];

const whyChooseUs = [
  {
    icon: BadgeDollarSign,
    title: "Expert Advisors",
    description: "Certified financial planners with years of experience",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description: "Tailored solutions for your unique financial goals",
  },
  {
    icon: Scale,
    title: "Unbiased Advice",
    description: "Independent guidance focused on your best interests",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Ongoing support and regular review meetings",
  },
];

export default function Advisory() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20 overflow-hidden">
        <Background pattern="hexagons" color="text-white" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Financial Advisory Services
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Get personalized financial guidance from our team of expert advisors to help you
                make informed decisions and achieve your financial goals.
              </p>
              <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white">
                Schedule a Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 bg-white overflow-hidden">
        <Background pattern="dots" color="text-gray-100" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                Why Choose Our Advisory Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive financial guidance with a focus on your unique needs and goals.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#00A7B1]/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#00A7B1]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="relative py-20 overflow-hidden">
        <Background pattern="grid" color="text-gray-200" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                Our Advisory Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive financial advisory services tailored to meet your personal and
                business needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service) => (
              <AnimatedSection key={service.id}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-[#00A7B1]/10">
                        <service.icon className="w-6 h-6 text-[#00A7B1]" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
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
                            <h3 className="text-lg font-semibold mb-3">How We Can Help</h3>
                            <ul className="space-y-2">
                              {service.howWeHelp?.map((help, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-[#00A7B1]" />
                                  <span>{help}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-end gap-4 pt-4">
                            <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                              Schedule Consultation
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
                Get Professional Financial Guidance
              </h2>
              <p className="text-gray-300 mb-8">
                Schedule a consultation with our financial advisors to discuss your financial goals
                and create a personalized plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90">
                  Book a Consultation
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