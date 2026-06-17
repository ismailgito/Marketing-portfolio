"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    
    const handleScroll = () => {
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
      const navbarCollapse = document.getElementById("navbarCollapse");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    }
  };

  return (
    <div className="container-fluid position-relative p-0" id="home">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-chart-line me-2"></i>Mohamed Ismail
          </h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
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
          {/* Replaced generic search with a marketing target icon for theme consistency */}
          <button type="button" className="btn text-secondary ms-3">
            <i className="fa fa-bullseye"></i>
          </button>
          <a href="#resume" onClick={(e) => handleNavClick(e, "resume")} className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">
            Download Resume
          </a>
        </div>
      </nav>

      <div className="container-fluid py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white mb-4 animated zoomIn">
                Data-Driven Performance Marketing to Scale Your Revenue & ROAS
              </h1>
              <p className="text-white pb-3 animated zoomIn">
                I specialize in turning ad spend into profitable revenue. By combining predictive data analytics, aggressive A/B testing, and optimized paid acquisition strategies across major ad networks, I help brands acquire high-value customers at a lower CAC.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                <a href="#resume" onClick={(e) => handleNavClick(e, "resume")} className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInLeft">
                  Download Resume
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, "contact")} 
                  className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                >
                  Let's Talk Growth
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="hero-circle-container animated zoomIn">
                <img className="hero-circle-img" src="/img/hero.webp" alt="Performance Marketing Analytics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}