import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Building,
  Sun,
  IndianRupee,
  ShieldCheck,
  TrendingUp,
  Ruler,
} from "lucide-react";

const SolarCalculator = () => {
  const [bill, setBill] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    if (!bill || !type) return;

    const electricityRate = 10;
    const unitsPerKW = 120;
    const systemKW = Math.round((Number(bill) / electricityRate) / unitsPerKW * 10) / 10;

    const spaceRequired = systemKW * 100;
    const annualEnergy = systemKW * unitsPerKW * 12;
    const annualSaving = annualEnergy * electricityRate;

    const basePricePerKW = type === "on-grid" ? 55000 : 65000;
    const basePrice = systemKW * basePricePerKW;

    let subsidy = 0;
    if (systemKW >= 1 && systemKW < 2) subsidy = 18000;
    else if (systemKW >= 2 && systemKW < 3) subsidy = 36000;
    else if (systemKW >= 3) subsidy = 78000;

    setResult({ systemKW, spaceRequired, annualEnergy, annualSaving, basePrice, subsidy });
  };

  return (
    <section className="py-20 bg-background">
      <h2 className="text-center text-4xl font-bold mb-12">Solar Calculator</h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl px-4">

        {/* LEFT SIDE INPUTS */}
        <Card className="p-6">
          <div className="space-y-5">
            <div>
              <Label>Select Solar Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="--- Select Solar Type ---" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="on-grid">On-Grid</SelectItem>
                  <SelectItem value="off-grid">Off-Grid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Enter Electricity Bill (₹)</Label>
              <Input
                type="number"
                className="mt-1"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="e.g. 2500"
              />
            </div>

            <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700">
              Submit
            </Button>
          </div>
        </Card>

        {/* RIGHT SIDE OUTPUT BOXES */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">

          {[{
            title: "System Size",
            value: result?.systemKW ? result.systemKW + " kW" : "0 kW",
            icon: Building,
          },
          {
            title: "Space Required",
            value: result?.spaceRequired ? result.spaceRequired + " sqft" : "0 sqft",
            icon: Ruler,
          },
          {
            title: "Annual Energy",
            value: result?.annualEnergy ? result.annualEnergy + " units" : "0 units",
            icon: Sun,
          },
          {
            title: "Annual Saving",
            value: result?.annualSaving ? "₹ " + result.annualSaving.toLocaleString() : "₹ 0",
            icon: TrendingUp,
          },
          {
            title: "Price (Excluding Subsidy)",
            value: result?.basePrice ? "₹ " + result.basePrice.toLocaleString() : "₹ 0",
            icon: IndianRupee,
          },
          {
            title: "Govt Subsidy",
            value: result?.subsidy ? "₹ " + result.subsidy.toLocaleString() : "₹ 0",
            icon: ShieldCheck,
          }].map((item, idx) => (
            <Card key={idx} className="p-6 text-center">
              <item.icon size={36} className="mx-auto mb-2 text-green-600" />
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-2xl font-bold mt-1">{item.value}</p>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SolarCalculator;
