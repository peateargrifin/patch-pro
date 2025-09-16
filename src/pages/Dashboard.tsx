import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Plus, 
  Filter, 
  Search,
  Camera,
  Clock,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Award,
  Heart,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const issues = [
    {
      id: 1,
      title: "Pothole on MG Road",
      description: "Large pothole causing traffic issues",
      status: "in-progress",
      priority: "high",
      category: "roads",
      location: "MG Road, Sector 14",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      upvotes: 23,
      comments: 5,
      reportedAt: "2 hours ago",
      estimatedResolution: "3 days"
    },
    {
      id: 2,
      title: "Broken Street Light",
      description: "Street light not working since yesterday",
      status: "acknowledged",
      priority: "medium",
      category: "lighting",
      location: "Park Street, Block B",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400",
      upvotes: 15,
      comments: 3,
      reportedAt: "5 hours ago",
      estimatedResolution: "5 days"
    },
    {
      id: 3,
      title: "Garbage Overflow",
      description: "Waste bin overflowing for 3 days",
      status: "resolved",
      priority: "medium",
      category: "sanitation",
      location: "Market Square",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      upvotes: 31,
      comments: 8,
      reportedAt: "1 day ago",
      estimatedResolution: "Completed"
    },
    {
      id: 4,
      title: "Water Leakage",
      description: "Major water pipe leak flooding the road",
      status: "submitted",
      priority: "urgent",
      category: "water",
      location: "Central Avenue",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
      upvotes: 45,
      comments: 12,
      reportedAt: "30 minutes ago",
      estimatedResolution: "1 day"
    }
  ];

  const userStats = {
    reportsSubmitted: 12,
    civicPoints: 1250,
    resolved: 8,
    rank: "Gold Citizen"
  };

  const statusColors = {
    submitted: "bg-blue-500",
    acknowledged: "bg-yellow-500", 
    "in-progress": "bg-orange-500",
    resolved: "bg-green-500",
    urgent: "bg-red-500"
  };

  const statusIcons = {
    submitted: Clock,
    acknowledged: AlertTriangle,
    "in-progress": TrendingUp,
    resolved: CheckCircle2
  };

  const priorityColors = {
    low: "border-green-500",
    medium: "border-yellow-500",
    high: "border-orange-500",
    urgent: "border-red-500"
  };

  const filteredIssues = selectedFilter === "all" 
    ? issues 
    : issues.filter(issue => issue.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Public Dashboard</h1>
            <p className="text-muted-foreground">Track and report civic issues in your community</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/report">
                <Plus className="mr-2 h-5 w-5" />
                Report New Issue
              </Link>
            </Button>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{userStats.reportsSubmitted}</div>
              <div className="text-sm text-muted-foreground">Reports Submitted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-1">{userStats.civicPoints}</div>
              <div className="text-sm text-muted-foreground">CivicPoints</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-1">{userStats.resolved}</div>
              <div className="text-sm text-muted-foreground">Issues Resolved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <div className="text-sm font-medium">{userStats.rank}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="issues" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-fit lg:grid-cols-3">
            <TabsTrigger value="issues">All Issues</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="my-reports">My Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="issues" className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search issues..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("all")}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={selectedFilter === "roads" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("roads")}
                  size="sm"
                >
                  Roads
                </Button>
                <Button
                  variant={selectedFilter === "lighting" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("lighting")}
                  size="sm"
                >
                  Lighting
                </Button>
                <Button
                  variant={selectedFilter === "sanitation" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("sanitation")}
                  size="sm"
                >
                  Sanitation
                </Button>
                <Button
                  variant={selectedFilter === "water" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("water")}
                  size="sm"
                >
                  Water
                </Button>
              </div>
            </div>

            {/* Issues Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredIssues.map((issue) => {
                const StatusIcon = statusIcons[issue.status] || Clock;
                return (
                  <Card key={issue.id} className={`border-l-4 ${priorityColors[issue.priority]} hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant={issue.status === "resolved" ? "default" : "secondary"}>
                              <StatusIcon className="mr-1 h-3 w-3" />
                              {issue.status.replace("-", " ")}
                            </Badge>
                            <Badge variant="outline" className="capitalize">
                              {issue.priority}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{issue.title}</CardTitle>
                          <CardDescription>{issue.description}</CardDescription>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            {issue.location}
                          </div>
                        </div>
                        <img 
                          src={issue.image} 
                          alt={issue.title}
                          className="w-20 h-20 rounded-lg object-cover ml-4"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{issue.upvotes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{issue.comments}</span>
                          </div>
                          <span>{issue.reportedAt}</span>
                        </div>
                        <div className="text-sm font-medium">
                          ETA: {issue.estimatedResolution}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Issue Map</CardTitle>
                <CardDescription>
                  View all reported issues on an interactive map
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                    <p className="text-sm text-muted-foreground">
                      This will show real-time civic issues with GPS locations, 
                      priority markers, and clustering for better visualization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-reports">
            <Card>
              <CardHeader>
                <CardTitle>My Reports</CardTitle>
                <CardDescription>
                  Track the status of issues you've reported
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {issues.slice(0, 2).map((issue) => {
                    const StatusIcon = statusIcons[issue.status] || Clock;
                    return (
                      <div key={issue.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img 
                          src={issue.image} 
                          alt={issue.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">{issue.title}</h4>
                          <p className="text-sm text-muted-foreground">{issue.location}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">
                              <StatusIcon className="mr-1 h-3 w-3" />
                              {issue.status.replace("-", " ")}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{issue.reportedAt}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">+50 Points</div>
                          <div className="text-xs text-muted-foreground">Earned</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;