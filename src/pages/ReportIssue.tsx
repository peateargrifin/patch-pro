import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MapPin, 
  Upload, 
  Mic, 
  MicOff,
  Send,
  CheckCircle2,
  AlertTriangle,
  Navigation
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const ReportIssue = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const categories = [
    { value: "roads", label: "Roads & Infrastructure", icon: "🛣️" },
    { value: "lighting", label: "Street Lighting", icon: "💡" },
    { value: "sanitation", label: "Waste & Sanitation", icon: "🗑️" },
    { value: "water", label: "Water Supply", icon: "💧" },
    { value: "electricity", label: "Electricity", icon: "⚡" },
    { value: "traffic", label: "Traffic & Signals", icon: "🚦" },
    { value: "parks", label: "Parks & Recreation", icon: "🌳" },
    { value: "other", label: "Other", icon: "📋" }
  ];

  const priorityLevels = [
    { value: "low", label: "Low", color: "bg-green-500" },
    { value: "medium", label: "Medium", color: "bg-yellow-500" },
    { value: "high", label: "High", color: "bg-orange-500" },
    { value: "urgent", label: "Urgent", color: "bg-red-500" }
  ];

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
          toast({
            title: "Location captured",
            description: "GPS coordinates have been added to your report",
          });
        },
        (error) => {
          toast({
            title: "Location error",
            description: "Unable to get your location. Please enter manually.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Location not supported",
        description: "Geolocation is not supported by this browser",
        variant: "destructive",
      });
    }
  };

  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Recording started",
        description: "Speak now to add voice notes to your report",
      });
    } else {
      toast({
        title: "Recording stopped",
        description: "Voice note has been added to your report",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    
    toast({
      title: "Report submitted successfully!",
      description: "Your civic issue has been reported. Report ID: RPT-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Report Civic Issue</h1>
          <p className="text-muted-foreground">Help make your community better by reporting issues</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              Submit New Report
            </CardTitle>
            <CardDescription>
              Provide details about the civic issue you've encountered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Issue Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Issue Category *</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <div className="flex items-center space-x-2">
                          <span>{category.icon}</span>
                          <span>{category.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Issue Title *</Label>
                <Input
                  id="title"
                  placeholder="Brief description of the issue"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about the issue..."
                  rows={4}
                  required
                />
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleVoiceRecording}
                    className={isRecording ? "bg-red-50 border-red-200" : ""}
                  >
                    {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    {isRecording ? "Stop Recording" : "Add Voice Note"}
                  </Button>
                  {isRecording && (
                    <Badge variant="destructive" className="animate-pulse">
                      Recording...
                    </Badge>
                  )}
                </div>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photo">Upload Photo *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <Button type="button" variant="outline">
                    <Camera className="mr-2 h-4 w-4" />
                    Choose Photo
                  </Button>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <div className="flex space-x-2">
                  <Input
                    id="location"
                    placeholder="Enter location or use GPS"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                  <Button type="button" variant="outline" onClick={handleGetLocation}>
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Click the location button to use GPS or enter manually
                </p>
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level *</Label>
                <Select value={priority} onValueChange={setPriority} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority level" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorityLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                          <span>{level.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Anonymous Reporting */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="anonymous" className="rounded" />
                <Label htmlFor="anonymous" className="text-sm">
                  Submit anonymously (your identity will not be shared)
                </Label>
              </div>

              {/* CivicPoints Info */}
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium text-success">Earn CivicPoints</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  You'll earn 50 points for submitting this report, and bonus points when it's resolved!
                </p>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
                variant="hero"
              >
                {isSubmitting ? (
                  "Submitting Report..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Report
                  </>
                )}
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  By submitting this report, you agree to our terms of service and privacy policy.
                  Your report will be reviewed and assigned to the appropriate department.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
              Reporting Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Take clear photos that show the issue clearly</li>
              <li>• Provide specific location details for faster resolution</li>
              <li>• Be descriptive but concise in your description</li>
              <li>• Select appropriate priority level based on urgency</li>
              <li>• Check if the issue has already been reported to avoid duplicates</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportIssue;