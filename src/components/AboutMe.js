import { useState } from "react";

export default function AboutMe() {
  const [openIndex, setOpenIndex] = useState(null);

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

  const aboutMeSections = [
    {
      title: "📌 Work Experience in Real Estate & Energy",
      details: [
        "Site acquisition, feasibility studies, and zoning expertise.",
        "Managed renewable energy projects (solar, battery storage).",
        "Developed real estate projects with an emphasis on sustainability.",
      ],
    },
    {
      title: "🏙️ Passion for Urban Development & Smart Cities",
      details: [
        "Strong interest in urban planning, infrastructure tech, and mobility.",
        "Researching ways to integrate technology into city planning.",
        "Exploring the future of cities through data, design, and policy.",
      ],
    },
    {
      title: "🚀 Entrepreneurial Goals",
      details: [
        "Building a consulting firm focused on city design & innovation.",
        "Developing a platform to share insights, ideas, and services.",
        "Providing expertise in real estate, energy, and smart city tech.",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">About Me</h2>
      {aboutMeSections.map((section, index) => (
        <ExpandableSection
          key={index}
          title={section.title}
          details={section.details}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
