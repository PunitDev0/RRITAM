import React from "react";
import StaticPageLayout from "@/components/MainPage/StaticPageLayout";

export default function Privacy() {
  return (
    <StaticPageLayout>
      <section className="py-12 bg-white min-h-screen text-gray-800">
        <div className="container mx-auto px-6 lg:max-w-4xl text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 border-b pb-4">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-base leading-7 text-gray-700">
            <p className="italic">
              This Privacy Policy describes how www.deendayaljanawasyojanareg.org collects, uses, protects, and handles personal information of users who visit or register on this website. By using this website, you consent to the practices described in this Privacy Policy.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>We may collect the following personal information when you register or interact with the website:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>City/location</li>
                <li>Payment and transaction details (via secure payment gateways)</li>
                <li>Any other information voluntarily provided by the user</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Use of Information</h2>
              <p>The information collected is used for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To process registrations and allotment-related communication</li>
                <li>To provide information about the project RRITAM Peace Valley</li>
                <li>To contact users regarding updates, offers, or documentation</li>
                <li>To comply with legal, regulatory, and RERA requirements</li>
                <li>To improve website functionality and user experience</li>
              </ul>
              <p className="mt-2 text-gray-900 font-medium">We do not sell, rent, or trade user data to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Protection & Security</h2>
              <p>We implement reasonable security practices to protect personal data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure, and users share information at their own risk.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Disclosure</h2>
              <p>User information may be shared only with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Authorized developer representatives</li>
                <li>Banking or financial institutions (for loan assistance, if opted)</li>
                <li>Government or regulatory authorities when required by law</li>
              </ul>
              <p className="mt-2">No data is shared for unrelated marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. RERA & DDJAY Compliance</h2>
              <p>All data handling complies with applicable laws, including the Real Estate (Regulation and Development) Act, 2016 (RERA) and DDJAY policy guidelines.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. User Rights</h2>
              <p>Users may request access, correction, or deletion of their personal data by contacting us through the official contact details mentioned on the website, subject to regulatory and legal requirements.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to Privacy Policy</h2>
              <p>This Privacy Policy may be updated from time to time. Any changes will be posted on this page and will be effective immediately upon publication.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Information</h2>
              <p>For privacy-related concerns, users may contact us using the official communication channels provided on the website.</p>
            </div>

            <p className="mt-8 font-semibold text-gray-900 text-center">
              Your privacy is important to us. We collect information only to serve you better.
            </p>

            <hr className="my-10" />

            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Cookie Policy
            </h1>

            <p>This website uses cookies to enhance user experience and ensure smooth functioning.</p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help the website recognize your device and remember preferences.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Improve website performance and speed</li>
                <li>Analyze visitor traffic and usage patterns</li>
                <li>Enhance user experience and navigation</li>
                <li>Support marketing and advertising campaigns (Google Ads, Meta Ads, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Cookies</h2>
              <p>Some cookies may be placed by third-party services such as analytics tools or advertising platforms. These cookies are governed by the respective third-party privacy policies.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Managing Cookies</h2>
              <p>Users can choose to disable cookies through their browser settings. Disabling cookies may affect certain functionalities of the website.</p>
            </div>

            <p className="mt-8 font-semibold text-gray-900 text-center border-t pt-4">
              By continuing to use this website, you agree to our use of cookies.
            </p>
          </div>
        </div>
      </section>
    </StaticPageLayout>
  );
}
