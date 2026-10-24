"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className="portfolio-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head">
          <h2 className="section-title">{experience.title}</h2>
          <p className="section-description">{experience.description}</p>
        </div>

        {/* Two-Sided Alternating Timeline */}
        <div className="timeline-container">
          <div className="timeline-middle-line" aria-hidden="true"></div>

          {experience.roles.map((role, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={role.slug}
                className={`timeline-block ${isLeft ? "left" : "right"}`}
              >
                <Link
                  href={`/experience/${role.slug}`}
                  className="timeline-card-box"
                  aria-label={`${role.role} at ${role.company}`}
                >
                  <span className="timeline-period-badge">{role.period}</span>

                  <h3 className="timeline-job-role">{role.role}</h3>
                  <h4 className="timeline-job-company">{role.company}</h4>

                  <p className="timeline-job-summary">{role.summary}</p>

                  <div className="timeline-tag-list">
                    {role.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="timeline-tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="timeline-view-detail-btn">
                    <span>{role.viewDetail}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Link>

                <div className="timeline-center-pin" aria-hidden="true"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
