import React, { useState, useMemo } from 'react';
import { Calculator, Zap, IndianRupee, Sun, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/solarData';

interface SolarCalculatorProps {
  onCalculateQuote: (data: {
    monthlyBill: number;
    propertyType: string;
    location: string;
    systemSize: number;
    annualSavings: number;
  }) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onCalculateQuote }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial' | 'Agricultural'>('Residential');
  const [location, setLocation] = useState<string>('Ravulapalem');

  const locationsList = [
    'Ravulapalem',
    'Rajahmundry',
    'Kakinada',
    'Amalapuram',
    'Mandapeta',
    'Tanuku',
    'Razole',
    'Ramachandrapuram',
    'East Godavari (Other)',
    'Konaseema (Other)'
  ];

  // Calculation Engine based on Andhra Pradesh solar irradiance and APEPDCL slabs
  const results = useMemo(() => {
    const tariffPerUnit = propertyType === 'Residential' ? 7.8 : propertyType === 'Commercial' ? 10.5 : 6.5;
    
    // Approximate monthly units consumed
    const estimatedMonthlyUnits = Math.round(monthlyBill / tariffPerUnit);
    
    // In Andhra Pradesh, 1 kW solar generates ~120 units/month (approx 4 kWh/kW/day)
    let calculatedKw = Number((estimatedMonthlyUnits / 120).toFixed(1));
    if (calculatedKw < 1) calculatedKw = 1;
    if (calculatedKw > 100) calculatedKw = 100;

    // Standard practical system sizes
    const systemSizeKw = Math.max(1, Math.round(calculatedKw));

    // Monthly units generated
    const monthlyUnitsGenerated = systemSizeKw * 120;

    // Monthly & Annual savings (considering conservative 85% self-consumption & net-metering factor)
    const estimatedMonthlySavings = Math.min(monthlyBill, Math.round(monthlyUnitsGenerated * tariffPerUnit * 0.9));
    const estimatedAnnualSavings = estimatedMonthlySavings * 12;

    // Estimated benchmark investment in AP (~₹60,000/kW)
    const approxTotalCost = systemSizeKw * 62000;

    // Central Government PM Surya Ghar Muft Bijli Yojana Subsidy (Residential Only)
    let subsidyEstimate = 0;
    if (propertyType === 'Residential') {
      if (systemSizeKw === 1) {
        subsidyEstimate = 30000;
      } else if (systemSizeKw === 2) {
        subsidyEstimate = 60000;
      } else if (systemSizeKw >= 3) {
        subsidyEstimate = 78000; // Cap under PM Surya Ghar
      }
    }

    const estimatedNetCost = Math.max(0, approxTotalCost - subsidyEstimate);

    // Payback period in years
    const estimatedPaybackYears = Number((estimatedNetCost / (estimatedAnnualSavings || 1)).toFixed(1));

    // Roof space required (~85 sq.ft per kW)
    const roofSpaceSqFt = systemSizeKw * 85;

    // CO2 offset: ~0.82 kg CO2 per kWh generated
    const co2SavedTonsYear = Number(((monthlyUnitsGenerated * 12 * 0.82) / 1000).toFixed(1));

    return {
      systemSizeKw,
      monthlyUnitsGenerated,
      estimatedMonthlySavings,
      estimatedAnnualSavings,
      approxTotalCost,
      subsidyEstimate,
      estimatedNetCost,
      estimatedPaybackYears: Math.min(estimatedPaybackYears, 8),
      roofSpaceSqFt,
      co2SavedTonsYear
    };
  }, [monthlyBill, propertyType]);

  const handleApplyToQuote = () => {
    onCalculateQuote({
      monthlyBill,
      propertyType,
      location,
      systemSize: results.systemSizeKw,
      annualSavings: results.estimatedAnnualSavings
    });
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Estimate Your ROI & Government Subsidy
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Solar Savings Calculator
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Enter your typical monthly electricity bill and property details to calculate recommended system size, estimated annual savings, PM Surya Ghar subsidy eligibility, and payback timeline.
          </p>
        </div>

        {/* Calculator Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-600" />
                <span>Your Property Details</span>
              </h3>

              {/* Input 1: Property Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Property Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Residential', 'Commercial', 'Agricultural'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      id={`calc-prop-${type.toLowerCase()}`}
                      onClick={() => setPropertyType(type)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        propertyType === type
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 2: Location */}
              <div className="mb-6">
                <label htmlFor="calc-location-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Installation Town / Location
                </label>
                <select
                  id="calc-location-select"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {locationsList.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}, Andhra Pradesh
                    </option>
                  ))}
                </select>
              </div>

              {/* Input 3: Monthly Bill Slider & Input */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-bill-slider" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Average Monthly Electricity Bill
                  </label>
                  <span className="text-base font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="calc-bill-slider"
                  type="range"
                  min="800"
                  max="35000"
                  step="200"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹800/mo</span>
                  <span>₹15,000/mo</span>
                  <span>₹35,000+/mo</span>
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Estimates derived from average Andhra Pradesh solar radiation (~4.5 to 5.0 kWh/m²/day) and applicable APEPDCL slab charges.
              </span>
            </div>
          </div>

          {/* Results Column (Right) */}
          <div className="lg:col-span-7 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
                    Recommended System Capacity
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 flex items-center gap-1 mt-0.5">
                    <span>{results.systemSizeKw} kW</span>
                    <span className="text-sm font-normal text-slate-400">(~{results.monthlyUnitsGenerated} units/month)</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
                    Payback Timeline
                  </span>
                  <span className="text-2xl font-bold text-emerald-400">
                    ~{results.estimatedPaybackYears} Years
                  </span>
                </div>
              </div>

              {/* 4 Metric Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                {/* Monthly Savings */}
                <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block font-medium">Estimated Monthly Savings</span>
                  <div className="text-2xl font-extrabold text-white mt-1 flex items-center">
                    <IndianRupee className="w-5 h-5 text-emerald-400" />
                    <span>{results.estimatedMonthlySavings.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block font-medium">Estimated Annual Savings</span>
                  <div className="text-2xl font-extrabold text-emerald-400 mt-1 flex items-center">
                    <IndianRupee className="w-5 h-5" />
                    <span>{results.estimatedAnnualSavings.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-400 font-normal ml-1">/ year</span>
                  </div>
                </div>

                {/* PM Surya Ghar Subsidy (If Residential) */}
                <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block font-medium">
                    {propertyType === 'Residential' ? 'PM Surya Ghar Central Subsidy' : 'Commercial Tax Benefit'}
                  </span>
                  <div className="text-xl font-bold text-amber-400 mt-1">
                    {propertyType === 'Residential' ? (
                      results.subsidyEstimate > 0 ? (
                        <span>₹{results.subsidyEstimate.toLocaleString('en-IN')} Direct Subsidy</span>
                      ) : (
                        <span className="text-sm text-slate-400">Inquire for subsidy rules</span>
                      )
                    ) : (
                      <span>40% Accelerated Depr.</span>
                    )}
                  </div>
                </div>

                {/* Roof Space Needed */}
                <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block font-medium">Shadow-Free Roof Needed</span>
                  <div className="text-xl font-bold text-white mt-1 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>~{results.roofSpaceSqFt} sq. ft.</span>
                  </div>
                </div>

              </div>

              {/* Environmental stat */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-3 mb-6">
                <span>Green Impact: Offsets ~{results.co2SavedTonsYear} tons of CO₂ per year</span>
                <span className="text-emerald-400 font-semibold">Clean Energy</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div>
              <button
                type="button"
                id="btn-apply-calc-quote"
                onClick={handleApplyToQuote}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-all"
              >
                <span>Lock In Free Quote for this {results.systemSizeKw}kW System</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                Disclaimer: All values shown are estimates based on standard regional conditions and do not constitute guaranteed savings. An on-site technical inspection is required for final quotations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
