import React from "react";
import { Card, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./Projects.module.css";

const Projects = () => {
    return (
        <div className={styles.Content}>
            <h1>Recent Projects</h1>
            <hr></hr>
            <div
                className={`${styles.Cards} card-deck d-flex justify-content-center`}
            >
                <Card className={`${styles.Card} bg-black `}>
                    <Card.Body className="text-white">
                        <Card.Title>GrowifyAI</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            An AI-powered PDF to quiz, note-taking and
                            pdf-summarizer app created at Hackathon in Mostar,
                            focusing on enhancing productivity and comprehension
                            while learning. My team and I created a tool that
                            transforms learning material into interactive
                            learning experiences. My significant contribution
                            was to the backend development.
                        </Card.Text>
                        <Button
                            variant="dark"
                            href="https://github.com/Growify-AI/growify-ai"
                        >
                            View Project
                        </Button>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item variant="info">
                            Node.js, MongoDB, Next.js, OpenAI API
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className={`${styles.Card} bg-black `}>
                    <Card.Body className="text-white">
                        <Card.Title>BH-AI - Hackathon</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            The Code Forge team upgraded the BH directory's
                            publications, creating an AI-enhanced app that
                            boosts readability, formatting, multi-language
                            support, and accessibility. Features include
                            generating Mermaid diagrams from database entries,
                            formatting with Markdown, translating to Bosnian and
                            German, and text-to-speech conversion. My backend
                            development contributions made research papers more
                            interactive, enhancing user productivity and
                            comprehension.
                        </Card.Text>
                        <Button
                            variant="dark"
                            href="https://github.com/kosharun/bh-AI"
                        >
                            View Project
                        </Button>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item variant="info">Python, SQL, Next.js</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className={`${styles.Card} bg-black`}>
                    <Card.Body className="text-white">
                        <Card.Title>Restaurant</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            Restaurant App, an intuitive restaurant web
                            application. This project represents my latest raw
                            PHP endeavor, aiming to replicate the ordering
                            process of a real-life restaurant, inspired by the
                            likes of McDonald's.
                        </Card.Text>
                        <Button
                            variant="dark"
                            href="https://github.com/kosharun/Restaurant"
                        >
                            View Project
                        </Button>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item variant="info">
                            Raw PHP, MySql
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
};

export default Projects;
