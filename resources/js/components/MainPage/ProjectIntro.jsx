import React from "react";

const ProjectIntro = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#e7f5f1] to-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center md:text-left">

        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#18885b] mb-3 tracking-wide leading-snug text-center md:text-left">
          RRITAM Peace Valley, Bahalgarh, Sector 80 – Sonipat
        </h2>

        {/* Content */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
          <span className="font-semibold text-[#18885b]">Rritam Peace Valley</span> 
          offers the perfect blend of urban convenience and rural serenity. Located close to Delhi 
          with excellent connectivity via multiple national highways, this township sits at the 
          heart of the rapidly developing Bahalgarh–Sonipat belt. With direct access to NH-44, the 
          project lies in a major growth corridor of the expanding Delhi NCR region.
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
          Sonipat is emerging as a real estate hotspot with strong infrastructure upgrades and 
          planned development. Rritam Peace Valley features 
          <span className="font-semibold"> 95 meticulously planned freehold plots</span>, 
          ranging from <span className="font-semibold">59.731 to 149.996 SQM</span> 
          (approx. 71.438 to 179.395 Sq. Yds.).
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
          Fully approved under 
          <span className="font-semibold text-[#18885b]"> Deen Dayal Jan Awas Yojna (DDJAY)</span> 
          by the Government of Haryana and sanctioned by the Town & Country Planning (TCP) department, 
          this integrated township ensures reliable infrastructure. Modern amenities include gated 
          entry, STP, water tank, sewer lines, rainwater harvesting pit, LED streetlights, landscaped 
          parks, children’s play areas, and an efficient water supply system — creating a peaceful, 
          pollution-free living environment.
        </p>

        {/* Accent Line */}
        <div className="w-20 h-1 bg-[#18885b] mt-6 mx-auto md:mx-0 rounded-full"></div>
      </div>
    </section>
  );
};

export default ProjectIntro;
