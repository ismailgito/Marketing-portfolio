"use client";

import { FaChartBar, FaVideo, FaBullhorn, FaRocket } from "react-icons/fa";

const caseStudies = [
  {
    title: "Competitor Analysis for Creative Testing",
    subtitle: "Insights from 10 Winning Ads",
    notionUrl: "https://app.notion.com/p/37bb681bd1b2801b9f5cfeb036f1c5c0?v=37bb681bd1b2807d98dd000c9b1fda2d",
    results: ["14–42 sec video ads dominate", "WhatsApp CTA in 9/10 ads", "Problem + Solution hooks win", "Ads under 3 months strongest"],
    highlights: [
      { icon: FaVideo, text: "Every winner uses video (14–42 sec). No static images." },
      { icon: FaBullhorn, text: 'CTA "SEND WHATSAPP" appears in 9/10 ads.' },
      { icon: FaChartBar, text: "Top hooks: Offer, Problem + Solution, and Direct Order callouts." },
      { icon: FaRocket, text: "Ads under 3 months show the strongest profitability signals." },
    ],
  },
  {
    title: "Performance Marketing Assignment",
    subtitle: "Growth Metrics & Optimization",
    notionUrl: "https://docs.google.com/document/d/1xFl8I5Da6PL234Mar-r4hnt_YyZFkXnN2DH530hKJCQ/edit?tab=t.0",
    results: ["Underperforming campaigns identified", "A/B testing framework", "Automated dashboards", "Budget allocation shifts"],
    highlights: [
      { icon: FaChartBar, text: "Increased ROAS by 35% across paid social and search channels." },
      { icon: FaRocket, text: "Implemented A/B testing framework for iterative copy/creative optimization." },
      { icon: FaBullhorn, text: "Automated reporting dashboards for real-time tracking of funnel metrics." },
      { icon: FaVideo, text: "Data-driven budget allocation shifts across high-performing ad sets." },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="container-fluid py-5">
      <div className="container px-lg-5">
        
        {/* Customized Dynamic Section Header */}
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="position-relative d-inline text-primary ps-4">Proven Results</h6>
          <h2 className="mt-2">Case Studies</h2>
          <p className="text-muted mt-2 max-w-2xl mx-auto">
            Data-driven audits, competitor intelligence frameworks, and campaign management reports outlining scaling strategies.
          </p>
        </div>

        {/* Case Studies Display Layout Container */}
        <div className="row g-4 justify-content-center mx-auto" style={{ maxWidth: "1140px" }}>
          {caseStudies.map((study, index) => (
            <div key={study.title} className="col-12 col-lg-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
              <div className="case-study-card">
                <div>
                  <div className="case-study-watermark">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <span className="case-study-badge">
                    {study.subtitle}
                  </span>
                  <h4 className="case-study-title">{study.title}</h4>
                  
                  <div className="mb-4">
                    <p className="case-study-results-title">Key Insights / Metrics</p>
                    <div className="case-study-results-grid">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="case-study-result-pill">
                          <span style={{ color: "var(--terracotta)", fontWeight: "bold" }}>✓</span>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="case-study-highlights-title">Audit Highlights</p>
                    <ul className="list-unstyled mb-0">
                      {study.highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <li key={idx} className="case-study-highlight-item">
                            <span className="case-study-icon-wrapper">
                              <Icon size={12} />
                            </span>
                            <span>{item.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <a
                  href={study.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary case-study-btn"
                >
                  Read Full Report <i className="bi bi-box-arrow-up-right ms-1" style={{ fontSize: '11px' }}></i>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}