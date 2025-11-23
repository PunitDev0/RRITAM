import React from "react";

function AboutDDJAY() {
  return (
    <div className="deendayal-yojna mt-16 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center font-sans pb-4 text-gray-800">
          About Deen Dayal Jan Awas Yojna (DDJAY)
        </h2>

        {/* Content */}
        <div className="yojna-content text-justify leading-relaxed text-gray-700 text-sm md:text-base">
          <p className="mb-4">
            <b>Deen Dayal Jan Awas Yojna (DDJAY)</b> is an affordable housing
            policy launched by the Government of Haryana in 2016 to encourage the
            development of plotted colonies in low and medium potential towns
            across the state. The initiative aims to provide affordable and
            high-quality housing solutions for all sections of society,
            especially middle-income and lower-income groups.
          </p>

          <p className="mb-4">
            Under DDJAY, private developers can develop residential plotted
            colonies on land ranging between <b>5 acres and 15 acres</b>. The
            policy ensures planned urbanization by mandating proper
            infrastructure such as roads, drainage systems, parks, and community
            facilities. This leads to balanced regional development and makes
            homeownership more attainable for common citizens.
          </p>

          <p className="mb-4">
            The scheme promotes transparency, faster approval processes, and
            simplified development norms. Homebuyers benefit from government-
            backed regulatory support, clear land titles, and better
            connectivity. Overall, DDJAY projects offer excellent investment
            potential due to affordability, strong infrastructure, and long-term
            growth prospects.
          </p>

          {/* Key Benefits */}
          <p className="font-semibold mt-6">Key Benefits of DDJAY:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Affordable residential plots with verified clear titles.</li>
            <li>Planned infrastructure with essential civic amenities.</li>
            <li>Transparent, government-supported policy framework.</li>
            <li>Faster approval and simplified norms for developers.</li>
            <li>Boosts urban development in smaller towns and cities.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutDDJAY;
