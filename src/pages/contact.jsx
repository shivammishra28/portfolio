import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        name :"",
        email :"",
        message :""
    };

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.success || result.error);
    } catch (error) {
        alert("Error sending message!");
        console.error(error);
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
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
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
						Thank you for your interest in getting in touch with me. If you have any
						questions, feedback, or just want to say hello, feel free to fill out the
						form below 
					
						. I aim to reply within 24 hours.
					</p>

					{/* Contact Form */}
					<div className="form-wrapper">
						<form  className="contact-form">
							<div className="form-group">
								<label>Name</label>
								<input type="text"  name="name" placeholder="Your name" />
							</div>

							<div className="form-group">
								<label>Email</label>
								<input type="email" name="email" placeholder="Your email" />
							</div>

							<div className="form-group">
								<label>Message</label>
								<textarea rows="4" name="message" placeholder="Your message" />
							</div>

							<button type="submit" className="submit-button">
								Send Message
							</button>
						</form>
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
