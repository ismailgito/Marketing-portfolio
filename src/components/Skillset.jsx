const marketingSkills = [
  { icon: "fa-ad", title: "Paid Acquisition (Meta, Google, LinkedIn)", delay: "0.1s", desc: "Scaling multi-channel ad campaigns with a focus on maximizing ROAS, creative testing, and audience segmentation." },
  { icon: "fa-chart-pie", title: "Web Analytics & Attribution", delay: "0.3s", desc: "Setting up server-side tracking (GTM, GA4, Custom APIs) to ensure accurate conversion tracking and data integrity." },
  { icon: "fa-funnel-dollar", title: "Conversion Rate Optimization (CRO)", delay: "0.6s", desc: "A/B testing landing pages, checkout flows, and user journeys to plug funnel leaks and boost customer acquisition." },
  { icon: "fa-envelope-open-text", title: "Retention & Lifecycle Marketing", delay: "0.1s", desc: "Designing automated email/SMS flows to maximize Customer Lifetime Value (LTV) and reduce churn rates." },
  { icon: "fa-search-dollar", title: "Search Engine Marketing (SEM)", delay: "0.3s", desc: "Intent-driven Google Search and Shopping campaign architecture focused on high-converting transactional keywords." },
  { icon: "fa-database", title: "Data Analysis & Reporting", delay: "0.6s", desc: "Building unified client dashboards using Looker Studio and Tableau to visualize Blended ROAS, MER, and CAC." },
];

export default function Skillset() {
  return (
    <div className="container-fluid py-5" id="skills">
      <div className="container px-lg-5">
        <div className="section-title position-relative text-center mb-5 pb-2 DataWowDelay='0.1s'">
          <h6 className="position-relative d-inline text-primary ps-4">Core Expertise</h6>
          <h2 className="mt-2">My Growth & Performance Marketing Skillset</h2>
        </div>
        <div className="row g-4">
          {marketingSkills.map((skill, index) => (
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={skill.delay} key={index}>
              <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className={`fa ${skill.icon} fa-2x`}></i>
                </div>
                <h5 className="mb-3">{skill.title}</h5>
                <p className="mb-0">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}