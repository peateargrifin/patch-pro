import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Smartphone, 
  Shield, 
  Zap, 
  Users, 
  Award, 
  Camera,
  Navigation,
  Bell,
  BarChart3,
  CheckCircle2,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-civic.jpg";

const Landing = () => {
  const features = [
    {
      icon: Camera,
      title: "Photo & GPS Reporting",
      description: "Capture issues with photos and automatic location tagging for precise reporting."
    },
    {
      icon: Navigation,
      title: "Smart Auto-Routing",
      description: "AI-powered system routes reports to the correct department automatically."
    },
    {
      icon: Bell,
      title: "Real-time Tracking",
      description: "Track your reports from submission to resolution with live updates."
    },
    {
      icon: Award,
      title: "CivicPoints Rewards",
      description: "Earn points for active reporting and contribute to better civic engagement."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and heatmaps for data-driven civic improvements."
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Upvote, comment, and collaborate on issues in your neighborhood."
    }
  ];

  const stats = [
    { label: "Cities Using Platform", value: "250+" },
    { label: "Issues Resolved", value: "50K+" },
    { label: "Active Citizens", value: "100K+" },
    { label: "Response Time", value: "< 24h" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mumbai Resident",
      content: "Reported a pothole and it was fixed in 2 days! The tracking feature kept me updated throughout.",
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      role: "Pune Municipal Officer",
      content: "CivicReport has revolutionized how we handle citizen complaints. Much more efficient workflow.",
      rating: 5
    },
    {
      name: "Anita Singh",
      role: "Delhi Citizen",
      content: "Love the rewards system! Earned 500 CivicPoints this month for reporting street light issues.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Smart India Hackathon 2025 Winner
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Smart Civic Issue
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Reporting</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Bridge the gap between citizens and municipalities. Report civic issues instantly, 
                  track resolution progress, and earn rewards for active civic participation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl" variant="hero">
                  <Link to="/dashboard">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Start Reporting
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link to="/admin">
                    <Shield className="mr-2 h-5 w-5" />
                    Admin Portal
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src={heroImage} 
                alt="Civic reporting platform"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools for efficient civic issue reporting and resolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple 3-step process for civic issue resolution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold">Report Issue</h3>
              <p className="text-muted-foreground">
                Capture photo, add description, and submit with automatic GPS tagging
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold">Smart Routing</h3>
              <p className="text-muted-foreground">
                AI automatically routes to correct department for faster resolution
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Get Resolved</h3>
              <p className="text-muted-foreground">
                Track progress and receive notifications when issue is resolved
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              What People Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by citizens and government officials across India
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Make Your City Better?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of citizens making a difference in their communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link to="/dashboard">
                  <MapPin className="mr-2 h-5 w-5" />
                  Start Reporting Issues
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/admin">
                  <Shield className="mr-2 h-5 w-5" />
                  Government Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;