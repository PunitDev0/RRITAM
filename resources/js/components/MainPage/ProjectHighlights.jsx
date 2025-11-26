  import React from "react";

  const ProjectHighlights = () => {
    const highlights = [
      { label: "Plots Starting", value: "Price ₹1.19 Cr*" },
      { label: "Total No. of Plots", value: "30" },
      { label: "Payment Plan", value: "10:40:25:25" },
      {
        label: "HRERA-NO",
        value: "HRERA-PKL-SNP-741-2025 dated on 11-08-2025",
      },
    ];

    return (
      <section className="bg-[#d3eeeb]">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8 md:gap-0 border border-[#b4dfdb] rounded-2xl  overflow-hidden">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative group px-6 py-4 transition-all duration-300 hover:bg-[#c1e7e2] hover:shadow-md"
            >
              {/* Divider Line */}
              {index !== highlights.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-400/50"></div>
              )}

              <h3 className="text-sm font-semibold text-gray-800 tracking-wide">
                {item.label}
              </h3>
              <p className="text-base font-medium text-gray-700 mt-1 group-hover:text-[#18885b] transition-colors">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default ProjectHighlights;
