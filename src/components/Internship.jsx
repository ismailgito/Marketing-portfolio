"use client";

import React, { useState } from "react";
import { FaDownload, FaEye, FaAward, FaBuilding, FaCalendarAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Internship() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="container-fluid py-5" id="internship" style={{ background: "var(--cream)" }}>
      <div className="container px-lg-5">
        
        {/* Section Heading */}
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="position-relative d-inline text-primary ps-4">Experience</h6>
          <h2 className="mt-2">Professional Internship</h2>
        </div>

        <div className="row g-5 align-items-center">
          
          {/* Details Card */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="card p-4 p-md-5 border shadow-sm bg-white rounded">
              <div className="d-flex align-items-center mb-4 pb-2 border-bottom">
                <div 
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" 
                  style={{ width: "50px", height: "50px", minWidth: "50px" }}
                >
                  <FaAward size={20} />
                </div>
                <div>
                  <h4 className="mb-0 text-dark fw-bold h5">Sales & Marketing Intern</h4>
                  <small className="text-muted">Ifelse Techsmart Solutions Pvt Ltd</small>
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <FaBriefcase className="text-primary mt-1" size={14} style={{ minWidth: "14px" }} />
                    <div>
                      <span className="small text-muted d-block uppercase tracking-wider" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>Department</span>
                      <span className="text-dark font-weight-bold" style={{ fontSize: "14px" }}>Sales & Marketing</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <FaCalendarAlt className="text-primary mt-1" size={14} style={{ minWidth: "14px" }} />
                    <div>
                      <span className="small text-muted d-block uppercase tracking-wider" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>Duration</span>
                      <span className="text-dark font-weight-bold" style={{ fontSize: "14px" }}>12 Weeks (From 16.08.2023)</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <FaGraduationCap className="text-primary mt-1" size={14} style={{ minWidth: "14px" }} />
                    <div>
                      <span className="small text-muted d-block uppercase tracking-wider" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>Academic Program</span>
                      <span className="text-dark font-weight-bold" style={{ fontSize: "14px" }}>B.B.A. (Business Administration)</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <FaBuilding className="text-primary mt-1" size={14} style={{ minWidth: "14px" }} />
                    <div>
                      <span className="small text-muted d-block uppercase tracking-wider" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>College Affiliation</span>
                      <span className="text-dark font-weight-bold" style={{ fontSize: "14px" }}>The New College</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light p-3 rounded mb-4 border" style={{ borderStyle: "dashed" }}>
                <p className="small text-dark mb-1 font-weight-bold">Performance & Conduct Review:</p>
                <p className="small text-muted mb-0">
                  Evaluated behavior during the 12-week program was rated as <strong>Good</strong> under the supervision of CEO <strong>Mohammed Aadil H.</strong>
                </p>
              </div>

              <div className="d-flex gap-2 flex-wrap">
                <a 
                  href="/Internship.pdf" 
                  download="Mohammed_Ismail_Internship_Certificate.pdf"
                  className="btn btn-secondary flex-grow-1 py-3 px-4 d-flex align-items-center justify-content-center gap-2"
                >
                  <FaDownload size={14} /> Download Certificate PDF
                </a>
                <button 
                  onClick={() => setShowPreview(!showPreview)} 
                  className="btn btn-outline-primary py-3 px-4 d-flex align-items-center justify-content-center gap-2"
                  aria-label="Toggle certificate preview"
                >
                  <FaEye size={14} /> {showPreview ? "Hide Preview" : "View Preview"}
                </button>
              </div>
            </div>
          </div>

          {/* Certificate Preview Card */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="card p-3 border shadow-sm bg-white rounded overflow-hidden text-center h-100 d-flex flex-column justify-content-center" style={{ minHeight: "350px" }}>
              {showPreview ? (
                <div className="position-relative animate-fadeIn">
                  <img 
                    src="/certificates/internship-certificate.jpg" 
                    alt="Internship Certificate Preview" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: "420px", objectFit: "contain", width: "100%" }}
                  />
                </div>
              ) : (
                <div 
                  className="p-5 bg-light rounded d-flex flex-column align-items-center justify-content-center"
                  style={{ minHeight: "320px", cursor: "pointer", border: "1px dashed var(--stone)" }}
                  onClick={() => setShowPreview(true)}
                >
                  <div 
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3" 
                    style={{ width: "60px", height: "60px" }}
                  >
                    <FaAward size={24} />
                  </div>
                  <h5 className="text-dark font-weight-bold mb-2">Completion Certificate</h5>
                  <p className="small text-muted mb-3">Click here to render the interactive image preview of the certificate</p>
                  <button className="btn btn-outline-primary btn-sm py-2 px-3">
                    Show Document Preview
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
