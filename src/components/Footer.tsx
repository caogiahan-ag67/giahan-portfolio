"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-wordmark">{t.brand.name}</span>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer-links-group">
            <nav className="footer-nav" aria-label="Footer Navigation">
              <a href="#hero">{t.nav.about}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#experience">{t.nav.experience}</a>
              <a href="#skills">{t.nav.skills}</a>
            </nav>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 {t.brand.name}. {t.footer.rights}
          </p>
          <div className="footer-meta-pill">
            <span className="footer-dot" aria-hidden="true"></span>
            <span>Shopee Vietnam • Finance & Accounting</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
