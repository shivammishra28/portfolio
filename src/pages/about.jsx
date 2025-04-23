import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import Skills from "../components/MySkills/Skills";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>


							{/* <div className="about-socials">
									<Socials />
								</div> */}
						</div>
						<div className="button-group">
							<a href="/assets/SHIVAM MISHRA CV.pdf" className="btn" download="Shivam_Mishra_Resume.pdf">
								Resume <FiDownload />
							</a>
							<a href="https://www.linkedin.com/in/shivam-mishra-b409a8281" className="btn">
								Linkedin <FaLinkedin />
							</a>
							<a href="https://www.github.com/shivammishra28" className="btn">
								Github <FaGithub />
							</a>
							<a href="https://x.com/shivammishra18_" className="btn">
								Twitter <FaXTwitter />
							</a>
						</div>
					</div>
					<div>
						<Skills />
					</div>
					{/* <div className="about-socials-mobile">
							<Socials />
						</div> */}
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>

		</React.Fragment>
	);
};

export default About;
