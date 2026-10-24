"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-container nav-inner">
        <Link href="/" className="wordmark" onClick={closeMobileMenu}>
          <span>{t.brand.name}</span>
          <span className="wordmark-badge">{t.brand.badge}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#experience">{t.nav.experience}</a>
            </li>
            <li>
              <a href="#skills">{t.nav.skills}</a>
            </li>
          </ul>
        </nav>

        {/* Language Switcher & Controls */}
        <div className="nav-controls">
          <div className="lang-toggle-container" role="group" aria-label="Language Switcher">
            <button
              type="button"
              className={`lang-btn ${language === "vi" ? "active" : ""}`}
              onClick={() => setLanguage("vi")}
              aria-label="Chuyển sang Tiếng Việt"
              aria-pressed={language === "vi"}
            >
              VI
            </button>
            <span className="lang-divider" aria-hidden="true">|</span>
            <button
              type="button"
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-links">
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMobileMenu}>
                {t.nav.experience}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMobileMenu}>
                {t.nav.skills}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
