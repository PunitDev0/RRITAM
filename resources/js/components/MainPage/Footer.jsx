import React from 'react';

const PHONE = '+919211494111';
const WHATSAPP_URL = `https://wa.me/91${PHONE.replace(/\D/g, '')}`;

const Footer = () => {
  return (
    <>
      <footer className="bg-[#4285f4] py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">

            {/* Call / WhatsApp section – anchor for Contact link */}
            <div id="contact" className="pb-4 border-b border-white/30">
              <p className="text-white font-semibold mb-2">Get in touch</p>
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
            <p id="disclaimer" className="text-justify text-white leading-relaxed text-sm md:text-base">
              This website is an informational platform for residential plotted projects offered under the Deen Dayal Jan Awas Yojana (DDJAY) policy of the Haryana Government. Marketing and customer facilitation services are provided by a privately operated real estate promotion entity. This is not an official government website.
            </p>

            {/* Copyright + Links */}
            <footer className="bg-gray-900 py-6 text-center">
  <p className="text-white text-sm md:text-base">
    &copy; {new Date().getFullYear()}{" "}
    <b>Dee Divine Propinfra Pvt. Ltd.</b> All Rights Reserved.{" "}
    
    <a href="/about" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">About</a> |{" "}
    <a href="/contact" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Contact</a> |{" "}
    <a href="/privacy" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Privacy Policy</a> |{" "}
    <a href="/terms" className="text-white hover:text-gray-300 underline-offset-4 hover:underline">Terms & Conditions</a>
  </p>
</footer>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
