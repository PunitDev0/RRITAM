import React from "react";
import StaticPageLayout from "@/components/MainPage/StaticPageLayout";

const COMPANY = "Dee Divine Propinfra Pvt. Ltd.";

export default function Privacy() {
  return (
    <StaticPageLayout>
      <section className="py-12 bg-white min-h-screen text-gray-800">
        <div className="container mx-auto px-6 lg:max-w-4xl text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Privacy Policy
          </h1>

          <p className="text-base leading-7 mb-6 text-gray-700">
            This policy describes how we collect, use, and protect your personal information. The operator of this platform is <strong>{COMPANY}</strong> (“the Company”). By using this website, you agree to the practices described below.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Information Collection</h2>
          <p className="text-base leading-7 mb-4 text-gray-700">
            We may collect your name, phone number, and email address when you submit enquiry forms on this website. We may also receive information when you contact us via call or WhatsApp for project-related enquiries.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Use of Information</h2>
          <p className="text-base leading-7 mb-4 text-gray-700">
            The information collected is used to respond to your enquiries, share project details, and coordinate site visits and follow-ups. The Company uses this data only for communication related to the platform’s services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Data Protection</h2>
          <p className="text-base leading-7 mb-4 text-gray-700">
            The Company does not sell, rent, or share your personal information with third parties or government bodies for commercial or unrelated purposes. Data is used solely for communication and facilitation services offered through this platform.
          </p>

          <p className="text-base leading-7 text-gray-700 font-medium">
            By submitting your details on this website, you consent to being contacted by the Company through call, SMS, or WhatsApp for the purposes described above.
          </p>
        </div>
      </section>
    </StaticPageLayout>
  );
}
