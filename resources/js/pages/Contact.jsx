import React from "react";
import { Link } from "@inertiajs/react";
import StaticPageLayout from "@/components/MainPage/StaticPageLayout";

const COMPANY = "Dee Divine Propinfra Pvt. Ltd.";
const PHONE = "+91-9211494111";
const EMAIL = "info@deendayaljanawasyojnareg.org";
const WHATSAPP_URL = "https://wa.me/919211494111";
const OFFICE_ADDRESS = "Office Address (placeholder)";

export default function Contact() {
  return (
    <StaticPageLayout>
      <section className="py-12 bg-white min-h-screen text-gray-800">
        <div className="container mx-auto px-6 lg:max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Contact Information
          </h1>

          <p className="text-center text-gray-700 mb-8">
            For project enquiries and site visit coordination, please use the details below.
          </p>

          <div className="space-y-4 mb-8">
            <p><strong>Company:</strong> {COMPANY}</p>
            <p><strong>Office Address:</strong> {OFFICE_ADDRESS}</p>
            <p><strong>Phone:</strong> <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-blue-600 hover:underline">{PHONE}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">{EMAIL}</a></p>
            <p><strong>Working Hours:</strong> Monday–Saturday, 10:00 AM–6:30 PM</p>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            All enquiries submitted through this website are handled by the operating company.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              WhatsApp
            </a>
            <Link
              href="/"
              className="inline-block bg-[#4285f4] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </StaticPageLayout>
  );
}
