import React from "react";
import StaticPageLayout from "@/components/MainPage/StaticPageLayout";

export default function Disclaimer() {
    return (
        <StaticPageLayout>
            <section className="py-12 bg-white min-h-screen text-gray-800">
                <div className="container mx-auto px-6 lg:max-w-4xl text-justify">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 border-b pb-4">
                        Disclaimer
                    </h1>

                    <div className="space-y-6 text-base leading-7 text-gray-700">
                        <p>
                            This website <strong>deendayaljanawasyojnareg.org</strong> is created for information and registration facilitation purposes only for the project <strong>RRITAM Peace Valley</strong>, a residential plotted development registered under <strong>HRERA-PKL-SNP-741-2025</strong> and developed under the Deen Dayal Jan Awas Yojna (Affordable Plotted Housing Policy, 2016) of the Government of Haryana.
                        </p>

                        <p>
                            The content, images, layouts, specifications, distances, connectivity details, pricing, payment plans, amenities, timelines, and other project-related information displayed on this website are indicative in nature and are subject to change as per approvals, statutory requirements, and directives of competent authorities including DTCP Haryana and HRERA.
                        </p>

                        <p>
                            This website is not an official website of the Government of Haryana, DTCP, or HRERA. The use of the name Deen Dayal Jan Awas Yojna (DDJAY) is strictly for informational purposes to describe the policy framework under which the project is approved. No claim is made that this website represents or is operated by any government authority.
                        </p>

                        <p>
                            All bookings, allotments, and transactions shall be governed by the Builder Buyer Agreement (BBA), allotment letter, and other legally binding documents issued by the developer. Prospective buyers are advised to verify all details independently, including RERA registration, approvals, specifications, and payment terms, before making any financial decision.
                        </p>

                        <p>
                            Home loan availability, loan amount (up to 80%), and eligibility are subject to the respective bank’s policies and approval norms. The developer or channel partner does not guarantee loan sanctions.
                        </p>

                        <p>
                            Registration amount, pricing, EDC/IDC, PLC, statutory charges, and taxes are applicable as per prevailing government norms and may vary. Registration does not guarantee allotment; allotment shall be done as per DDJAY policy guidelines and applicable procedures.
                        </p>

                        <p>
                            The developer, promoter, or marketing partner shall not be liable for any loss arising from reliance on the information contained on this website.
                        </p>

                        <p>
                            For official project details, buyers are encouraged to visit the HRERA Haryana website and verify the project registration number <strong>HRERA-PKL-SNP-741-2025</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </StaticPageLayout>
    );
}
