import React from "react";
import styles from "./Footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
	return (
		<div className={`container ${styles.footerContainer}`}>
			<footer
				className={`text-center text-lg-start text-white ${styles.footer}`}
			>
				<div className="col-lg-3 col-md-6 mb-4 mb-md-0 mx-auto">
					<div>
						<img
							src="https://avatars.githubusercontent.com/u/121234919?v=4"
							className={`rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto `}
							height="120"
							alt=""
							loading="lazy"
						/>
					</div>
					<p className="text-center">
						KOS HARUN
					</p>
					<ul
						className={`list-unstyled d-flex flex-row justify-content-center ${styles.socialIcons}`}
					>
						<li>
							<a
								className="text-white px-2"
								href="https://www.facebook.com/kos.harun/"
							>
								<i className="fab fa-facebook-square"></i>
							</a>
						</li>
						<li>
							<a
								className="text-white px-2"
								href="https://www.instagram.com/kosharunn/"
							>
								<i className="fab fa-instagram"></i>
							</a>
						</li>
						<li>
							<a
								className="text-white ps-2"
								href="https://github.com/kosharun"
							>
								<i className="fab fa-github"></i>
							</a>
						</li>
						<li>
							<a
								className="text-white px-2"
								href="https://www.linkedin.com/in/harun-kos/"
							>
								<i className="fab fa-linkedin"></i>
							</a>
						</li>
					</ul>
					<br></br>
					<br></br>
					<h5 className="text-center text-uppercase mb-4">Contact</h5>
					<ul
						className={`list-unstyled text-center ${styles.footerLinks}`}
					>
						<li>
							<p>
								<i className="fas fa-map-marker-alt pe-2"></i>
								Bosnia and Herzegovina
							</p>
						</li>
						<li>
							<p>
								<i className="fas fa-envelope pe-2 mb-0"></i>
								kosharun04@gmail.com
							</p>
						</li>
					</ul>
					<div className={`text-center p-3 ${styles.footerText}`}>
						© 2023 Kos Harun. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
