import React from "react";
import StaticPageLayout from "@/components/MainPage/StaticPageLayout";

export default function RefundPolicy() {
  return (
    <StaticPageLayout>
      <section className="py-12 bg-white min-h-screen text-gray-800">
        <div className="container mx-auto px-6 lg:max-w-4xl text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 border-b pb-4">
            Refund Policy
          </h1>

          <div className="space-y-6 text-base leading-7 text-gray-700">
            <p className="italic">
              This Refund Policy governs the terms and conditions for refunds applicable to registrations made on www.deendayaljanawasyojanareg.org for the project RRITAM Peace Valley, a residential plotted development registered under HRERA-PKL-SNP-741-2025 and approved under the Deen Dayal Jan Awas Yojna (DDJAY) of the Government of Haryana. By registering or making any payment on this website, the applicant agrees to be bound by the terms mentioned below.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Eligibility for Refund</h2>
              <p>The registration amount paid (₹31,000/-) is eligible for a refund within 15 (fifteen) days from the date of allotment under the following circumstances:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>In case no plot is allotted to the applicant, or</li>
                <li>If the applicant does not wish to proceed with the allotment of the plot after allotment.</li>
              </ul>
              <p className="mt-2">Provided that:</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>No allotment letter has been issued, and</li>
                <li>No Builder Buyer Agreement (BBA) or any other legally binding document has been executed.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Refund Request Procedure</h2>
              <p>To initiate a refund request, the applicant must submit a written request through the official communication channel mentioned on the website, along with the following details:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Applicant’s full name</li>
                <li>Registered mobile number and email ID</li>
                <li>Allotment or registration reference number</li>
                <li>Payment receipt or transaction reference</li>
                <li>Reason for cancellation</li>
                <li>Bank account details for refund processing</li>
              </ul>
              <p className="mt-2">Refund requests without complete or verifiable information may be delayed or rejected.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Refund Processing Timeline</h2>
              <p>Upon successful verification and approval, the refund shall be processed within 7 to 15 working days from the date of acceptance of the refund request. All refunds shall be processed only through bank transfer. Cash refunds shall not be permitted.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Non-Refundable Conditions</h2>
              <p>The registration amount shall become non-refundable in the following cases:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>If the refund request is made after 15 days from the date of allotment</li>
                <li>Once an allotment letter has been issued</li>
                <li>After execution of the Builder Buyer Agreement (BBA)</li>
                <li>If cancellation arises due to non-compliance with DDJAY policy norms</li>
                <li>If incorrect, misleading, or incomplete information has been provided by the applicant</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Mode of Refund</h2>
              <p>Refunds shall be credited to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The same bank account from which the payment was made, or</li>
                <li>The bank account provided by the applicant, subject to verification</li>
              </ul>
              <p className="mt-2">The developer or marketing partner shall not be responsible for delays caused due to incorrect or incomplete bank details submitted by the applicant.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Regulatory & Policy Compliance</h2>
              <p>All refunds shall be governed by:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Deen Dayal Jan Awas Yojna (DDJAY) policy guidelines</li>
                <li>Haryana Real Estate (Regulation and Development) Act (RERA)</li>
                <li>Terms and conditions mentioned in the application form, allotment documents, and Builder Buyer Agreement (if applicable)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Right to Amend</h2>
              <p>The developer reserves the right to modify, amend, or update this Refund Policy at any time in compliance with applicable laws and regulatory requirements. Any such changes shall be effective from the date of publication on the website.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Information</h2>
              <p>For refund-related queries or assistance, applicants may contact us through the official contact details provided on the website.</p>
            </div>

            <p className="mt-8 font-semibold text-gray-900 text-center">
              Refund applicable within 15 days from the date of allotment, subject to terms & conditions.
            </p>
          </div>
        </div>
      </section>
    </StaticPageLayout>
  );
}
