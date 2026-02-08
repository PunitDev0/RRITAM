import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function StaticPageLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsNavOpen(false);
    if (targetId.startsWith("#")) {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = targetId;
    }
  };

  const openRegistrationModal = () => {
    // window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        handleNavLinkClick={handleNavLinkClick}
        openRegistrationModal={openRegistrationModal}
      />
      <main className="flex-1">{children}</main>
    </div>
  );
}
