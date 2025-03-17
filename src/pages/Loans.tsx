import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calculator,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  CreditCard,
  Leaf,
  Heart,
  Building,
  Wrench,
  CreditCard as CardIcon,
  CheckCircle2,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const LoanCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color = "bg-nafuu-600",
  hoverColor = "hover:bg-nafuu-700",
  imageSrc,
  features = [],
  requirements = []
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-white">
      <CardHeader className="pb-2">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl font-display font-bold text-navy-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600">
        <p className="mb-4">{description}</p>
        {imageSrc && (
          <div className="rounded-lg overflow-hidden h-40 mb-4">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className={`border-nafuu-600 text-nafuu-600 ${hoverColor} hover:text-white`}>
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              {imageSrc && (
                <div className="rounded-lg overflow-hidden">
                  <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
                </div>
              )}
              {features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00A7B1]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {requirements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00A7B1]" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(18);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount.toString());
    const calculateInterest = parseFloat(interestRate.toString()) / 100 / 12;
    const calculatePayments = parseFloat(loanTerm.toString());

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(monthly);
    } else {
      setMonthlyPayment(0);
    }
  };

  return (
    <Card className="overflow-hidden shadow-lg border-0">
      <CardHeader className="bg-nafuu-600 text-white">
        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
          <Calculator className="w-6 h-6" />
        </div>
        <CardTitle className="text-2xl font-display">Loan Calculator</CardTitle>
        <CardDescription className="text-nafuu-50">Estimate your monthly payments</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-navy-800">Loan Amount (TZS)</label>
          <Input
            type="range"
            min="100000"
            max="5000000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>TZS {loanAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-navy-800">Loan Term (months)</label>
          <Input
            type="range"
            min="6"
            max="60"
            step="6"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{loanTerm} months</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-navy-800">Interest Rate (%)</label>
          <Input
            type="range"
            min="5"
            max="30"
            step="0.5"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{interestRate}%</span>
          </div>
        </div>

        <Button onClick={calculateLoan} className="w-full">Calculate</Button>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500">Estimated Monthly Payment:</p>
          <p className="text-3xl font-bold text-nafuu-600">
            {monthlyPayment ? `TZS ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '---'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const formSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  amount: z.string()
    .refine(
      (val) => {
        const num = Number(val);
        return num >= 50000;
      },
      'Minimum loan amount is TZS 50,000'
    )
    .refine(
      (val) => !isNaN(Number(val)),
      'Please enter a valid amount'
    ),
  purpose: z.string().min(10, 'Please provide more details about the loan purpose'),
});

const ADMIN_EMAILJS_SERVICE_ID = "service_j2j6iqb";
const ADMIN_EMAILJS_TEMPLATE_ID = "template_md2s7nm";
const USER_EMAILJS_SERVICE_ID = "service_7go1zkv";
const USER_EMAILJS_TEMPLATE_ID = "template_jj5xftl";

export const ServiceSelectionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: '',
      name: '',
      email: '',
      phone: '',
      amount: '',
      purpose: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Format the loan amount with commas
      const formattedAmount = Number(data.amount).toLocaleString();
      
      // Get the selected service label instead of just the ID
      const selectedService = services
        .flatMap(group => group.options)
        .find(option => option.id === data.serviceType)?.label || data.serviceType;

      // Prepare the admin email template parameters
      const adminTemplateParams = {
        to_email: 'fadhiliamani88@gmail.com',
        from_name: data.name,
        from_email: data.email,
        phone_number: data.phone,
        service_type: selectedService,
        loan_amount: formattedAmount,
        loan_purpose: data.purpose,
      };

      // Prepare the user email template parameters
      const userTemplateParams = {
        to_email: data.email,
        to_name: data.name,
        service_type: selectedService,
        loan_amount: formattedAmount,
        from_name: 'Nafuu Finance',
        reply_to: 'fadhiliamani88@gmail.com',
      };

      // Send both emails
      const [adminResponse, userResponse] = await Promise.all([
        // Send to admin
        emailjs.send(
          ADMIN_EMAILJS_SERVICE_ID,
          ADMIN_EMAILJS_TEMPLATE_ID,
          adminTemplateParams
        ),
        // Send to user
        emailjs.send(
          USER_EMAILJS_SERVICE_ID,
          USER_EMAILJS_TEMPLATE_ID,
          userTemplateParams
        )
      ]);

      if (adminResponse.status === 200 && userResponse.status === 200) {
        toast.success('Thank you! Your loan application has been submitted successfully. Please check your email for confirmation.', {
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting loan application:', error);
      toast.error(
        'Sorry, we could not submit your loan application at this time. Please try again later or contact our support team.',
        { duration: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      id: 'personal',
      title: 'Personal Loans',
      description: 'Quick and flexible personal loans for your needs',
      icon: CreditCard,
      options: [
        { id: 'salary-advance', label: 'Salary Advance', description: 'Get instant access to funds before your next paycheck' },
        { id: 'home-improvement', label: 'Home Improvement', description: 'Transform your living space with our financing options' },
        { id: 'car-financing', label: 'Car Financing', description: 'Make your dream car a reality with our auto loans' },
        { id: 'personal-emergency', label: 'Personal Emergency', description: 'Quick funds for unexpected expenses' },
      ]
    },
    {
      id: 'business',
      title: 'Business Loans',
      description: 'Financial solutions for business growth',
      icon: Briefcase,
      options: [
        { id: 'working-capital', label: 'Working Capital', description: 'Finance your day-to-day operations' },
        { id: 'equipment-financing', label: 'Equipment Financing', description: 'Acquire the latest equipment and machinery' },
        { id: 'business-expansion', label: 'Business Expansion', description: 'Take your business to the next level' },
        { id: 'startup-funding', label: 'Startup Funding', description: 'Get your business off the ground' },
      ]
    },
    {
      id: 'special',
      title: 'Special Purpose Loans',
      description: 'Specialized financing for specific needs',
      icon: Leaf,
      options: [
        { id: 'education', label: 'Education Financing', description: 'Invest in your future with education loans' },
        { id: 'green-energy', label: 'Green Energy', description: 'Finance eco-friendly improvements' },
        { id: 'medical', label: 'Medical Expenses', description: 'Support for medical treatments' },
        { id: 'wedding', label: 'Wedding Finance', description: 'Make your special day memorable' },
      ]
    }
  ];

  // Flatten all options into a single array
  const allOptions = services.flatMap(group => 
    group.options.map(option => ({
      ...option,
      groupTitle: group.title,
      groupIcon: group.icon
    }))
  );

  return (
    <div className="max-w-4xl mx-auto">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Service Selection */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-lg font-semibold">Select a Loan Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-4"
                  >
                    {services.map((group) => (
                      <div key={group.id} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#00A7B1]/10 flex items-center justify-center">
                            <group.icon className="w-5 h-5 text-[#00A7B1]" />
                          </div>
                          <h3 className="font-semibold text-lg">{group.title}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
                          {group.options.map((option) => (
                            <div
                              key={option.id}
                              className={`relative flex items-start p-4 rounded-lg border transition-all duration-200 ${
                                field.value === option.id 
                                  ? 'border-[#00A7B1] bg-[#00A7B1]/5' 
                                  : 'border-gray-200 hover:border-[#00A7B1]/50'
                              }`}
                            >
                              <FormItem className="flex-1">
                                <FormControl>
                                  <label className="flex flex-col cursor-pointer">
                                    <div className="flex items-center gap-3">
                                      <RadioGroupItem value={option.id} />
                                      <span className="font-medium">{option.label}</span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 ml-6">
                                      {option.description}
                                    </p>
                                  </label>
                                </FormControl>
                              </FormItem>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+255 123 456 789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Amount (TZS)</FormLabel>
                    <FormControl>
                    <Input 
                      type="number" 
                      placeholder="50000" 
                      min="50000"
                      step="1000"
                      {...field} 
                    />
                    </FormControl>
                  <FormDescription className="text-xs text-gray-500">
                    Minimum amount: TZS 50,000
                  </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormLabel>Loan Purpose</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Briefly describe why you need this loan..." 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          <Button 
            type="submit" 
            className="w-full bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
          </form>
        </Form>
    </div>
  );
};

const Loans = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Flexible Loan Solutions for Every Need
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Whether you're looking to grow your business, finance your education, or achieve
                your personal goals, we have the right loan solution for you.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white">
                    Apply for a Loan
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Apply for a Loan</DialogTitle>
                    <DialogDescription>
                      Select the type of loan you'd like to apply for and fill in your details.
                    </DialogDescription>
                  </DialogHeader>
                  <ServiceSelectionForm />
                </DialogContent>
              </Dialog>
            </div>
            </AnimatedSection>
          </div>
        </section>

      {/* Personal Loans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Personal Loans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quick and flexible personal loans tailored to your needs with competitive interest rates.
              </p>
            </div>
            </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LoanCard 
              title="Salary Advance"
              description="Get instant access to funds before your next paycheck with our salary advance loans."
                icon={CreditCard}
              imageSrc="https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&w=800&q=80"
              features={["Quick access to funds", "Competitive interest rates"]}
              requirements={["Salary advance loans are available for employees with a stable income"]}
              />
              <LoanCard 
              title="Home Improvement"
              description="Transform your living space with our home improvement financing options."
                icon={Home}
              imageSrc="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
              features={["Transform your living space", "Competitive interest rates"]}
              requirements={["Home improvement loans are available for residential properties"]}
              />
              <LoanCard 
              title="Car Financing"
              description="Make your dream car a reality with our competitive auto loans."
                icon={Car}
              imageSrc="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80"
              features={["Make your dream car a reality", "Competitive interest rates"]}
              requirements={["Car financing is available for new and used cars"]}
            />
          </div>
        </div>
      </section>

      {/* Business Loans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Business Loans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Empower your business growth with our range of financing solutions.
              </p>
            </div>
            </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LoanCard
              title="Working Capital"
              description="Finance your day-to-day operations and manage cash flow effectively."
              icon={Briefcase}
              imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              features={["Finance your day-to-day operations", "Manage cash flow effectively"]}
              requirements={["Working capital loans are available for businesses with a stable income"]}
            />
            <LoanCard
              title="Equipment Financing"
              description="Acquire the latest equipment and machinery for your business growth."
              icon={Briefcase}
              imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              features={["Acquire the latest equipment and machinery", "Support your business growth"]}
              requirements={["Equipment financing is available for businesses with a stable income"]}
            />
            <LoanCard
              title="Business Expansion"
              description="Take your business to the next level with our expansion financing."
              icon={Briefcase}
              imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              features={["Take your business to the next level", "Support your business growth"]}
              requirements={["Expansion financing is available for businesses with a stable income"]}
            />
          </div>
          </div>
        </section>

      {/* Special Purpose Loans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Special Purpose Loans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized financing solutions for specific needs and goals.
              </p>
            </div>
            </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LoanCard
              title="Education Financing"
              description="Invest in your future with our education loans for higher studies."
              icon={GraduationCap}
              imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
              features={["Invest in your future", "Support your education"]}
              requirements={["Education loans are available for higher studies"]}
            />
            <LoanCard
              title="Green Energy"
              description="Finance solar installations and eco-friendly home improvements."
              icon={Home}
              imageSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
              features={["Finance solar installations", "Support eco-friendly improvements"]}
              requirements={["Green energy loans are available for eco-friendly home improvements"]}
            />
            <LoanCard
              title="Medical Expenses"
              description="Get financial support for medical treatments and healthcare needs."
              icon={CreditCard}
              imageSrc="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80"
              features={["Get financial support for medical treatments", "Support healthcare needs"]}
              requirements={["Medical expenses loans are available for medical treatments and healthcare needs"]}
            />
                  </div>
              </div>
      </section>

      {/* Calculator and Application Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <LoanCalculator />
            </AnimatedSection>
          </div>
          </div>
        </section>
    </div>
  );
};

export default Loans;
