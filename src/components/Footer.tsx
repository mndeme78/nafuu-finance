import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Loans", href: "/loans" },
  { name: "Insurance", href: "/insurance" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Personal Loans", href: "/loans" },
  { name: "Business Loans", href: "/loans" },
  { name: "Insurance", href: "/insurance" },
  { name: "Investment Plans", href: "/investment" },
  { name: "Financial Advisory", href: "/advisory" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/fadhili.mndeme.71", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/fadhiliamani78?s=09", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fadhili-amani-89a230301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/mndemefadhili?utm_source=qr&igsh=MWd3OHlkNXIwajJtdA==", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6 text-center sm:text-left">
            <Link to="/" className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-9 h-9 bg-[#00A7B1] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-white">Nafuu</span>
                <span className="text-xs text-red-400">Microfinance Limited</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm md:text-base">
              Empowering your financial journey with innovative solutions and trusted partnerships.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 justify-center sm:justify-start text-sm md:text-base"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4 md:mb-6">Our Services</h4>
            <ul className="space-y-3 md:space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 justify-center sm:justify-start text-sm md:text-base"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4 md:mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              Subscribe to our newsletter for the latest updates and financial insights.
            </p>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-navy-800 border-navy-700 text-white placeholder:text-gray-400 focus:border-[#00A7B1]"
              />
              <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-navy-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Phone className="h-5 w-5 text-[#00A7B1]" />
              <span className="text-gray-400 text-sm md:text-base">+255 123 456 789</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Mail className="h-5 w-5 text-[#00A7B1]" />
              <span className="text-gray-400 text-sm md:text-base">info@nafuu.co.tz</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <MapPin className="h-5 w-5 text-[#00A7B1]" />
              <span className="text-gray-400 text-sm md:text-base">Dar es Salaam, Tanzania</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-navy-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nafuu Microfinance Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
