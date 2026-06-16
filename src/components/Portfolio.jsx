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
        <div className="d-flex flex-column gap-4 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="card p-4 md:p-5 border shadow-sm bg-white rounded hover:shadow transition-all wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="row g-4 align-items-start">
                
                {/* Column 1: Title + Counter Number */}
                <div className="col-12 col-md-3 d-flex align-items-start gap-3">
                  <span className="display-6 font-weight-bold text-primary lh-1 shrink-0">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h5 className="font-weight-bold text-dark mb-1 leading-tight">{study.title}</h5>
                    <span className="badge bg-secondary text-light rounded-pill px-2.5 py-1 mt-1 small text-uppercase">
                      {study.subtitle}
                    </span>
                  </div>
                </div>

                {/* Column 2: Key Metrics Box */}
                <div className="col-12 col-md-3">
                  <div className="bg-light p-3 border rounded h-100">
                    <p className="font-weight-bold text-primary tracking-wider mb-2 uppercase" style={{ fontSize: '10px' }}>
                      Key Results
                    </p>
                    <ul className="list-unstyled mb-0 space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-dark small d-flex align-items-start gap-2 mb-1.5">
                          <span className="text-secondary small">◆</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 3: Audit Highlights */}
                <div className="col-12 col-md-4">
                  <p className="font-weight-bold text-muted tracking-wider mb-2 uppercase" style={{ fontSize: '10px' }}>
                    Campaign Details
                  </p>
                  <ul className="list-unstyled mb-0">
                    {study.highlights.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <li key={idx} className="d-flex gap-2 text-muted small mb-2 align-items-start">
                          <Icon className="mt-1 shrink-0 text-primary" size={13} />
                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Column 4: External Interactive CTA Trigger */}
                <div className="col-12 col-md-2 text-md-end d-flex align-items-start h-100 justify-content-md-end">
                  <a
                    href={study.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm w-100 w-md-auto py-2 px-3 font-weight-bold rounded d-flex align-items-center justify-content-center gap-1"
                  >
                    Read Report <i className="bi bi-box-arrow-up-right ms-1" style={{ fontSize: '10px' }}></i>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}