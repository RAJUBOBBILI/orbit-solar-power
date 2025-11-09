import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import contact from "@/assets/contactus.jpg";

const QuotationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    propertyType: "",
    monthlyBill: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.monthlyBill) {
      toast({
        title: "Monthly Bill Required ❗",
        description: "Please select your average monthly electricity bill.",
        variant: "destructive",
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "f1c624e7-c6a3-438e-ae3d-4c00a8a89d37"); 
    formDataToSend.append("Name", formData.name);
    formDataToSend.append("Phone", formData.phone);
    formDataToSend.append("Pin Code", formData.address);
    formDataToSend.append("Property Type", formData.propertyType);
    formDataToSend.append("Monthly Bill", formData.monthlyBill);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "Quotation Sent ✅",
        description: "Our team will contact you soon.",
      });

      window.open(
        `https://wa.me/91XXXXXXXXXX?text=Thank%20you%20for%20choosing%20Orbit%20Enterprises!%20We%20received%20your%20quotation%20request%20and%20our%20team%20will%20contact%20you%20shortly.`,
        "_blank"
      );

      setFormData({
        name: "",
        phone: "",
        address: "",
        propertyType: "",
        monthlyBill: "",
      });
    } else {
      toast({
        title: "Error ❌",
        description: "Unable to send request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quotation" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Request a Solar Installation Quote
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and our solar experts will contact you shortly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2 h-auto lg:h-[500px] flex justify-center">
            <img src={contact} alt="Solar Consultation" className="rounded-2xl shadow-lg w-full h-full" />
          </div>

          <div className="w-full lg:w-1/2 flex items-stretch">
            <form onSubmit={handleSubmit} className="flex flex-col justify-between w-full bg-card p-8 rounded-2xl border border-border shadow-sm">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label>WhatsApp Number</Label>
                  <Input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label>Type of Property</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => handleChange("propertyType", value)}>
                    <SelectTrigger><SelectValue placeholder="Select property type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="agricultural">Agricultural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Pin Code</Label>
                  <Input value={formData.address} onChange={(e) => handleChange("address", e.target.value)} required />
                </div>
              </div>

              <div className="mt-6">
                <Label className="block mb-2 font-medium">
                  What is your average monthly bill? <span className="text-red-500">*</span>
                </Label>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Less than ₹1500",
                    "₹1500 - ₹2500",
                    "₹2500 - ₹4000",
                    "₹4000 - ₹8000",
                    "More than ₹8000",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange("monthlyBill", option)}
                      className={`px-4 py-2 rounded-md border transition ${
                        formData.monthlyBill === option
                          ? "bg-primary text-white border-primary"
                          : "bg-background border-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="mt-6 bg-primary hover:bg-primary/90" size="lg">
                Submit Details
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationForm;
