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
import contact from "@/assets/contactus.jpg";

// ✅ Initialize EmailJS
emailjs.init("jOzViPvuhJ53R7H-t");

const QuotationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    propertyType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
          phone: "",
          address: "",
          propertyType: "",
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quotation" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Request a Solar Installation Quote
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and our solar experts will contact you shortly.
          </p>
        </div>

        {/* ✅ Two-column layout with equal height */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-auto lg:h-[400px] flex justify-center">
            <img
              src={contact}
              alt="Solar Consultation"
              className="rounded-2xl shadow-lg w-full h-full "
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex items-stretch">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between w-full bg-card p-8 rounded-2xl border border-border shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>

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

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="mt-4 bg-primary hover:bg-primary/90 "
                size="lg"
              >
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationForm;
