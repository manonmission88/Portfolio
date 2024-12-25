import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">
                    <h2 className="contact-title">CONTACT ME </h2>
                    <p className="contact-description">
                        Feel free to reach out !
                    </p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="icon-container">🏠</div>
                            <div>
                                <h4>Washington,D.C,20009</h4>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="icon-container">📞</div>
                            <div>
                                <h4>+1 (202) 696-7172</h4>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="icon-container">📧</div>
                            <div>
                                <h4>manish.niure@bison.howard.edu</h4>
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
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
