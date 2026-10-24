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
            <div className="hero-badge-pill">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              <span>{t.hero.badge}</span>
            </div>

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

            {/* Quick Contact & Channels Strip */}
            <div className="hero-connect-strip">
              <span className="hero-connect-label">{t.hero.connectThrough}</span>
              <div className="hero-social-links">
                <a
                  href="https://www.linkedin.com/in/caogiahan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="Connect with Cao Gia Han on LinkedIn"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"></path>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${t.hero.email}`}
                  className="hero-social-btn"
                  aria-label="Send email to Cao Gia Han"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>Gmail</span>
                </a>

                <div className="hero-location-chip" aria-label="Location">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{t.hero.location}</span>
                </div>
              </div>
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
                    ? "Shopee Việt Nam • Finance Team"
                    : "Shopee Vietnam • Finance Team"}
                </span>
              </div>
              <span className="status-location">Saigon Centre, TP.HCM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
