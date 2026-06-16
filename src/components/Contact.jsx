'use client'; // Keeping form handling component execution client side

import { useState } from 'react';

// Put your Web3Forms Access Key here. You can also use an environment variable.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ success: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage({ success: null, message: '' });

    const formData = new FormData(e.target);
    // Add the Web3Forms access key to the form data payload
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage({
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        e.target.reset();
      } else {
        setResponseMessage({
          success: false,
          message: data.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setResponseMessage({
        success: false,
        message: "An error occurred while sending your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="position-relative d-inline text-primary ps-4">Contact Us</h6>
              <h2 className="mt-2">Contact For Any Query</h2>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <h4 className="text-center mb-4">
                Receive messages instantly with our contact form setup.
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        name="subject" 
                        placeholder="Subject" 
                        required 
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea 
                        className="form-control" 
                        placeholder="Leave a message here" 
                        id="message" 
                        name="message" 
                        style={{ height: "150px" }} 
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button 
                      className="btn btn-primary w-100 py-3" 
                      type="submit" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Messages */}
              {responseMessage.success !== null && (
                <div className={`alert ${responseMessage.success ? 'alert-success' : 'alert-danger'} mt-4 text-center`} role="alert">
                  {responseMessage.success ? (
                    <i className="fa fa-check-circle me-2"></i>
                  ) : (
                    <i className="fa fa-exclamation-triangle me-2"></i>
                  )}
                  {responseMessage.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}