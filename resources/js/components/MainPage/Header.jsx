import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check, Menu, X } from "lucide-react";

const Header = ({ openRegistrationModal, isNavOpen, toggleNav, handleNavLinkClick }) => {
  const navItems = [
    { label: "Site Plan", link: "#siteplan" },
    { label: "Brochure", link: "#brochure" },
    { label: "HRERA License", link: "#hrera" },
    { label: "Project License", link: "#license" },
    { label: "Price List", link: "#pricelist" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-[1000]">
      {/* Top Contact Bar */}
      <div className="bg-[#4285f4] text-white text-xs sm:text-sm flex flex-row items-center justify-between gap-4 py-2 px-3">
        <a href="tel:+919211494111" className="hover:underline font-bold text-white">
          +91-9211494111
        </a>
        <span>|</span>
        <a href="mailto:info@deendayaljanawasyojnareg.org" className="hover:underline font-bold text-white">
          info@deendayaljanawasyojnareg.org
        </a>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Logos */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="/"><img src="images/DDJAY_logo.jpg" alt="Logo" className="h-12 w-auto" /></a>
          <a href="/"><img src="images/support.png" alt="Support" className="h-12 w-auto" /></a>
          <a href="/"><img src="images/rera-logo.png" alt="RERA" className="h-12 w-auto" /></a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={(e) => handleNavLinkClick(e, item.link)}
              className="flex items-center gap-1 font-medium text-gray-800 hover:text-green-600 transition"
            >
              <Check className="h-4 w-4 text-green-600" />
              {item.label}
            </a>
          ))}

          <Button
            onClick={openRegistrationModal}
            className="rounded-full bg-[#4285f4] hover:bg-blue-700 text-white px-6"
          >
            EOI Registration Open
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleNav} className="lg:hidden">
          {isNavOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isNavOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={(e) => {
                  handleNavLinkClick(e, item.link);
                  toggleNav();
                }}
                className="flex items-center gap-2 text-gray-700 hover:text-green-600"
              >
                <Check className="h-5 w-5 text-green-600" />
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                openRegistrationModal();
                toggleNav();
              }}
              className="w-full rounded-full bg-[#4285f4] hover:bg-blue-700"
            >
              EOI Registration Open
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;