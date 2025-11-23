import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#4285f4] py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">

            {/* Disclaimer */}
            <p className="text-justify text-white leading-relaxed text-sm md:text-base">
              <b>Disclaimer - </b>
              The content provided on this website is for informational purposes only
              and does not constitute an offer or invitation to offer. All images,
              layouts, and visuals are artistic impressions and not actual
              representations.
              <b> Rritam Peace Valley, located in Bahalgarh, Sector 80, Sonipat, </b>
              is a DDJAY-approved project. RRITAM REALITY LLP does not guarantee the
              accuracy, completeness, or current relevance of the displayed information.
              All details, specifications, and project-related information are subject
              to change without prior notice as per applicable laws and authorities.
            </p>

            {/* Copyright + Links */}
            <p className="text-white text-sm md:text-base">
              &copy; {new Date().getFullYear()} <b>RRITAM REALITY LLP</b>. All Rights Reserved.{" "}
              <a href="/privacy" target="_blank" className="text-black  hover:underline">Privacy Policy</a> |{" "}
              <a href="/terms" target="_blank" className="text-black hover:underline">Terms & Conditions</a> |{" "}
              <a href="/refund-policy" target="_blank" className="text-black hover:underline">Refund Policy</a>
            </p>

          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;