import React from "react";
import StaticPageLayout from "@/components/MainPage/StaticPageLayout";

export default function Terms() {
  const items = [
    "All information on this website is indicative and subject to change without notice.",
    "Project details, pricing, layouts, and availability are subject to policy guidelines and authority approvals.",
    "Images, maps, and plans are for representational purposes only.",
    "The operating company provides marketing and facilitation services only; it is not the approving or allotting authority.",
    "Final allotment and eligibility are governed by applicable rules and regulations.",
    "Any disputes are subject to the jurisdiction of competent courts in Haryana.",
  ];

  return (
    <StaticPageLayout>
      <section className="py-12 bg-white min-h-screen text-gray-800">
        <div className="container mx-auto px-6 lg:max-w-4xl text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Terms & Conditions
          </h1>

          <ol className="list-decimal pl-6 space-y-4 text-base leading-7 text-gray-700">
            {items.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ol>
        </div>
      </section>
    </StaticPageLayout>
  );
}
