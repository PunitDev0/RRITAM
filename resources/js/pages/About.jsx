import React from "react";
import StaticPageLayout from "@/components/MainPage/StaticPageLayout";

const COMPANY = "Dee Divine Propinfra Pvt. Ltd.";
const PHONE = "+91-9211494111";
const EMAIL = "info@deendayaljanawasyojnareg.org";

export default function About() {
  return (
    <StaticPageLayout>
      <section className="py-12 bg-white min-h-screen text-gray-800">
        <div className="container mx-auto px-6 lg:max-w-4xl text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            About This Platform
          </h1>

          <p className="text-base leading-7 mb-6 text-gray-700">
            This platform is an informational and enquiry channel for residential plotted projects offered under the Deen Dayal Jan Awas Yojana (DDJAY) policy of the Haryana Government.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Our Objective</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Share project-related information</li>
            <li>Assist with enquiries and site visit coordination</li>
            <li>Provide clarity on policy-based plotted developments</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Professional Marketing & Facilitation</h2>
          <p className="text-base leading-7 mb-6 text-gray-700">
            {COMPANY} is an experienced real estate promotion organisation operating in Haryana, committed to ethical marketing and transparent communication for DDJAY projects.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Our Approach</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Clear and factual information</li>
            <li>Policy-aligned communication</li>
            <li>Customer-centric assistance</li>
            <li>Compliance-focused operations</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Company Details (Legal Disclosure)</h2>
          <p className="text-base leading-7 mb-2 text-gray-700">
            <strong>{COMPANY}</strong>
          </p>
          <p className="text-sm text-gray-600 mb-6">
            This is not an official government website. Marketing and facilitation services are provided by the above private entity.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Quick Support</h2>
          <p className="text-gray-700">
            Phone: <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-blue-600 hover:underline">{PHONE}</a>
            <br />
            Email: <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">{EMAIL}</a>
          </p>
        </div>
      </section>
    </StaticPageLayout>
  );
}
