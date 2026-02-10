import React from 'react';

const PHONE = '+919211494111';
const WHATSAPP_URL = `https://wa.me/91${PHONE.replace(/\D/g, '')}`;

const Footer = ({ openEnquiryPopup }) => {
  return (
    <>
      <footer className="bg-[#4285f4] py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">

            {/* Call / WhatsApp section – anchor for Contact link */}
            <div id="contact" className="pb-4 border-b border-white/30">
              <button
                onClick={openEnquiryPopup}
                className="text-white font-semibold mb-2 bg-transparent border-none cursor-pointer hover:text-blue-200 transition"
              >
                Get in touch
              </button>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${PHONE}`} className="text-white hover:underline font-bold">
                  Call: {PHONE}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <p id="disclaimer" className="text-justify text-white leading-relaxed text-xs md:text-sm">
              This website deendayaljanawasyojanareg.org is created for information and registration facilitation purposes only for the project RRITAM Peace Valley, a residential plotted development registered under HRERA-PKL-SNP-741-2025 and developed under the Deen Dayal Jan Awas Yojna (Affordable Plotted Housing Policy, 2016) of the Government of Haryana. The content, images, layouts, specifications, distances, connectivity details, pricing, payment plans, amenities, timelines, and other project-related information displayed on this website are indicative in nature and are subject to change as per approvals, statutory requirements, and directives of competent authorities including DTCP Haryana and HRERA.
            </p>

            {/* Refund Trust Line */}
            <p className="text-white text-[11px] md:text-xs font-medium opacity-90 border-t border-white/20 pt-2">
              Refund applicable within 15 days from the date of allotment, subject to terms & conditions.
            </p>

            {/* Ads-Safe Agreement Line */}
            <p className="text-white text-[10px] md:text-[11px] opacity-70">
              By proceeding, you agree to the Terms & Conditions, Refund Policy, and Disclaimer.
            </p>

            {/* Privacy & Cookie Trust Lines */}
            <p className="text-white text-[10px] md:text-[11px] opacity-60">
              Your privacy is important to us. We collect information only to serve you better. <br />
              By continuing to use this website, you agree to our use of cookies.
            </p>

            {/* Copyright + Links */}
            <footer className="bg-gray-900 py-6 text-center">
              <p className="text-white text-sm md:text-base">
                &copy; {new Date().getFullYear()}{" "}
                <b>Dee Divine Propinfra Pvt. Ltd.</b> All Rights Reserved.{" "}

                <a href="/about" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">About</a> |{" "}
                <a href="/contact" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Contact</a> |{" "}
                <a href="/privacy" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Privacy Policy</a> |{" "}
                <a href="/terms" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Terms & Conditions</a> |{" "}
                <a href="/refund-policy" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Refund Policy</a> |{" "}
                <a href="/disclaimer" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Disclaimer</a>
              </p>
            </footer>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
