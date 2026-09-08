import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, ShieldCheck, Sun } from 'lucide-react';
import { BUSINESS_INFO, SOLAR_SERVICES } from '../data/solarData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
  presetData?: {
    monthlyBill?: number;
    propertyType?: string;
    location?: string;
    systemSize?: number;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  presetService,
  presetData
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState(presetData?.location || 'Ravulapalem');
  const [propertyType, setPropertyType] = useState(presetData?.propertyType || 'Residential');
  const [service, setService] = useState(presetService || 'Residential On-Grid Rooftop Solar');
  const [monthlyBill, setMonthlyBill] = useState(
    presetData?.monthlyBill ? `₹${presetData.monthlyBill.toLocaleString('en-IN')}` : '₹3,000 - ₹5,000'
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetService) setService(presetService);
    if (presetData?.propertyType) setPropertyType(presetData.propertyType);
    if (presetData?.location) setLocation(presetData.location);
    if (presetData?.monthlyBill) setMonthlyBill(`₹${presetData.monthlyBill.toLocaleString('en-IN')}`);
  }, [presetService, presetData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Orbit Power Solutions,%0A%0AI would like to get a Free Solar Quote:%0A- Name: ${name || 'Customer'}%0A- Phone: ${phone || 'Not provided'}%0A- Town/Location: ${location}%0A- Property: ${propertyType}%0A- Monthly Bill: ${monthlyBill}%0A- Service: ${service}%0A${presetData?.systemSize ? `- Calculated Size: ${presetData.systemSize} kW` : ''}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-quote-title" className="text-base font-bold text-white">
                Get a Free Solar Quote
              </h3>
              <p className="text-xs text-slate-300">
                Orbit Power Solutions • Andhra Pradesh
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Received!</h4>
              <p className="text-sm text-slate-600">
                Thank you, <strong className="text-slate-800">{name}</strong>. An Orbit Power Solutions engineer will contact you shortly on <strong>{phone}</strong> with a detailed breakdown.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send direct copy to WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-medium text-xs hover:bg-slate-50"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {presetData?.systemSize && (
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                  <span>Selected System Size:</span>
                  <span className="font-bold text-sm text-amber-700">{presetData.systemSize} kW Solar System</span>
                </div>
              )}

              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. S. Rama Rao"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9010888099"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Town in AP *
                  </label>
                  <input
                    id="modal-location"
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Ravulapalem"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="modal-property" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <select
                    id="modal-property"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Agricultural">Agricultural</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Solar Solution
                </label>
                <select
                  id="modal-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {SOLAR_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Free Quote Request</span>
                  <Send className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send direct enquiry on WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free Consultation • No Obligation</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
