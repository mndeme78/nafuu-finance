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
  TrendingUp,
  Coins,
  PieChart,
  Clock,
  Shield,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const investmentPlans = [
  {
    id: "fixed-deposit",
    title: "Fixed Deposit",
    icon: Coins,
    description: "Secure your savings with guaranteed returns",
    minAmount: "50,000",
    returns: "8-12%",
    tenure: "6-60 months",
    features: [
      "Guaranteed returns",
      "Flexible tenure options",
      "Monthly interest payout",
      "Auto-renewal facility",
      "Loan against deposit",
    ],
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    icon: TrendingUp,
    description: "Diversified investment portfolio managed by experts",
    minAmount: "10,000",
    returns: "12-18%",
    tenure: "Open-ended",
    features: [
      "Professional management",
      "Portfolio diversification",
      "High liquidity",
      "Tax benefits",
      "Regular portfolio updates",
    ],
  },
  {
    id: "retirement",
    title: "Retirement Planning",
    icon: PieChart,
    description: "Secure your future with long-term investment plans",
    minAmount: "25,000",
    returns: "10-15%",
    tenure: "10+ years",
    features: [
      "Tax-advantaged savings",
      "Regular investment options",
      "Flexible withdrawal options",
      "Life insurance benefits",
      "Wealth accumulation",
    ],
  },
];

const features = [
  {
    icon: Shield,
    title: "Secure Investment",
    description: "Your investments are protected and regulated",
  },
  {
    icon: LineChart,
    title: "Growth Potential",
    description: "Maximize returns with our expert strategies",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Choose investment terms that suit your goals",
  },
  {
    icon: Coins,
    title: "Multiple Options",
    description: "Diverse investment plans for every need",
  },
];

export default function Investment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20 overflow-hidden">
        <Background pattern="hexagons" color="text-white" className="opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Grow Your Wealth with Smart Investments
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover our range of investment solutions designed to help you achieve your
                financial goals with confidence and security.
              </p>
              <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white">
                Start Investing Now
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
                Why Invest with Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer secure and profitable investment options backed by years of expertise
                and market knowledge.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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

      {/* Investment Plans */}
      <section className="relative py-20 overflow-hidden">
        <Background pattern="grid" color="text-gray-200" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                Our Investment Plans
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our range of investment plans tailored to meet your financial goals
                and risk appetite.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {investmentPlans.map((plan) => (
              <AnimatedSection key={plan.id}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-[#00A7B1]/10">
                        <plan.icon className="w-6 h-6 text-[#00A7B1]" />
                      </div>
                      <CardTitle className="text-xl">{plan.title}</CardTitle>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Min. Amount</p>
                        <p className="font-semibold">TZS {plan.minAmount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Returns</p>
                        <p className="font-semibold">{plan.returns}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tenure</p>
                        <p className="font-semibold">{plan.tenure}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#00A7B1]" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white group">
                      Invest Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-gray-300 mb-8">
                Our investment experts are here to help you choose the right investment plan
                and guide you through the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
} 