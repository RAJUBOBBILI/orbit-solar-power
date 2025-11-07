import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons: React.FC = () => {
  const phoneNumber: string = "+919553479199"; 
  const whatsappNumber: string = "+919553479199";

  return (
    <div className="fixed right-5 bottom-10 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
