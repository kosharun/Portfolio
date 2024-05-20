import React from "react";
import { Container } from "react-bootstrap";
import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.aboutSection} id="about">
            <Container>
                <hr className={styles.hr}></hr>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h2>About Me</h2>
                        <br></br>
                        <br></br>
                        <br></br>

                        <p>
                            Hi, my name is Kos Harun. I am a developer who
                            creates beautiful and functional websites, and
                            constantly expands knowledge. Current interests: AI,
                            Node.js, Next.js 
							<br></br><br></br>CERTIFICATES<br></br>Participation and 5th place
                            HACKATHON hosted by Best Mostar 2024, Volunteering for
                            Hammer IT Zenica 2023 <br></br><br></br>AWARDS<br></br> First
                            place at Coding Summer School Hackathon Zenica 2023
                        </p>
                    </div>
                </div>
                <hr className={styles.hr}></hr>
            </Container>
        </section>
    );
};

export default About;
