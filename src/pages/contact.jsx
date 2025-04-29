import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { databases, ID } from "../data/appwrite"; // Assuming you have appwrite setup here

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState(""); // For feedback message

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage(""); // Reset previous status message

        try {
            // Pass data as a property of the second argument
            await databases.createDocument(
                process.env.REACT_APP_APPWRITE_DATABASE_ID, // Database ID
                process.env.REACT_APP_APPWRITE_COLLECTION_ID, // Collection ID
                ID.unique(),
                {
                    name: formData.name, // Name Attribute ID
                    email: formData.email, // Email Attribute ID
                    message: formData.message, // Message Attribute ID
                }
            );

            setStatusMessage("Message sent successfully!"); // Success feedback
            setFormData({ name: "", email: "", message: "" }); // Reset form
        } catch (error) {
            console.error(error);
            setStatusMessage("Error sending message!"); // Error feedback
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "contact");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Contact | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO?.description || "Contact page"} />
                <meta name="keywords" content={currentSEO?.keywords.join(", ") || ""} />
            </Helmet>

            <div className="contact-page">
                <NavBar active="contact" />

                <div className="contact-container">
                    <div className="logo-fixed">
                        <Logo width={46} />
                    </div>

                    <h2 className="contact-title">
                        <span className="highlight">Get in Touch</span>
                    </h2>

                    <p className="contact-description">
                        Thank you for your interest in getting in touch with me.
                        Fill out the form below and I will get back to you within 24 hours.
                    </p>

                    {/* Contact Form */}
                    <div className="form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    minLength="3"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-button">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Status Message */}
                    <div className="status-message">
                        {statusMessage && <p>{statusMessage}</p>}
                    </div>
                </div>

                <div className="page-footer">
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;
