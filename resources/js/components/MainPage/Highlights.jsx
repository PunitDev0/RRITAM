import React from 'react';

const Highlights = () => {
  const highlights = [
    "Spread Across 6.5 Acres",
    "Multi-Purpose Hall For community gatherings & events",
    "24m & 9m Wide Roads Network and Pathways",
    "Secure Gated Development Peace of mind with controlled access",
    "Water Supply & Drainage System",
    "Dedicated Commercial Area For everyday essentials",
    "Lush Green Parks Serene spaces to unwind, walk, and relax",
    "Safe and joyful spaces for children to explore and play",
    "Illuminated avenues for a refined living experience",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
        AARANYA GREENS HIGHLIGHTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white p-2 sm:p-3 border-l-4 border-[#4285f4] rounded-sm"
          >
            <p className="text-sm sm:text-base text-gray-700 leading-snug">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
