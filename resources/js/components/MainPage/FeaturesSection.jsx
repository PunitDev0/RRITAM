import React, { useEffect, useState } from "react";

function CountdownTimer() {
  const targetDate = new Date("2025-12-14T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ finished: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.finished)
    return <p className="text-green-600 text-xs">Registration Started!</p>;

  return (
    <div className="text-[18px] sm:text-[25px] font-semibold text-red-600 mt-1">
      {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
      {timeLeft.seconds}s
    </div>
  );
}

const notices = [
  {
    title: "Registration Starts From - 14 December 2025",
    description: "Registration Open.",
    countdown: true,
    extra: "Please check our website for future updates.",
    borderColor: "border-green-500",
  },
  {
    title: "Registration Opened",
    description: "Allotment Last Date 18 December",
    extra: "Stay tuned for the next registration cycle.",
    borderColor: "border-gray-500",
  },
  {
    title: "Attractive Payment Plan",
    description: "HRERA-PKL-SP-741-2025",
    extra: "EMI options available up to 12 months.",
    borderColor: "border-blue-500",
  },
  {
    title: "Loan Facility Available",
    description: "EOI Registration Open",
    extra: "Loans provided in collaboration with partner banks.",
    borderColor: "border-green-500",
  },
];

export default function FeaturesSection() {
  return (
    <div className="max-w-6xl mx-auto px-3 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {notices.map((notice, index) => (
        <div
          key={index}
          className={`bg-white shadow-md border-2 ${notice.borderColor} h-auto sm:h-40 p-3 sm:p-4 flex flex-col hover:shadow-lg transition-shadow duration-300 rounded-lg`}
        >
          <h5 className="text-[11px] sm:text-xs font-semibold mb-1 sm:mb-2 text-gray-800 leading-snug">
            {notice.title}
          </h5>

          {notice.countdown && <CountdownTimer />}

          {notice.description && (
            <p className="text-[15px] sm:text-[18px] text-gray-600 leading-tight">
              {notice.description}
            </p>
          )}

          {notice.extra && (
            <p className="text-[9px] sm:text-[10px] text-gray-500 mt-1 sm:mt-2 flex-1 leading-tight">
              {notice.extra}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
