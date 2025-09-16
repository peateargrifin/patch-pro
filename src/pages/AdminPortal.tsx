import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Shield, 
  Users, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Filter,
  Search,
  MapPin,
  Calendar,
  Download,
  UserCheck,
  Settings
} from "lucide-react";

const AdminPortal = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const stats = {
    totalReports: 1247,
    pending: 89,
    inProgress: 156,
    resolved: 1002,
    avgResolutionTime: "2.3 days",
    citizenSatisfaction: "94%"
  };

  const reports = [
    {
      id: "RPT-001",
      title: "Major Pothole on Highway",
      citizen: "Rahul Sharma",
      department: "Public Works",
      status: "in-progress",
      priority: "urgent",
      location: "NH-8, Sector 45",
      submittedAt: "2024-01-15 09:30",
      assignedTo: "Team A - Road Repair",
      estimatedCompletion: "2024-01-18",
      description: "Large pothole causing accidents, immediate attention required",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      id: "RPT-002", 
      title: "Street Light Malfunction",
      citizen: "Priya Patel",
      department: "Electricity",
      status: "acknowledged",
      priority: "medium",
      location: "Park Street, Block B",
      submittedAt: "2024-01-15 14:20",
      assignedTo: "Electrical Team 2",
      estimatedCompletion: "2024-01-20",
      description: "Multiple street lights not working since yesterday night",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400"
    },
    {
      id: "RPT-003",
      title: "Waste Collection Overdue",
      citizen: "Amit Kumar",
      department: "Sanitation",
      status: "resolved",
      priority: "high",
      location: "Market Complex, Zone 3",
      submittedAt: "2024-01-14 11:45",
      assignedTo: "Sanitation Team C",
      estimatedCompletion: "Completed",
      description: "Garbage not collected for 4 days, health hazard",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400"
    },
    {
      id: "RPT-004",
      title: "Water Supply Interruption",
      citizen: "Neha Singh",
      department: "Water Works",
      status: "submitted",
      priority: "urgent",
      location: "Residential Area, Sector 12",
      submittedAt: "2024-01-15 16:10",
      assignedTo: "Unassigned",
      estimatedCompletion: "Pending Assignment",
      description: "No water supply for entire sector since morning",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400"
    }
  ];

  const departments = [
    { name: "Public Works", pending: 23, inProgress: 45, resolved: 312 },
    { name: "Sanitation", pending: 18, inProgress: 34, resolved: 289 },
    { name: "Water Works", pending: 15, inProgress: 28, resolved: 156 },
    { name: "Electricity", pending: 12, inProgress: 22, resolved: 134 },
    { name: "Traffic", pending: 8, inProgress: 15, resolved: 89 },
    { name: "Parks & Recreation", pending: 13, inProgress: 12, resolved: 22 }
  ];

  const statusColors = {
    submitted: "bg-blue-500",
    acknowledged: "bg-yellow-500",
    "in-progress": "bg-orange-500", 
    resolved: "bg-green-500"
  };

  const priorityColors = {
    low: "border-green-200",
    medium: "border-yellow-200",
    high: "border-orange-200",
    urgent: "border-red-200"
  };

  const statusIcons = {
    submitted: Clock,
    acknowledged: AlertTriangle,
    "in-progress": TrendingUp,
    resolved: CheckCircle2
  };

  const filteredReports = reports.filter(report => {
    const statusMatch = selectedStatus === "all" || report.status === selectedStatus;
    const deptMatch = selectedDepartment === "all" || report.department === selectedDepartment;
    return statusMatch && deptMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 flex items-center">
              <Shield className="mr-3 h-8 w-8 text-primary" />
              Admin Portal
            </h1>
            <p className="text-muted-foreground">Municipal staff dashboard for civic issue management</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{stats.totalReports}</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-1">{stats.pending}</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-500 mb-1">{stats.inProgress}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success mb-1">{stats.resolved}</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{stats.avgResolutionTime}</div>
              <div className="text-sm text-muted-foreground">Avg Resolution</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success mb-1">{stats.citizenSatisfaction}</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-fit lg:grid-cols-4">
            <TabsTrigger value="reports">All Reports</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="citizens">Citizens</TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search reports..." className="pl-10" />
              </div>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="submitted">Submitted</SelectItem>
                  <SelectItem value="acknowledged">Acknowledged</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Public Works">Public Works</SelectItem>
                  <SelectItem value="Sanitation">Sanitation</SelectItem>
                  <SelectItem value="Water Works">Water Works</SelectItem>
                  <SelectItem value="Electricity">Electricity</SelectItem>
                  <SelectItem value="Traffic">Traffic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
              {filteredReports.map((report) => {
                const StatusIcon = statusIcons[report.status] || Clock;
                return (
                  <Card key={report.id} className={`border-l-4 ${priorityColors[report.priority]}`}>
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center space-x-2 flex-wrap">
                            <Badge variant="outline" className="font-mono text-xs">
                              {report.id}
                            </Badge>
                            <Badge variant={report.status === "resolved" ? "default" : "secondary"}>
                              <StatusIcon className="mr-1 h-3 w-3" />
                              {report.status.replace("-", " ")}
                            </Badge>
                            <Badge variant="outline" className="capitalize">
                              {report.priority}
                            </Badge>
                            <Badge variant="secondary">
                              {report.department}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{report.title}</CardTitle>
                          <CardDescription>{report.description}</CardDescription>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Users className="mr-1 h-3 w-3" />
                              Citizen: {report.citizen}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-3 w-3" />
                              {report.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {report.submittedAt}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <span className="font-medium">Assigned to:</span> {report.assignedTo}
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">ETA:</span> {report.estimatedCompletion}
                            </div>
                          </div>
                        </div>
                        <img 
                          src={report.image} 
                          alt={report.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Update Status
                        </Button>
                        <Button size="sm">
                          Assign Team
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="departments">
            <div className="grid lg:grid-cols-2 gap-6">
              {departments.map((dept) => (
                <Card key={dept.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {dept.name}
                      <Badge variant="secondary">
                        {dept.pending + dept.inProgress + dept.resolved} total
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Pending</span>
                        <span className="font-medium text-blue-500">{dept.pending}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">In Progress</span>
                        <span className="font-medium text-orange-500">{dept.inProgress}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Resolved</span>
                        <span className="font-medium text-success">{dept.resolved}</span>
                      </div>
                      <div className="pt-2">
                        <Button className="w-full" variant="outline">
                          View Department Dashboard
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Resolution Trends
                  </CardTitle>
                  <CardDescription>
                    Monthly issue resolution statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization coming soon</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Issue Categories</CardTitle>
                  <CardDescription>
                    Distribution of reported issues by category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Pie chart coming soon</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Time Analytics</CardTitle>
                  <CardDescription>
                    Average response times by department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {departments.slice(0, 4).map((dept) => (
                      <div key={dept.name} className="flex justify-between items-center">
                        <span className="text-sm">{dept.name}</span>
                        <Badge variant="outline">
                          {Math.random() * 3 + 1 | 0}.{Math.random() * 9 | 0} days
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Citizen Satisfaction</CardTitle>
                  <CardDescription>
                    Feedback ratings from resolved issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-success">4.7/5</div>
                    <p className="text-muted-foreground">Average satisfaction score</p>
                    <div className="text-sm text-muted-foreground">
                      Based on 1,002 resolved issues
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="citizens">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="mr-2 h-5 w-5" />
                  Active Citizens
                </CardTitle>
                <CardDescription>
                  Top contributing citizens and CivicPoints leaderboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Rahul Sharma", "Priya Patel", "Amit Kumar", "Neha Singh", "Ravi Gupta"].map((citizen, index) => (
                    <div key={citizen} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{citizen}</div>
                          <div className="text-sm text-muted-foreground">{5 - index} reports this month</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-success">{1500 - index * 200} Points</div>
                        <Badge variant="outline">Gold Citizen</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;