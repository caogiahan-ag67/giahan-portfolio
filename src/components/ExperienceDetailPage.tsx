"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface ExperienceDetailPageProps {
  slug: string;
}

export default function ExperienceDetailPage({ slug }: ExperienceDetailPageProps) {
  const { t } = useLanguage();
  const { experience, experienceDetail } = t;

  const role = experience.roles.find((r) => r.slug === slug) || experience.roles[0];

  return (
    <div className="site-wrapper">
      <Header />

      <main className="portfolio-section experience-page-container">
        <div className="site-container">
          {/* Back Navigation */}
          <Link href="/#experience" className="experience-back-link">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>{experienceDetail.backHome}</span>
          </Link>

          {/* Header */}
          <div className="experience-detail-header">
            <span className="timeline-period-badge">{role.period}</span>
            <h1 className="section-title" style={{ marginTop: "0.5rem" }}>
              {role.role}
            </h1>
            <p className="hero-subheadline" style={{ marginBottom: "0.5rem" }}>
              {role.company}
            </p>
            <p className="section-description">{role.summary}</p>
          </div>

          {/* Grid: Main Content + Sidebar */}
          <div className="experience-detail-grid">
            <div className="experience-main-col">
              {/* Card 1: Role Overview */}
              <div className="experience-detail-card">
                <h2 className="experience-detail-title">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>{experienceDetail.roleOverview}</span>
                </h2>
                <p className="about-card-text" style={{ fontSize: "1.05rem" }}>
                  {role.detailsSummary}
                </p>
              </div>

              {/* Card 2: Key Responsibilities */}
              <div className="experience-detail-card">
                <h2 className="experience-detail-title">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span>{experienceDetail.keyResponsibilities}</span>
                </h2>
                <ul className="experience-list-detailed">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Core Achievements */}
              <div className="experience-detail-card">
                <h2 className="experience-detail-title">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>{experienceDetail.coreAchievements}</span>
                </h2>
                <ul className="experience-list-detailed">
                  {role.achievements.map((ach, i) => (
                    <li key={i} style={{ color: "var(--text-main)", fontWeight: 500 }}>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="experience-sidebar-col">
              <div className="experience-sidebar-card">
                <div className="sidebar-info-row">
                  <span className="sidebar-info-label">{experienceDetail.companyInfo}</span>
                  <span className="sidebar-info-val">{role.company}</span>
                </div>

                <div className="sidebar-info-row">
                  <span className="sidebar-info-label">Tenure & Period</span>
                  <span className="sidebar-info-val" style={{ color: "var(--primary)" }}>
                    {role.period}
                  </span>
                </div>

                <div className="sidebar-info-row" style={{ borderBottom: "none" }}>
                  <span className="sidebar-info-label">{experienceDetail.technologiesUsed}</span>
                  <div className="timeline-tag-list" style={{ marginTop: "0.75rem", marginBottom: 0 }}>
                    {role.tags.map((tag, i) => (
                      <span key={i} className="timeline-tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a
                    href="/Cao_Gia_Han_Resume.pdf"
                    download="Cao-Gia-Han-Resume.pdf"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
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
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {t.hero.connectLinkedIn}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
