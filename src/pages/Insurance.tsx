import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Heart, Car, Home, Building, Calculator, Check, Info } from "lucide-react";

const insuranceTypes = [
  {
    id: "health",
    title: "Health Insurance",
    icon: Heart,
    description: "Comprehensive health coverage for you and your family",
    features: [
      "24/7 Medical Support",
      "Nationwide Hospital Network",
      "Prescription Drug Coverage",
      "Preventive Care",
    ],
    startingPrice: 150,
  },
  {
    id: "auto",
    title: "Auto Insurance",
    icon: Car,
    description: "Protect your vehicle with our comprehensive coverage",
    features: [
      "Collision Coverage",
      "Liability Protection",
      "Roadside Assistance",
      "Rental Car Coverage",
    ],
    startingPrice: 80,
  },
  {
    id: "home",
    title: "Home Insurance",
    icon: Home,
    description: "Secure your home and belongings",
    features: [
      "Property Damage Coverage",
      "Personal Liability Protection",
      "Natural Disaster Coverage",
      "Theft Protection",
    ],
    startingPrice: 120,
  },
  {
    id: "business",
    title: "Business Insurance",
    icon: Building,
    description: "Comprehensive coverage for your business needs",
    features: [
      "Liability Coverage",
      "Property Protection",
      "Employee Coverage",
      "Business Interruption",
    ],
    startingPrice: 200,
  },
];

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer: "We offer a wide range of insurance products including health, auto, home, and business insurance. Each type is customizable to meet your specific needs and budget. Our comprehensive coverage options ensure you get the protection that's right for you.",
  },
  {
    question: "How do I file a claim?",
    answer: "Filing a claim is easy! You can submit claims through our online portal, mobile app, or by calling our 24/7 claims hotline. Our dedicated claims team will guide you through the process and ensure quick resolution. We aim to process most claims within 48-72 hours.",
  },
  {
    question: "How are premiums calculated?",
    answer: "Premiums are calculated based on various factors including coverage type, history, value of insured items, and risk factors. We use advanced analytics to ensure fair pricing while maintaining comprehensive coverage. Use our calculator for a personalized estimate.",
  },
  {
    question: "What discounts are available?",
    answer: "We offer multiple discounts including multi-policy, safe driver, good student, and loyalty discounts. You may also qualify for additional savings through our preventive measures program and annual payment options. Contact our team to learn which discounts you qualify for.",
  },
  {
    question: "How can I modify my coverage?",
    answer: "You can modify your coverage at any time by logging into your account, contacting your insurance agent, or visiting our office. We recommend reviewing your coverage annually to ensure it still meets your needs as circumstances change.",
  }
];

