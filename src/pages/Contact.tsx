import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "24/7 customer service",
    value: "+255 752 382 939",
    color: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    description: "We'll respond within 24 hours",
    value: "info@nafuu.co.tz",
    color: "text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Available 9am - 5pm EAT",
    value: "Start a conversation",
    color: "text-purple-600",
  },
];

const officeLocations = [
  {
    city: "Dar es Salaam",
    address: "Posta House, 7th Floor, Ohio Street",
    phone: "+255 752 382 939",
    email: "info@nafuu.co.tz",
    hours: "Mon-Fri: 8am - 5pm",
  },
  {
    city: "Arusha",
    address: "Clock Tower, Ground Floor",
    phone: "+255 752 382 939",
    email: "arusha@nafuu.co.tz",
    hours: "Mon-Fri: 8am - 5pm",
  },
  {
    city: "Mwanza",
    address: "PPF Plaza, 3rd Floor",
    phone: "+255 752 382 939",
    email: "mwanza@nafuu.co.tz",
    hours: "Mon-Fri: 8am - 5pm",
  },
  {
    city: "Dodoma",
    address: "LAPF House, 2nd Floor",
    phone: "+255 752 382 939",
    email: "dodoma@nafuu.co.tz",
    hours: "Mon-Fri: 8am - 5pm",
  },
  {
    city: "Nairobi",
    address: "Westlands Business Park, 4th Floor",
    phone: "+254 700 123 456",
    email: "nairobi@nafuu.com",
    hours: "Mon-Fri: 8am - 6pm",
  },
  {
    city: "Mombasa",
    address: "Nyali Business Centre, Ground Floor",
    phone: "+254 700 789 012",
    email: "mombasa@nafuu.com",
    hours: "Mon-Fri: 8am - 6pm",
  }
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-sky-500" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-700" },
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
];

export default function Contact() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/80 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Have questions or need assistance? We're here to help. Reach out to us through any of our contact channels.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <method.icon className={`w-10 h-10 ${method.color} mb-4`} />
                    <h3 className="text-xl font-semibold text-navy-800 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <p className="text-primary font-semibold">{method.value}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+254 700 123 456" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Office Locations */}
            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">
                  Our Offices
                </h2>
              </AnimatedSection>
              
              {officeLocations.map((office, index) => (
                <AnimatedSection key={index} delay={(index + 2) * 100}>
                  <Card className="border-none hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-navy-800 mb-2">
                            {office.city}
                          </h3>
                          <p className="text-gray-600 mb-2">{office.address}</p>
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Phone className="w-4 h-4" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Mail className="w-4 h-4" />
                            <span>{office.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="border-none overflow-hidden">
              <div className="aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5934747403765!2d39.2881493!3d-6.8174499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0374523f7d%3A0x7d5e6a6e6e8d5b5a!2sPosta%20House!5e0!3m2!1sen!2stz!4v1647856732245!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                Connect With Us
              </h2>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-full bg-white shadow-sm ${social.color} hover:text-white transition-colors duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
} 