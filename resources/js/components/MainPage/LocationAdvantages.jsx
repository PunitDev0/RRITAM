import React from "react";
import { CheckCircle } from "lucide-react";

const LocationAdvantages = () => {
  const highlights = [
    {
      title: "NH334B",
      desc: "5-min Drive Approx",
    },
    {
      title: "KMP EXPRESSWAY",
      desc: "7-8 min Drive Approx",
    },
    {
      title: "UER-II",
      desc: "30-min Drive Approx",
    },
    {
      title: "NH44",
      desc: "2-min Drive Approx",
    },
    {
      title: "Delhi - Katra Expressway",
      desc: "40 min Drive Approx",
    },
    {
      title: "Rishihood University",
      desc: "10 min Drive Approx",
    },
    {
      title: "IMT Kharkhoda",
      desc: "20 min Drive Approx",
    },
    {
      title: "Upcoming Rajiv Gandhi Education City Metro Station",
      desc: "10 min Drive Approx",
    },
    {
      title: "Dr. B.R Ambedkar National Law University",
      desc: "10 min Drive Approx",
    },
  ];

  return (
    <div className="amenities jst-pb" id="amenities">
      <div className="container">
        <h2 className="cons-heading pb-5 text-center font-sans">
          Location Advantages
        </h2>

        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-6 col-sm-6">
            <div className="highlights-container text-xs">

              {/* 🔥 DYNAMIC LIST USING ARRAY */}
              {highlights.map((item, index) => (
                <div className="flex gap-3 mb-3 items-start" key={index}>
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                  <p>
                    <strong>{item.title}:</strong> {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 col-sm-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27925.437945809503!2d77.098417!3d28.967222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf007771e535%3A0xf0e3af382c54ea34!2sRritam%20Peace%20Valley!5e0!3m2!1sen!2sin!4v1761304075801!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Project Location Map"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LocationAdvantages;
