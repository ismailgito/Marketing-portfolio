export default function Resume() {
  return (
    <div className="container-fluid py-5" id="resume">
      <div className="container px-lg-5">
        {/* Download CTA Panel */}
        <div className="row mt-5 justify-content-center wow fadeInUp" data-wow-delay="0.2s">
          <div className="col-lg-8 text-center bg-light p-5 rounded shadow-sm border">
            <h4 className="mb-3 text-dark">Need a PDF Copy of My Full Resume?</h4>
            <p className="text-muted mb-4">
              Click below to download my comprehensive resume detailing campaigns, growth metrics, and detailed attribution workflows.
            </p>
            <a href="/resume.pdf" download="Mohamed_Ismail_Resume.pdf" className="btn btn-orange-cta rounded-pill py-3 px-5 shadow text-white">
              <i className="fa fa-download me-2"></i>Download Resume PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
