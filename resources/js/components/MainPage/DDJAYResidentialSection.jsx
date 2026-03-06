import React from "react";
import { LayoutGrid, Home, TrendingUp, Rotate3D } from "lucide-react";

const focusCards = [
  {
    title: "Planned plotted layouts",
    desc: "Structured residential plots with clear boundaries and development norms as per DDJAY policy.",
    Icon: LayoutGrid,
  },
  {
    title: "Road & infrastructure connectivity",
    desc: "Well-connected roads, drainage, and essential civic infrastructure for a quality living experience.",
    Icon: Rotate3D,
  },
  {
    title: "Residential zoning as per policy",
    desc: "Land use and zoning aligned with Haryana Government DDJAY guidelines for residential end-use.",
    Icon: Home,
  },
  {
    title: "Long-term livability and value",
    desc: "Designed for sustainable living and investment potential in policy-backed plotted development.",
    Icon: TrendingUp,
  },
];

export default function DDJAYResidentialSection({ openEnquiryPopup }) {
  return (
    <div className="deendayal-yojna mt-16 px-4 md:px-6 lg:px-12 pb-12">
      <div className="container mx-auto">
        {/* Intro */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center font-sans pb-4 text-gray-800">
          Government of Haryana Housing Policy - DDJAY
        </h2>
        <p className="text-justify leading-relaxed text-gray-700 text-sm md:text-base max-w-4xl mx-auto mb-10">
          Deen Dayal Jan Awas Yojna (DDJAY) is a housing policy of the Haryana Government aimed at promoting affordable, well-connected plotted development. Under this policy, residential plotted colonies are developed with planned layouts, proper infrastructure, and regulatory clarity—offering a transparent framework for homebuyers and long-term value.
        </p>

        {/* The Project Focuses On */}
        <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-6">
          The Project Focuses On
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {focusCards.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 rounded-lg p-4 h-full flex flex-col hover:shadow-lg transition-shadow"
            >
              <item.Icon className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Blue CTA */}
        <div className="bg-blue-600 text-white rounded-xl p-6 md:p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">How We Help You</h3>
          <p className="text-sm md:text-base leading-relaxed mb-4 opacity-95">
            Project information, eligibility guidance, and enquiry support for DDJAY plotted developments. Reach out for site visits and detailed assistance.
          </p>
          {/* <button
            onClick={openEnquiryPopup}
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Get in Touch
          </button> */}
          <p className="text-white text-[10px] opacity-90 mt-3">
            <a href="/disclaimer" className="underline hover:text-blue-100">Refer Disclaimer</a>
          </p>
        </div>
      </div>
    </div>
  );
}
