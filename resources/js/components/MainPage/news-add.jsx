import React from "react";

function NewsAdd() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Newspaper Cutting Image */}
        <div className="w-full">
          <img
            src="/images/newscutting.jpeg" 
            alt="Dainik Jagran Public Notification"
            className="w-full rounded-xl shadow-lg border"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Public Notification Announcement
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            We are pleased to inform you that our official public notification
            has been published in the renowned national newspaper
            <span className="font-semibold text-gray-800">
              {" "}Dainik Jagran
            </span>.
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            You can find the detailed announcement on the
            <span className="font-semibold text-gray-800">
              {" "}9th page
            </span>{" "}
            of the newspaper. This publication ensures transparency and
            wide public reach.
          </p>

          <p className="text-sm text-gray-500">
            Publication Date: <span className="font-medium">14th December 2025</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default NewsAdd;
