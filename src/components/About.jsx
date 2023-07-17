import React from "react";
import { Container } from "react-bootstrap";
import styles from "./About.module.css";

const About = () => {
	return (
		<section className={styles.aboutSection} id="about">
			<Container>
				<hr></hr>
				<div className={styles.aboutContent}>
					<div className={styles.aboutText}>
						<h2>About Me</h2>
						<br></br>
						<br></br>
						<br></br>

						<p>
							Hi, my name is Kos Harun. I am a developer who
							creates beautiful and functional websites, works
							with databases, and constantly expands knowledge in
							programming. My programming journey started with
							learning the C++ programming language. Now, with a
							strong foundation in C++, C, Python, and Web
							Development, along with attending and winning
							competitions and putting in hard work, I am always
							ready to provide innovative solutions. Currently, I
							am preparing for my Software Engineering College.
							The goal is to continue learning and growing as a
							programmer and to make a positive impact in the
							field!
						</p>
					</div>
				</div>
				<hr></hr>
			</Container>
		</section>
	);
};

export default About;
