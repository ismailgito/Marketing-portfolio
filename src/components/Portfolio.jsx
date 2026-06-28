"use client";

import { useState, useEffect } from "react";
import { FaChartBar, FaVideo, FaBullhorn, FaRocket, FaCode, FaCookie, FaFilter, FaUsers } from "react-icons/fa";

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
  {
    title: "Creative Intelligence & Competitor Analysis",
    subtitle: "D2C Multi-Channel Creative Strategy",
    notionUrl: "https://docs.google.com/document/d/1QTPWVaEacME0O_8GNg3j0omgGdTYV4AV3ZIlectHM1o/edit?usp=sharing",
    results: ["Cross-channel creative playbook", "High-converting hook frameworks", "Influencer R&D testing model", "Frictionless WhatsApp CTA funnel"],
    highlights: [
      { icon: FaChartBar, text: "Mapped multi-channel funnel strategy across Meta, Google, and TikTok/Reels to align creative style with user intent." },
      { icon: FaRocket, text: "Engineered high-performing hook frameworks (Shock, Attitude, One-Liner) utilizing unpolished, phone-shot UGC to drive authentic engagement." },
      { icon: FaBullhorn, text: "Developed a dual-track audience mapping model, pairing humor-led content for Gen Z/Millennials with education-first messaging for high-intent searchers." },
      { icon: FaVideo, text: "Implemented a cost-efficient 'Ads as R&D' testing framework to validate paid creative cuts before scaling them via organic channels." },
    ],
  },
  {
    title: "GTM Cookie Setup: Filter Internal Traffic from GA4",
    subtitle: "IP-Independent Step-by-Step Guide for Clean Analytics",
    notionUrl: "https://drive.google.com/file/d/1y9a5rxMwLUAeLpf6Liaa0gOhJq8SnFYR/view?usp=sharing", 
    results: [
      "Pristine GA4 data free from internal team traffic",
      "365-day persistent cookie – set once per year",
      "Zero risk of filtering real customers",
      "Works for remote teams with dynamic IPs"
    ],
    highlights: [
      { icon: FaCode, text: "Step-by-step GTM variable and tag setup to read URL parameter and write a persistent 365-day cookie." },
      { icon: FaCookie, text: "Cookie variable integration into GA4 configuration using reserved traffic_type parameter for internal tagging." },
      { icon: FaFilter, text: "GA4 data filter activation with Testing mode for 24–48 hours before permanent Active state." },
      { icon: FaUsers, text: "Simple team onboarding – share one special URL, bookmark it, use incognito for first visit." },
    ],
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // min swipe distance in px
  const minSwipeDistance = 50;

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 992) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const maxIndex = caseStudies.length - itemsPerSlide;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Keep index in bounds on window resize when visible items change
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [itemsPerSlide, maxIndex, currentIndex]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

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

        {/* Case Studies Slider Layout Container */}
        <div className="portfolio-slider-wrapper position-relative mx-auto" style={{ maxWidth: "1140px" }}>
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="slider-arrow slider-arrow-left"
            aria-label="Previous slide"
            disabled={currentIndex === 0}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Slider Viewport */}
          <div 
            className="portfolio-slider-container"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="portfolio-slider-track"
              style={{
                transform: `translate3d(-${currentIndex * (100 / itemsPerSlide)}%, 0, 0)`
              }}
            >
              {caseStudies.map((study, index) => (
                <div 
                  key={study.title} 
                  className="portfolio-slider-item"
                >
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

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="slider-arrow slider-arrow-right"
            aria-label="Next slide"
            disabled={currentIndex >= maxIndex}
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          {/* Slider Dots */}
          <div className="slider-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`slider-dot ${currentIndex === idx ? "active" : ""}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}