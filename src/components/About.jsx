export default function About() {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="section-title position-relative mb-4 pb-2">
              <h6 className="position-relative text-primary ps-4">About Me</h6>
              <h2 className="mt-2">A Performance Marketer with 10 Years of Scaling Experience</h2>
            </div>
            <p className="mb-4">
              I don't just buy ad space; I purchase profitable growth. With over a decade of deep execution experience in media buying and growth marketing, I build scalable customer acquisition frameworks for fast-growing businesses. My methodology bridges the gap between creative storytelling and hard analytics.
            </p>
            <div className="row g-3">
              <div className="col-sm-6">
                <h6 className="mb-3"><i className="fa fa-percentage text-primary me-2"></i>ROAS Focused</h6>
                <h6 className="mb-0"><i className="fa fa-users text-primary me-2"></i>High-Value Retention</h6>
              </div>
              <div className="col-sm-6">
                <h6 className="mb-3"><i className="fa fa-crosshairs text-primary me-2"></i>Laser-Targeted Audiences</h6>
                <h6 className="mb-0"><i className="fa fa-chart-line text-primary me-2"></i>Transparent Reporting</h6>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-3 mt-4 justify-content-center justify-content-lg-start">
              <a className="btn btn-primary rounded-pill px-4" href="/contact">Book Strategy Session</a>
              <div className="d-flex gap-2">
                <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              className="img-fluid wow zoomIn rounded-3 shadow-lg" 
              data-wow-delay="0.5s" 
              src="/img/profile.webp" 
              alt="Mohamed Ismail Profile" 
              style={{ maxHeight: "480px", width: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}