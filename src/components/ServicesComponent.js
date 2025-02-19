// Services.js
import { useState } from "react";

function ExpandableSection({ title, details, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <button
        className="w-full text-left font-semibold text-lg py-2 border-b border-gray-300 focus:outline-none"
        onClick={onClick}
      >
        {title}
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="mt-2 pl-4 text-gray-700">
          {details.map((detail, i) => (
            <li key={i} className="mb-2 list-disc">{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {

  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "🌍 Urban Development & Infrastructure Planning",
      details: [
        "Master planning for sustainable, tech-driven cities.",
        "Land-use strategy and real estate development consulting.",
        "Zoning and policy advisory to ensure regulatory compliance.",
      ],
    },
    {
      title: "⚡ Renewable Energy & Sustainability Consulting",
      details: [
        "Solar and battery storage project planning.",
        "Energy-efficient building design and green infrastructure.",
        "Advisory on renewable energy incentives and financing.",
      ],
    },
    {
      title: "🏙️ Smart Cities & Transportation Systems",
      details: [
        "Urban mobility solutions (EV charging, smart transit, micromobility).",
        "Implementing smart city technologies (IoT, AI-driven infrastructure).",
        "Traffic flow optimization and smart logistics consulting.",
      ],
    },
    {
      title: "💻 Software & Data-Driven Solutions",
      details: [
        "GIS mapping for real estate & infrastructure analysis.",
        "Software tools for urban planning and energy projects.",
        "Data visualization & automation for city development insights.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Services</h2>
      {services.map((service, index) => (
        <ExpandableSection
          key={index}
          title={service.title}
          details={service.details}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}