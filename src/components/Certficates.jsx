export default function Certficates() {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "udemy",
      date: "Issued Jan 2025 - Expires Jan 2027",
      id: "UC-1f0cf417-cf80-4840-b9a0-6022c71b5f1f",
      icon: "fa-award",
      badgeColor: "bg-primary text-white",
      link: "https://www.udemy.com/certificate/UC-1f0cf417-cf80-4840-b9a0-6022c71b5f1f/"
    },
    {
      title: "Performance Marketing",
      issuer: "Tute dude",
      date: "Issued Mar 2026",
      id: "Credential ID: TD-J.MD-PM-0811",
      icon: "fa-certificate",
      badgeColor: "bg-success text-white",
      link: "https://upskill.tutedude.com/certificate/TD-J.MD-PM-0811"
    },
    {
      title: "Google Analytics (GA4)",
      issuer: "Google",
      date: "Issued Feb 2025",
      id: "Credential ID: GA4-IQ-7731",
      icon: "fa-chart-bar",
      badgeColor: "bg-info text-white",
      link: "https://skillshop.credential.net/c4170a7e-feba-4487-aa93-792f52118202"
    },
    {
      title: "HubSpot Digital Marketing Certification",
      issuer: "Hubspot",
      date: "Issued Nov 2026",
      id: "Credential ID: CXL-CRO-3309",
      icon: "fa-funnel-dollar",
      badgeColor: "bg-warning text-dark",
      link: "https://app-na2.hubspot.com/academy/achievements/4g77fxf7/en/1/mohamed-ismail-j/digital-marketing"
    },
    {
      title: "AI-Powered marketing",
      issuer: "HubSpot",
      date: "Issued Jun 2026",
      id: "Credential ID: 635c14d1af",
      icon: "fa-bullseye",
      badgeColor: "bg-secondary text-white",
      link: "https://static.semrush.com/academy/certificates/635c14d1af/mohamed-ismail-j_26.pdf"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      issuer: "Google",
      date: "Issued Aug 2026",
      id: "Credential ID: 3f7ce6b6-3e5d-4a4b-83d6-d0443254b8c9#acc.n2qSTAul",
      icon: "fa-database",
      badgeColor: "bg-dark text-white",
      link: "https://skillshop.credential.net/3f7ce6b6-3e5d-4a4b-83d6-d0443254b8c9#acc.n2qSTAul"
    }
  ];

  return (
    <div className="container-fluid py-5" id="certifications">
      <div className="container px-lg-5">
        {/* Section Heading */}
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="position-relative d-inline text-primary ps-4">Credentials</h6>
          <h2 className="mt-2">Professional Certifications</h2>
        </div>

        {/* Certifications Grid */}
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div 
              className="col-lg-4 col-md-6 wow zoomIn" 
              data-wow-delay={`${0.1 * (index % 3 + 1)}s`} 
              key={index}
            >
              <div 
                className="card h-100 p-4 border shadow-sm rounded bg-white transition-all hover-translate"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className={`rounded-circle me-3 d-flex align-items-center justify-content-center ${cert.badgeColor}`} 
                    style={{ width: "45px", height: "45px", minWidth: "45px" }}
                  >
                    <i className={`fa ${cert.icon} fa-lg`}></i>
                  </div>
                  <div>
                    <h5 className="mb-0 text-dark fw-bold fs-6">{cert.title}</h5>
                    <small className="text-muted">{cert.issuer}</small>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-top">
                  <p className="small text-muted mb-1">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>{cert.date}
                  </p>
                  <p className="small text-muted mb-3">
                    <i className="fa fa-fingerprint text-primary me-2"></i>{cert.id}
                  </p>
                  <a className="btn btn-outline-primary btn-sm rounded-pill w-100 py-2 fw-medium" href={cert.link}>
                    <i className="fa fa-external-link-alt me-2"></i>Verify Credential
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
