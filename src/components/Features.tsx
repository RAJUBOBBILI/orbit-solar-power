import React from "react";

import solarPanelsImg from "@/assets/features/solarPanelsImg.jpg";
import installationImg from "@/assets/features/installationImg.jpg";
import qualityImg from "@/assets/features/qualityImg.jpg";
import savingsImg from "@/assets/features/savingsImg.jpg";

const features = [
  {
    image: solarPanelsImg,
    title: "Efficient Solar Panels",
    description:
      "Our advanced solar panels are designed for maximum energy output and long-term durability. Enjoy higher efficiency and lower electricity bills, backed by top-tier solar technology.",
  },
  {
    image: installationImg,
    title: "Professional Installation",
    description:
      "Our certified technicians ensure a smooth and safe installation process from start to finish. We handle every detail—design, setup, and inspection—so you can relax while we power your property.",
  },
  {
    image: qualityImg,
    title: "Quality Guarantee",
    description:
      "At Orbit Enterprises, we stand behind every system we install. Each project includes premium components, strict quality control, and long-term warranty support.",
  },
  {
    image: savingsImg,
    title: "Cost Savings",
    description:
      "Switching to solar energy saves you money from day one. Reduce your monthly electricity costs and gain energy independence for years to come.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">
          Why Choose Orbit Enterprises?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center pb-2 rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* ✅ Consistent Image Box */}
              <div className="mx-auto  mb-6 rounded-t-lg overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
