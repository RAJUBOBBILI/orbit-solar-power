export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  idealFor: string;
  icon: string;
  image: string;
  capacityRange: string;
  warranty: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: 'Residential' | 'Commercial' | 'Industrial' | 'Agricultural';
  capacity: string;
  location: string;
  description: string;
  image: string;
  savingsHighlights?: string;
  completionYear?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Costs & Subsidies' | 'Installation & Tech' | 'Net Metering & Discom' | 'Maintenance';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  propertyType: string;
  systemSize: string;
  reviewText: string;
  rating: number;
  date: string;
  isVerifiedPlaceholder?: boolean;
}

export interface SolarGuideItem {
  id: string;
  title: string;
  readTime: string;
  category: string;
  excerpt: string;
  keyPoints: string[];
}

export interface CalculatorState {
  monthlyBill: number;
  propertyType: 'Residential' | 'Commercial' | 'Agricultural';
  selectedLocation: string;
}

export interface CalculatorOutput {
  systemSizeKw: number;
  monthlyUnitsGenerated: number;
  estimatedMonthlySavings: number;
  estimatedAnnualSavings: number;
  estimatedPaybackYears: number;
  roofSpaceSqFt: number;
  co2SavedTonsYear: number;
  approxTotalCost: number;
  subsidyEstimate: number;
  estimatedNetCost: number;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  locationTown: string;
  propertyType: string;
  monthlyBill: string;
  interestedService: string;
  message: string;
}
