import React from "react";
import "./ContactSection.css";
import transition from '../../../transition';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-section-header">
                <h2>Get In Touch</h2>
                <p>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
            </div>

            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">
                    <h3 className="contact-title">Contact Info</h3>
                    <p className="contact-description">
                        Feel free to reach out — I typically respond within 24 hours.
                    </p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="icon-container">🏠</div>
                            <div>
                                <h4>College Station, Texas</h4>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="icon-container">📧</div>
                            <div>
                                <p className="contact-detail-text">Use the contact form below to send me an email.</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="icon-container">💼</div>
                            <div>
                                <h4>Open to SWE internships/full-time SWE roles</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default transition(ContactSection);
