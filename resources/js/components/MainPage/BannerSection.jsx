import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Correct import
import "swiper/css";
import { Button } from "../ui/button";

export default function BannerSection({ openRegistrationModal }) {
  const slideImages = [
    "/images/banner.jpg",
    "/images/banner1.jpg",
    "/images/banner2.jpg",

  ];

  return (
    <>
      <div className="news-tricker">
        <marquee width="100%" direction="left" height="" className="text-[17px] font-semibold">

          ATTENTION REGISTRATION OPEN !!!! Book Your Plot under Affordable
          Housing Policy 2013 for RRITAM PEACE VALLEY *** 33% Quota Reserved for Women
          *** 33% Quota Reserved under Government Category ***

          UNIT ALLOTMENT DATE:
          <span className="bg-yellow-400 text-black px-3 py-1 mx-2 rounded-sm blink-date">
            18 December 2025
          </span>

          LAST DATE OF APPLICATION:
          <span className="bg-red-600 text-white px-3 py-1 mx-2 font-bold blink-date rounded-sm">
            14 December 2025
          </span>

          Registration Amount is Fully Refundable for Unsuccessful Applicants Within 14 Working Days
        </marquee>
      </div>
      <div className="relative w-full" style={{ maxHeight: "70dvh" }}>
        {/* Fixed overlay and text */} 
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="max-w-4xl text-center space-y-6">

              <h2 className="text-white text-3xl font-bold">
                RRITAM Peace Valley, Bahalgarh, Sector - 80, Sonipat
              </h2>

              <p className="text-lg text-white font-medium">
                HRERA-PKL-SNP-741-2025 dated on 11.08.2025
              </p>

              <p className="text-green-300 text-xl font-bold tracking-wide">
                REGISTRATION OPEN
              </p>

              <p className="text-white text-lg font-semibold">
                (HARYANA GOVT. RESIDENTIAL PLOTS)
              </p>

              <Button
                onClick={openRegistrationModal}
                className="rounded-2xl bg-[#4285f4] text-white"
              >
                Register Now
              </Button>

            </div>
          </div>
        </div>


        {/* Swiper Slides */}
        <Swiper
          className="mySwiper w-full h-full"
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {slideImages.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center bg-gray-100"
              style={{ height: "70dvh" }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
