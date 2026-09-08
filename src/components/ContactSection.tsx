import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SOLAR_SERVICES } from '../data/solarData';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialBill?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialBill }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    locationTown: 'Ravulapalem',
    propertyType: 'Residential',
    monthlyBill: initialBill || '₹3,000 - ₹5,000',
    interestedService: initialService || 'Residential On-Grid Rooftop Solar',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Orbit Power Solutions,%0A%0AI would like to request a Solar Quotation:%0A- Name: ${formData.fullName || 'Customer'}%0A- Phone: ${formData.phoneNumber || 'Not provided'}%0A- Location: ${formData.locationTown}%0A- Property: ${formData.propertyType}%0A- Monthly Bill: ${formData.monthlyBill}%0A- Service: ${formData.interestedService}%0A${formData.message ? `- Note: ${formData.message}` : ''}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Orbit Power Solutions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Get an honest site inspection, customized engineering design, and clear solar subsidy breakdown for your property in Andhra Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Map (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Official Business Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Office Location</span>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {BUSINESS_INFO.address.fullFormatted}
                  </p>
                  <span className="text-xs text-slate-500">
                    Primary Service Area: East Godavari, Kakinada, Rajahmundry, Konaseema
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Direct Phone</span>
                  <div className="mt-0.5 space-y-0.5">
                    <a
                      href={`tel:${BUSINESS_INFO.phone1Raw}`}
                      className="text-sm font-semibold text-slate-900 hover:text-amber-600 block transition-colors"
                    >
                      {BUSINESS_INFO.phone1} (Primary)
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phone2Raw}`}
                      className="text-sm font-semibold text-slate-900 hover:text-amber-600 block transition-colors"
                    >
                      {BUSINESS_INFO.phone2} (Support)
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">WhatsApp Support</span>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 block mt-0.5"
                  >
                    Chat on WhatsApp ({BUSINESS_INFO.whatsapp})
                  </a>
                  <span className="text-xs text-slate-500">Quick response within business hours</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Email Inquiries</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-amber-600 block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Business Hours</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 mt-0.5">
                    {BUSINESS_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps Location Preview / Navigation */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 shadow-sm">
              <div className="p-3 bg-slate-900 text-white text-xs font-semibold flex items-center justify-between">
                <span>Location: Ravulapalem, Andhra Pradesh</span>
                <a
                  href="https://maps.google.com/?q=Ravulapalem,East+Godavari,Andhra+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
              <iframe
                title="Orbit Power Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61081.99617303028!2d81.81530962772591!3d16.75112104523963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a379435b0d00f6f%3A0x6ec0c51c89be6f25!2sRavulapalem%2C%20Andhra%20Pradesh%20533238!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Quick Quotation Form (Right 7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Request a Free Solar Site Survey & Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in the details below. Our solar engineer will review your consumption and connect with an initial estimate.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white p-8 rounded-xl border border-emerald-200 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Thank You, {formData.fullName}!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your solar enquiry has been received by Orbit Power Solutions. Our engineering team will review your details and contact you at <span className="font-semibold text-slate-800">{formData.phoneNumber}</span>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send details directly on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    Submit another query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. S. Rama Rao"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. 9010888099"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Location */}
                  <div>
                    <label htmlFor="contact-location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Town / Location in AP *
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      required
                      value={formData.locationTown}
                      onChange={(e) => setFormData({ ...formData, locationTown: e.target.value })}
                      placeholder="e.g. Ravulapalem, Rajahmundry, Kakinada"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Property Type */}
                  <div>
                    <label htmlFor="contact-property-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Property Category
                    </label>
                    <select
                      id="contact-property-type"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Residential">Residential (Home / Villa / Apartment)</option>
                      <option value="Commercial">Commercial (Office / Shop / Clinic)</option>
                      <option value="Industrial">Industrial (Factory / Mill / Shed)</option>
                      <option value="Agricultural">Agricultural (Solar Water Pump)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Monthly Bill */}
                  <div>
                    <label htmlFor="contact-bill" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Approx Monthly Electricity Bill
                    </label>
                    <select
                      id="contact-bill"
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Under ₹1,500">Under ₹1,500 / month</option>
                      <option value="₹1,500 - ₹3,000">₹1,500 - ₹3,000 / month</option>
                      <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000 / month</option>
                      <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000 / month</option>
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 / month</option>
                      <option value="Above ₹25,000">Above ₹25,000 (Commercial/Industrial)</option>
                    </select>
                  </div>

                  {/* Interested Service */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Interested Solar Solution
                    </label>
                    <select
                      id="contact-service"
                      value={formData.interestedService}
                      onChange={(e) => setFormData({ ...formData, interestedService: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {SOLAR_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Specific Requirements or Questions (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Interested in 3 kW system with PM Surya Ghar subsidy for my terrace in Ravulapalem..."
                    className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full sm:w-auto px-7 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Free Quotation Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Direct via WhatsApp</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 pt-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your contact details are strictly kept private and used only to furnish your solar quote.</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
