"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ismailgito",
      username: "github.com/ismailgito",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/mohamed-ismail-2700a2257/",
      username: "linkedin/mohamed-ismail",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/919384222784",
      username: "+91 93842 22784",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          
          {/* Bio Column */}
          <div className="col-md-6 col-lg-4">
            <h5 className="text-white mb-4 uppercase tracking-wider font-weight-bold">
              MOHAMED ISMAIL
            </h5>
            <div className="text-light small lh-base">
              <p className="mb-3">
                <span className="font-weight-bold text-white">Performance Marketing Specialist</span> focused on driving
                high-integrity campaign architectures, lead acquisition systems, and ROAS scaling protocols.
              </p>
              <p className="mb-0">
                I configure custom analytics tracking (GTM, GA4, CAPI), optimize landing page pipelines, deploy creative A/B testing matrixes,
                and scale paid budgets to maximize conversion value.
              </p>
            </div>
          </div>

          {/* Social Connections */}
          <div className="col-md-6 col-lg-4">
            <h5 className="text-white mb-4 uppercase tracking-wider font-weight-bold">
              Connection Endpoints
            </h5>
            <div className="d-flex flex-column gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 p-3 rounded bg-white text-dark text-decoration-none shadow-sm hover:bg-light transition-all"
                  >
                    <div className="btn-square bg-primary text-white rounded flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <h6 className="mb-0 text-dark font-weight-bold small uppercase">{social.name}</h6>
                      <p className="mb-0 text-muted extra-small" style={{ fontSize: '11px' }}>{social.username}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Direct Email Inquiry */}
          <div className="col-md-6 col-lg-4">
            <h5 className="text-white mb-4 uppercase tracking-wider font-weight-bold">
              Direct Inquiries
            </h5>
            <div className="bg-white p-4 rounded shadow-sm d-flex flex-column justify-content-between hover:shadow transition-all" style={{ minHeight: '180px' }}>
              <div>
                <div className="btn-square bg-warning text-dark rounded mb-3 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
                  <FaEnvelope size={14} />
                </div>
                <h6 className="text-dark font-weight-bold small uppercase mb-1">Send an Email</h6>
                <a
                  href="mailto:dadobeb553@gmail.com"
                  className="text-primary font-weight-bold text-decoration-none break-all"
                  style={{ fontSize: '14px' }}
                >
                  dadobeb553@gmail.com
                </a>
              </div>
              <p className="text-muted mb-0 mt-3" style={{ fontSize: '11px' }}>
                Avg response time: &lt; 24 hours
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar Component */}
      <div className="container px-lg-5">
        <div className="copyright py-4 border-top border-secondary mt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 small uppercase text-white-50">
              &copy; {currentYear} MOHAMED ISMAIL // ALL RIGHTS RESERVED.
            </div>
            <div className="col-md-6 text-center text-md-end font-weight-bold text-warning small tracking-wider">
              DATA-DRIVEN PERFORMANCE ARCHITECTURE
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Sticky Back to Top Arrow */}
      <a href="#" className="btn btn-lg btn-warning btn-lg-square back-to-top pt-2 shadow">
        <i className="bi bi-arrow-up text-dark"></i>
      </a>
    </div>
  );
}