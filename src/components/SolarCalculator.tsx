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
  Ruler,
  ShieldCheck,
} from "lucide-react";

const SolarCalculator = () => {
  const [bill, setBill] = useState("");
  const [type, setType] = useState("");
  const [consumerType, setConsumerType] = useState("domestic");
  const [result, setResult] = useState<any>(null);

  // Electricity rate based on consumer type
  const getElectricityRate = (consumerType: string) => {
    return consumerType === "commercial" ? 8 : 6.5;
  };

  // Round to nearest 0.5 kW (1.3 → 1.5, 1.7 → 2)
  const roundToHalfKW = (value: number) => {
    return Math.round(value * 2) / 2;
  };

  // NEW Subsidy logic for domestic
  const getDomesticSubsidy = (kw: number) => {
    if (kw <= 1) return 30000;
    if (kw <= 1.5) return 45000;
    if (kw <= 2) return 60000;
    return 78000; // For 3kW and above
  };

  const calculate = () => {
    if (!bill || !type) return;

    const electricityRate = getElectricityRate(consumerType);

    const dailyUnitsPerKW = 4.2;
    const monthlyUnitsPerKW = dailyUnitsPerKW * 30;

    const monthlyUnitsConsumed = Number(bill) / electricityRate;

    let systemKW = monthlyUnitsConsumed / monthlyUnitsPerKW;

    // APPLY NEW ROUNDING LOGIC
    systemKW = roundToHalfKW(systemKW);

    const spaceRequired = systemKW * 100;
    const annualEnergyProduction = systemKW * dailyUnitsPerKW * 365;
    const annualSaving = annualEnergyProduction * electricityRate;

    const pricePerKW =
      type === "on-grid" ? 42000 : 70000;
    const basePrice = systemKW * pricePerKW;

    // SUBSIDY LOGIC
    let subsidy = 0;
    if (consumerType === "domestic") {
      subsidy = getDomesticSubsidy(systemKW);
    }

    const netMeteringBenefit =
      type === "on-grid" ? annualSaving * 0.15 : 0;

    const netCost = basePrice - subsidy;
    const paybackPeriod =
      netCost / (annualSaving + netMeteringBenefit);

    setResult({
      systemKW,
      spaceRequired,
      annualEnergy: Math.round(annualEnergyProduction),
      annualSaving: Math.round(annualSaving),
      basePrice: Math.round(basePrice),
      subsidy,
      netMeteringBenefit: Math.round(netMeteringBenefit),
      netCost: Math.round(netCost),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    });
  };

  return (
    <section className="py-20 bg-background">
      <h2 className="text-center text-4xl font-bold mb-12">
        Solar Calculator
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl px-4">

        {/* INPUTS */}
        <Card className="p-6">
          <div className="space-y-5">
            {/* Consumer Type */}
            <div>
              <Label>Consumer Type</Label>
              <Select
                value={consumerType}
                onValueChange={(val) => {
                  setConsumerType(val);
                  setType(""); // reset solar type
                }}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Consumer Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="domestic">Domestic</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Solar Type */}
            <div>
              <Label>Select Solar Type</Label>
              <Select
                value={type}
                onValueChange={setType}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="--- Select Solar Type ---" />
                </SelectTrigger>
                <SelectContent>
                  {/* DOMESTIC – ONLY ONGRID */}
                  {consumerType === "domestic" && (
                    <SelectItem value="on-grid">On-Grid</SelectItem>
                  )}

                  {/* COMMERCIAL – BOTH OPTIONS */}
                  {consumerType === "commercial" && (
                    <>
                      <SelectItem value="on-grid">On-Grid</SelectItem>
                      <SelectItem value="off-grid">Off-Grid</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Monthly Bill */}
            <div>
              <Label>Monthly Electricity Bill (₹)</Label>
              <Input
                type="number"
                className="mt-1"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="e.g. 5000"
              />
            </div>

            <Button
              onClick={calculate}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Calculate Savings
            </Button>
          </div>
        </Card>

        {/* OUTPUT CARDS */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">

          {[{
            title: "Recommended System Size",
            value: result?.systemKW ? result.systemKW + " kW" : "0 kW",
            icon: Building,
          },
          {
            title: "Roof Space Required",
            value: result?.spaceRequired ? result.spaceRequired + " sqft" : "0 sqft",
            icon: Ruler,
          },
          {
            title: "Eligible Subsidy",
            value: result?.subsidy ? "₹ " + result.subsidy.toLocaleString() : "₹ 0",
            icon: ShieldCheck,
          },
          {
            title: "Annual Savings",
            value: result?.annualSaving ? "₹ " + result.annualSaving.toLocaleString() : "₹ 0",
            icon: Building,  // you can change icon if you want (e.g., TrendingUp, Zap)
          }
          ].map((item, idx) => (
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
