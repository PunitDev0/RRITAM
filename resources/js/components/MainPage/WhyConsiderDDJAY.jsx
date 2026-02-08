import React from "react";
import { CheckCircle } from "lucide-react";

const points = [
  "Policy-based plotted development under the Haryana Government DDJAY framework.",
  "Designed for residential end-use with clear zoning and development norms.",
  "Regulated planning framework ensuring transparency and compliance.",
  "Suitable for long-term living and investment in affordable housing.",
];

export default function WhyConsiderDDJAY() {
  return (
    <div className="mt-16 px-4 md:px-6 lg:px-12 pb-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center font-sans text-gray-800 mb-8">
          Why Consider Plots Under DDJAY?
        </h2>

        <ul className="space-y-3 mb-10">
          {points.map((text, index) => (
            <li key={index} className="flex gap-3 items-start">
              <CheckCircle className="text-blue-600 w-5 h-5 mt-0.5 shrink-0" />
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-5">
          <p className="font-semibold text-blue-900 mb-2">Important Note</p>
          <p className="text-sm md:text-base text-blue-900/90 leading-relaxed">
            All project details, availability, and allotments are subject to approvals, policy norms, and authority permissions.
          </p>
        </div>
      </div>
    </div>
  );
}
