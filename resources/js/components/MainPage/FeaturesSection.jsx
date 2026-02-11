import React, { useEffect, useState } from "react";

// ==================== COUNTDOWN TIMER (IST FIXED) ====================
function CountdownTimer() {
  // Countdown ends EXACTLY: 5 March 2026, 23:59:59 IST
  // 23:59:59 IST == 18:29:59 UTC
  const targetDate = new Date("2026-03-01T18:29:59Z").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ finished: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.finished)
    return <p className="text-blue-600 text-xs">Registration Open!</p>;

  return (
    <div className="text-[18px] sm:text-[22px] font-semibold text-red-600 mt-2">
      <p className="text-black text-[15px] -mb-3">Registration Ends In</p>
      {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
    </div>
  );
}

// ==================== NOTICE DATA ====================
const notices = [
  {
    title: "Registration Last Date - 1 March 2026",
    countdown: true,
    extra: "Please check our website for future updates.",
    borderColor: "border-blue-500",
  },
  {
    title: "DATE OF ALLOTMENT",
    description: "5 March 2026",
    extra: "",
    borderColor: "border-gray-500",
  },
  {
    title: "Attractive Payment Plan",
    description: "10% - 40% - 25% - 25%",
    extra: "HRERA-PKL-SNP-741-2025",
    borderColor: "border-blue-500",
  },
  {
    title: "Loan Facility Available",
    description: "Registration Open",
    extra: "Up to 80% Loan availability",
    borderColor: "border-blue-500",
    logos: ["/images/union-bank.png", "/images/icicibank.png"],
  },
];

// ==================== MAIN SECTION ====================
export default function FeaturesSection() {
  return (
    <div className="max-w-6xl mx-auto px-3 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {notices.map((notice, index) => (
        <div
          key={index}
          className={`bg-white shadow-md border-2 ${notice.borderColor} h-auto sm:h-40 p-3 sm:p-4 flex flex-col hover:shadow-lg transition-shadow duration-300`}
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

          <div className="flex justify-between items-end mt-auto">
            {notice.extra && (
              <p className="text-[9px] sm:text-[10px] text-gray-500 flex-1 leading-tight">
                {notice.extra}
              </p>
            )}

            {notice.logos && (
              <div className="flex gap-3 items-center">
                {notice.logos.map((logo, idx) => (
                  <img key={idx} src={logo} alt="bank logo" className="h-6 sm:h-8 object-contain" />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
