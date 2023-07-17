import React from "react";
import styles from "./Top.module.css";
import myImage from "../portfolio.png";

const Top = () => {
	return (
		<section className={styles.topSection} id="top">
			<div className={styles.text}>
				<h1>Hello, </h1>
				<h1>I am Harun</h1>
				<p>A passionate full-stack developer.</p>
			</div>
			<div className={styles.aboutImage}>
				<img src={myImage} alt="My Image" />
			</div>
		</section>
	);
};

export default Top;
