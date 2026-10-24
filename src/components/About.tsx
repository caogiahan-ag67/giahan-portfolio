"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  const renderHighlightIcon = (index: number) => {
    switch (index) {
      case 0:
        // AR / Reconciliation Icon
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 1:
        // Trade Union / Shield Icon
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        );
      case 2:
      default:
        // Automation / Power Query / Chart Icon
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        );
    }
  };

  const getTierClass = (index: number) => {
    if (index === 0) return { badge: "award-tier-gold", icon: "award-icon-gold" };
    if (index === 1) return { badge: "award-tier-silver", icon: "award-icon-silver" };
    return { badge: "award-tier-merit", icon: "award-icon-merit" };
  };

  return (
    <section id="about" className="portfolio-section section-tinted">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <h2 className="section-title">{about.title}</h2>
          <p className="section-description">{about.description}</p>
        </div>

        {/* Two-Card Grid */}
        <div className="about-grid">
          {/* Card 1: Education (HUB) */}
          <div className="about-card">
            <div className="education-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <span>{about.educationCard.title}</span>
            </div>

            <h3 className="about-card-title">{about.educationCard.subtitle}</h3>
            <div className="about-card-subtitle">Ho Chi Minh University of Banking (HUB)</div>
            <p className="about-card-text">{about.educationCard.text}</p>

            <div className="about-stats-grid">
              {about.educationCard.stats.map((stat, idx) => (
                <div key={idx} className="about-stat-box">
                  <div className="about-stat-val">{stat.val}</div>
                  <div className="about-stat-lbl">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Shopee Career & Focus Areas */}
          <div className="about-card">
            <div className="education-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>{about.experienceCard.subtitle}</span>
            </div>

            <h3 className="about-card-title">{about.experienceCard.title}</h3>
            <div className="about-card-subtitle">Shopee Vietnam (Sea Group)</div>
            <p className="about-card-text">{about.experienceCard.text}</p>

            <div className="about-stats-grid">
              {about.experienceCard.stats.map((stat, idx) => (
                <div key={idx} className="about-stat-box">
                  <div className="about-stat-val">{stat.val}</div>
                  <div className="about-stat-lbl">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights & Contributions Sub-section */}
        <div className="awards-section-head">
          <h3 className="awards-section-title">{about.highlightsTitle}</h3>
        </div>

        <div className="awards-grid">
          {about.highlights.map((item, index) => {
            const tierStyle = getTierClass(index);
            return (
              <div key={index} className="award-card">
                <div className="award-top">
                  <span className={`award-tier-badge ${tierStyle.badge}`}>
                    {index === 0 ? "★ " : index === 1 ? "✓ " : "⚡ "}
                    {item.badge}
                  </span>
                  <span className="award-date">{item.period}</span>
                </div>

                <div className={`award-icon-box ${tierStyle.icon}`}>
                  {renderHighlightIcon(index)}
                </div>

                <h4 className="award-title">{item.title}</h4>
                <div className="award-org">{item.org}</div>
                <p className="award-desc">{item.desc}</p>

                <div className="award-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="award-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
