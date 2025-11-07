import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// ✅ Initialize EmailJS with your public key (once)
emailjs.init("jOzViPvuhJ53R7H-t"); // Replace with your actual EmailJS public key

const QuotationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    message: "",
  });

  // ✅ Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your actual EmailJS IDs
    const serviceId = "service_24mmin7";
    const templateId = "template_ft4qvlq";

    emailjs
      .send(serviceId, templateId, formData)
      .then(() => {
        toast({
          title: "Quotation Sent ✅",
          description:
            "Your request has been sent successfully! Our solar team will contact you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          propertyType: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Error ❌",
          description: "Something went wrong while sending your request.",
          variant: "destructive",
        });
      });
  };

  // ✅ Handle input changes
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quotation" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request a Solar Installation Quote
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our solar experts will contact you
              shortly.
            </p>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-lg border border-border shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <Label htmlFor="propertyType">Type of Property</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => handleChange("propertyType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="agricultural">Agricultural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="123 Main Street, City, State"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your project..."
                className="min-h-32"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              Submit Quote Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuotationForm;