const InsuranceQuoteCalculator = () => {
  const [insuranceType, setInsuranceType] = useState("health");
  const [formData, setFormData] = useState({
    // Health Insurance
    age: "",
    coverageAmount: 50000,
    preExistingConditions: "no",
    coverageType: "individual",
    // Car Insurance
    carValue: "",
    carYear: "",
    carMake: "",
    carModel: "",
    // Home Insurance
    propertyValue: "",
    propertyType: "residential",
    constructionYear: "",
    securitySystem: "no",
    // Life Insurance
    occupation: "",
    smokingStatus: "no",
    beneficiaries: "",
    term: "10",
    // Business Insurance
    businessType: "",
    numberOfEmployees: "",
    annualRevenue: "",
    industryType: "",
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderFormFields = () => {
    switch (insuranceType) {
      case "health":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Age</label>
              <Input
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Coverage Amount: TZS {formData.coverageAmount.toLocaleString()}</label>
              <Input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={formData.coverageAmount}
                onChange={(e) => handleInputChange("coverageAmount", parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Coverage Type</label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.coverageType}
                onChange={(e) => handleInputChange("coverageType", e.target.value)}
              >
                <option value="individual">Individual</option>
                <option value="family">Family</option>
                <option value="group">Group</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Pre-existing Conditions</label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.preExistingConditions}
                onChange={(e) => handleInputChange("preExistingConditions", e.target.value)}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>
        );

      case "car":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Car Make</label>
              <Input
                type="text"
                placeholder="e.g., Toyota"
                value={formData.carMake}
                onChange={(e) => handleInputChange("carMake", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Car Model</label>
              <Input
                type="text"
                placeholder="e.g., Corolla"
                value={formData.carModel}
                onChange={(e) => handleInputChange("carModel", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Car Year</label>
              <Input
                type="number"
                placeholder="e.g., 2020"
                value={formData.carYear}
                onChange={(e) => handleInputChange("carYear", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Car Value (TZS)</label>
              <Input
                type="number"
                placeholder="Enter car value"
                value={formData.carValue}
                onChange={(e) => handleInputChange("carValue", e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        );

      case "home":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Property Value (TZS)</label>
              <Input
                type="number"
                placeholder="Enter property value"
                value={formData.propertyValue}
                onChange={(e) => handleInputChange("propertyValue", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Property Type</label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.propertyType}
                onChange={(e) => handleInputChange("propertyType", e.target.value)}
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="rental">Rental Property</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Construction Year</label>
              <Input
                type="number"
                placeholder="e.g., 2010"
                value={formData.constructionYear}
                onChange={(e) => handleInputChange("constructionYear", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Security System</label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.securitySystem}
                onChange={(e) => handleInputChange("securitySystem", e.target.value)}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>
        );

      case "life":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Age</label>
              <Input
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Occupation</label>
              <Input
                type="text"
                placeholder="Enter your occupation"
                value={formData.occupation}
                onChange={(e) => handleInputChange("occupation", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Coverage Term</label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.term}
                onChange={(e) => handleInputChange("term", e.target.value)}
              >
                <option value="10">10 Years</option>
                <option value="15">15 Years</option>
                <option value="20">20 Years</option>
                <option value="25">25 Years</option>
                <option value="30">30 Years</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Smoking Status</label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.smokingStatus}
                onChange={(e) => handleInputChange("smokingStatus", e.target.value)}
              >
                <option value="no">Non-smoker</option>
                <option value="yes">Smoker</option>
              </select>
            </div>
          </div>
        );

      case "business":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Business Type</label>
              <Input
                type="text"
                placeholder="e.g., Retail, Manufacturing"
                value={formData.businessType}
                onChange={(e) => handleInputChange("businessType", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Industry Type</label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.industryType}
                onChange={(e) => handleInputChange("industryType", e.target.value)}
              >
                <option value="">Select Industry</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="services">Services</option>
                <option value="technology">Technology</option>
                <option value="hospitality">Hospitality</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Number of Employees</label>
              <Input
                type="number"
                placeholder="Enter number of employees"
                value={formData.numberOfEmployees}
                onChange={(e) => handleInputChange("numberOfEmployees", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy-800 block mb-2">Annual Revenue (TZS)</label>
              <Input
                type="number"
                placeholder="Enter annual revenue"
                value={formData.annualRevenue}
                onChange={(e) => handleInputChange("annualRevenue", e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Calculator className="w-5 h-5 text-[#00A7B1]" />
          <CardTitle>Insurance Quote Calculator</CardTitle>
        </div>
        <CardDescription>Get an instant estimate for your insurance needs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-medium text-navy-800 block mb-2">Insurance Type</label>
          <select 
            className="w-full rounded-md border border-input bg-background px-3 py-2"
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value)}
          >
            <option value="health">Health Insurance</option>
            <option value="car">Car Insurance</option>
            <option value="home">Home Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="business">Business Insurance</option>
          </select>
        </div>

        {renderFormFields()}

        <Button className="w-full bg-[#00A7B1] hover:bg-[#00A7B1]/90">
          Calculate Estimate
        </Button>
      </CardContent>
    </Card>
  );
};

export default function Insurance() {
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("health");
  const [coverage, setCoverage] = useState(50000);
  const [age, setAge] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculateEstimate = () => {
    const basePrice = insuranceTypes.find(type => type.id === selectedInsuranceType)?.startingPrice || 100;
    const coverageMultiplier = coverage / 50000;
    const ageMultiplier = age ? (parseInt(age) > 50 ? 1.5 : 1) : 1;
    
    setEstimatedPrice(Math.round(basePrice * coverageMultiplier * ageMultiplier));
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
          alt="Insurance hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <Shield className="mx-auto mb-6 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Protect What Matters Most</h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              Comprehensive insurance solutions tailored to your needs. Get peace of mind knowing you're protected.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Insurance Types Tabs */}
        <AnimatedSection>
          <Tabs defaultValue="health" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {insuranceTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
                  <type.icon className="h-4 w-4" />
                  <span className="hidden md:inline">{type.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {insuranceTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <type.icon className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="mb-4 text-lg font-semibold">Key Features</h3>
                        <ul className="space-y-2">
                          {type.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-primary/5 p-6">
                        <h3 className="mb-4 text-lg font-semibold">Starting from</h3>
                        <div className="mb-4 text-3xl font-bold text-primary">
                          ${type.startingPrice}/mo
                        </div>
                        <Button className="w-full">Get Quote</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>

        {/* Quote Calculator */}
        <AnimatedSection className="mb-12">
          <InsuranceQuoteCalculator />
        </AnimatedSection>

        {/* FAQs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-navy-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our insurance products and coverage options.
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-3xl mx-auto" delay={200}>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-navy-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
} 