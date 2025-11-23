import React from "react";

const ApprovedBanks = () => {
  const banks = [
    {
      name: "HDFC Bank",
      logo: "/images/union-bank.png", // ✅ replace with your actual path
    },
    {
      name: "ICICI Bank",
      logo: "/images/icicibank.png", // ✅ replace with your actual path
    },

  ];

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20 text-center">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-8">
        The Project has been Approved By
      </h2>

      {/* Banks Logos */}
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="group transition-transform duration-300 hover:scale-110"
          >
            <img
              src={bank.logo}
              alt={bank.name}
              className="w-28 md:w-36 h-auto object-contain mx-auto drop-shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="text-sm md:text-base text-gray-600 mt-8">
        Plot owners can avail loans from these banks for financing purposes.
      </p>
    </section>
  );
};

export default ApprovedBanks;
