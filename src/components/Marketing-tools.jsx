"use client";

import React from "react";

const toolsList = [
  { name: "Google Ads", src: "/img/google-ads.png" },
  { name: "Meta Ads", src: "/img/meta-ads.png" },
  { name: "Google Analytics 4", src: "/img/ga4.png" },
  { name: "Google Tag Manager", src: "/img/gtm.png" },
  { name: "CRO & Optimization", src: "/img/cro.png" },
];

export default function MarketingTools() {
  // Duplicate tools list to ensure seamless infinite loop scrolling
  const duplicatedToolsList = [...toolsList, ...toolsList, ...toolsList, ...toolsList];

  return (
    <div className="container-fluid py-5" id="tools" style={{ background: "var(--cream)" }}>
      <div className="container px-lg-5">
        
        {/* Section Heading matching other parts of the site */}
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="position-relative d-inline text-primary ps-4">Growth Stack</h6>
          <h2 className="mt-2">Core Performance Marketing Arsenal</h2>
          <p className="text-muted mt-2 max-w-2xl mx-auto">
            The tracking pipelines, ad distribution systems, and analytical frameworks utilized to drive scalable ROAS.
          </p>
        </div>
        
        {/* Ticker Container Wrapper */}
        <div className="ticker-wrap wow fadeInUp" data-wow-delay="0.3s" style={{ background: "var(--sand)", border: "0.5px solid var(--stone)", borderRadius: "12px", padding: "35px 0" }}>
          <div className="ticker-track">
            {duplicatedToolsList.map((tool, idx) => (
              <div className="ticker-item" key={idx}>
                <img
                  src={tool.src}
                  alt={tool.name}
                  title={tool.name}
                  onError={(e) => {
                    // Fallback to text label in case image asset is not uploaded yet
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="ticker-fallback" style={{ display: "none", fontWeight: "600", color: "var(--ash)", textTransform: "uppercase", fontSize: "13px", letterSpacing: "0.05em" }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
