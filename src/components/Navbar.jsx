"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const scrollPosition = window.scrollY + 250; // offset for navbar height
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger on mount to set correct active state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Auto-collapse mobile navigation menu on selection
      setIsNavOpen(false);
    }
  };

  return (
    <div className="container-fluid position-relative p-0" id="home">
      <nav className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-2 py-lg-0 ${isSticky ? "sticky-top shadow-sm" : ""}`}>
        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="navbar-brand p-0">
          <h1 className="m-0 text-nowrap" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <i className="fa fa-chart-line me-2"></i>Mohamed Ismail
          </h1>
        </a>
        <button 
          className="navbar-toggler border-0 p-0" 
          type="button" 
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-controls="navbarCollapse"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          {/* Custom image replaces the old fa-bars icon */}
          <img 
            src="/img/menu-icon.png" 
            alt="Menu" 
            style={{ width: "30px", height: "auto" }} 
          />
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, "home")} 
              className={`nav-item nav-link ${activeSection === "home" ? "active" : ""}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")} 
              className={`nav-item nav-link ${activeSection === "about" ? "active" : ""}`}
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, "skills")} 
              className={`nav-item nav-link ${activeSection === "skills" ? "active" : ""}`}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, "projects")} 
              className={`nav-item nav-link ${activeSection === "projects" ? "active" : ""}`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")} 
              className={`nav-item nav-link ${activeSection === "contact" ? "active" : ""}`}
            >
              Contact
            </a>
          </div>
          <div className="d-flex align-items-center mt-3 mt-lg-0 ms-lg-3">
            <a href="#resume" onClick={(e) => handleNavClick(e, "resume")} className="btn btn-orange-cta text-white rounded-pill py-2 px-4">
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-2 py-lg-5 bg-primary hero-header mb-4 mb-lg-5">
        <div className="container my-1 my-lg-5 py-2 py-lg-5 px-lg-5">
          <div className="row g-5 py-2 py-lg-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white mb-4 animated zoomIn">
                Data-Driven Performance Marketing to Scale Your Revenue & ROAS
              </h1>
              <p className="text-white pb-3 animated zoomIn">
                I specialize in turning ad spend into profitable revenue. By combining predictive data analytics, aggressive A/B testing, and optimized paid acquisition strategies across major ad networks, I help brands acquire high-value customers at a lower CAC.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                <a href="#resume" onClick={(e) => handleNavClick(e, "resume")} className="btn btn-orange-cta py-2 px-4 py-sm-3 px-sm-5 rounded-pill animated slideInLeft text-white">
                  Download Resume
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, "contact")} 
                  className="btn btn-outline-light py-2 px-4 py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                >
                  Let's Talk Growth
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="hero-circle-container animated zoomIn">
                <img className="hero-circle-img" src="/img/Hero.webp" alt="Performance Marketing Analytics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}