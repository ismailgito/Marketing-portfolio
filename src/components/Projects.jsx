"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaDownload, FaFilePowerpoint, FaFilePdf } from "react-icons/fa";

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Landing Page A/B Testing & Tracking",
      subtitle: "Conversion Rate Optimization (CRO)",
      description: "Designed, hosted, and A/B tested an acquisition landing page. Set up granular click event tracking via GTM, verified tag firing, and boosted the conversion rate by 32% over 3 iterative data sprints.",
      liveUrl: "https://marketingportfolio7.netlify.app/?utm_source=portfolio&utm_medium=clicks&utm_campaign=portfolio",
      githubUrl: "https://github.com/ismailgito/Landing_page.git",
      downloadOptions: [
        { type: "pdf", label: "Attribution Plan PDF", icon: FaFilePdf, file: "/projects/Landing_page_optimization/Landing_page_UTM_tracking.pdf" },
        { type: "ppt", label: "Slide Deck Presentation", icon: FaFilePowerpoint, file: "/projects/Landing_page_optimization/Optimizing_Performance_and_Attribution.pptx" }
      ]
    },
    {
      id: 2,
      title: "Attribution Tracker & Budget Shifter",
      subtitle: "Analytical Pipeline / Automation",
      description: "Built a multi-channel attribution model comparing linear, position-based, and time-decay structures using Google Sheets & Google Apps Script. Features automatic weekly budget shifts recommendations.",
      liveUrl: "https://multi-channel-attribution-tracker.vercel.app/",
      githubUrl: "https://github.com/ismailgito/multi-channel-attribution-tracker.git",
      downloadOptions: [
        { type: "pdf", label: "Model Methodology PDF", icon: FaFilePdf, file: "/projects/multi-channel-attribution-tracker/Multi-channel-tracker.pdf" },
        { type: "ppt", label: "Growth Prism Deck", icon: FaFilePowerpoint, file: "/projects/multi-channel-attribution-tracker/The_Growth_Prism.pptx" }
      ]
    },
    {
      id: 3,
      title: "LLM Claude Token Optimizer",
      subtitle: "Open Source Utility Tool",
      description: "A browser-based tool translating documents (PDF, Word, PPT) into ultra-clean, structure-preserving markdown. Compresses context sizes by over 90% to prevent context bloat and minimize API fees.",
      liveUrl: "https://claude-token-optimization.vercel.app/",
      githubUrl: "https://github.com/ismailgito/Claude-Token-optimization.git",
      downloadOptions: [
        { type: "pdf", label: "Documentation PDF", icon: FaFilePdf, file: "/projects/Claude-Token-optimization/Claude-Token-Optimization.pdf" },
        { type: "ppt", label: "Product Slide Deck", icon: FaFilePowerpoint, file: "/projects/Claude-Token-optimization/Claude-Token-Optimization.pptx" }
      ]
    },
  ];

  const toggleDownload = (id) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <div className="container-fluid py-5" id="projects">
      <div className="container px-lg-5">
        {/* Dynamic section heading configured for Performance Marketing */}
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="position-relative d-inline text-primary ps-4">Campaign Showcase</h6>
          <h2 className="mt-2">Projects</h2>
          <p className="text-muted mt-2 max-w-2xl mx-auto">
            Active applications, automated sheets scripting, landing page experiments, and pipeline utilities proving practical optimization skills.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s" key={project.id}>
              {/* card implementation matching your portfolio styling wrapper */}
              <div className="card h-100 p-4 border shadow-sm d-flex flex-column justify-content-between bg-white rounded">
                <div>
                  <span className="badge bg-secondary text-light rounded-pill px-3 py-1.5 mb-3 small text-uppercase">
                    {project.subtitle}
                  </span>
                  <h4 className="h5 fw-bold mb-3 mt-2 text-dark">
                    {project.title}
                  </h4>
                  <p className="text-muted small mb-4" style={{ minHeight: '80px' }}>
                    {project.description}
                  </p>
                </div>

                {/* Action panel wrapper inside the matching footer border element style */}
                <div className="mt-3 pt-3 border-top">
                  <div className="d-flex gap-2 mb-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm flex-grow-1 py-2 d-flex align-items-center justify-content-center gap-1"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm flex-grow-1 py-2 d-flex align-items-center justify-content-center gap-1"
                    >
                      <FaGithub size={12} /> GitHub
                    </a>
                  </div>

                  {/* Dropdown panel matching standard interactive conditional parameters */}
                  <div className="w-100">
                    <button
                      onClick={() => toggleDownload(project.id)}
                      className="btn btn-light btn-sm w-100 py-2 d-flex align-items-center justify-content-center gap-1 border"
                    >
                      <FaDownload size={11} /> {openProjectId === project.id ? "Hide Assets" : "Download Assets"}
                    </button>

                    {openProjectId === project.id && (
                      <div className="mt-2 border bg-light p-2 rounded">
                        {project.downloadOptions.map((option, idx) => {
                          const Icon = option.icon;
                          return (
                            <a
                              key={idx}
                              href={option.file}
                              download
                              className="d-flex align-items-center gap-2 p-2 text-decoration-none text-dark small rounded hover:bg-white transition-all mb-1"
                            >
                              <Icon className="text-primary" size={13} />
                              {option.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}