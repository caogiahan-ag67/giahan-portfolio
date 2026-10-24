"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="portfolio-section hero-section">
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <h1 className="hero-headline">{t.hero.headline}</h1>

            <p className="hero-subheadline">{t.hero.subheadline}</p>

            <p className="hero-summary">{t.hero.summary}</p>

            {/* CTAs */}
            <div className="hero-actions">
              <a
                href="/Cao_Gia_Han_Resume.pdf"
                download="Cao-Gia-Han-Resume.pdf"
                className="btn-primary"
                aria-label={t.hero.downloadCV}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="btn-icon"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                {t.hero.downloadCV}
              </a>

              <a
                href="https://www.linkedin.com/in/caogiahan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label={t.hero.connectLinkedIn}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="btn-icon"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"></path>
                </svg>
                {t.hero.connectLinkedIn}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="btn-icon-right"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

          </div>

          {/* Right Column: Portrait Card */}
          <div className="hero-media-card">
            <div className="hero-portrait-frame">
              <Image
                src="/images/portrait_cao_gia_han.jpg"
                alt="Cao Gia Hân - Associate Accounts Receivable Finance tại Shopee"
                width={600}
                height={800}
                priority
                className="hero-portrait-img"
              />
            </div>
            <div className="hero-status-row">
              <div className="status-indicator">
                <span className="status-dot" aria-hidden="true"></span>
                <span>
                  {language === "vi"
                    ? "Shopee Việt Nam"
                    : "Shopee Vietnam"}
                </span>
              </div>
              <span className="status-location">
                {language === "vi"
                  ? "Saigon Centre, TP.HCM"
                  : "Saigon Centre, Ho Chi Minh City"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
