import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { TrendingUp, LineChart } from "lucide-react";
import { ServiceSelectionForm } from "@/pages/Loans";

const services = [
  {
    title: "Investment Plans",
    description: "Grow your wealth with our diverse investment solutions",
    icon: TrendingUp,
    href: "/investment",
  },
  {
    title: "Financial Advisory",
    description: "Expert guidance for your financial decisions",
    icon: LineChart,
    href: "/advisory",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 mr-8">
          <div className="w-9 h-9 bg-[#00A7B1] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Nafuu</span>
            <span className="text-xs text-red-500">Microfinance Limited</span>
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <li key={service.title}>
                      <Link
                        to={service.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <service.icon className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {service.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                  <li className="col-span-2">
                    <Link
                      to="/services"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">View All Services</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore our complete range of financial services
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/loans">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Loans
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/insurance">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Insurance
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/events">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-4">
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#00A7B1] hover:bg-[#00A7B1]/90 text-white">
                Apply Now
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
      </div>
    </header>
  );
} 