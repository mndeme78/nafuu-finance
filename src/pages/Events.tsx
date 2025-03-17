import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, MapPin, Clock, Filter } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Sample events data
const events = [
  {
    id: 1,
    title: "Financial Planning Workshop",
    description: "Learn how to manage your finances and plan for the future",
    date: "2024-03-25",
    time: "14:00",
    location: "Virtual Event",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
  },
  {
    id: 2,
    title: "Investment Strategies Seminar",
    description: "Expert insights on modern investment approaches",
    date: "2024-03-28",
    time: "10:00",
    location: "Financial Center, Room 301",
    category: "Seminar",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&q=80",
  },
  {
    id: 3,
    title: "Networking Mixer",
    description: "Connect with financial professionals and industry leaders",
    date: "2024-04-02",
    time: "18:00",
    location: "Grand Hotel Rooftop",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80",
  },
  {
    id: 4,
    title: "Cryptocurrency Forum",
    description: "Understanding digital currencies and blockchain technology",
    date: "2024-04-05",
    time: "15:00",
    location: "Tech Hub Conference Center",
    category: "Forum",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&q=80",
  },
];

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
          alt="Events hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Upcoming Events</h1>
            <p className="text-lg md:text-xl">Join us for exciting financial workshops and networking opportunities</p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <AnimatedSection className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-[300px]"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Workshop">Workshops</SelectItem>
                <SelectItem value="Seminar">Seminars</SelectItem>
                <SelectItem value="Networking">Networking</SelectItem>
                <SelectItem value="Forum">Forums</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {event.category}
                  </span>
                </div>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
} 