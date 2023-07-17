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
						<Card.Title>Assembly Tracker</Card.Title>
						<hr></hr>
						<Card.Text>
							Assembly Tracker is a web app, made for tracking
							team meetings. App's purpose is to be helpful to
							teams or organizations that have meetings regularly.
						</Card.Text>
						<Button
							variant="dark"
							href="https://github.com/kosharun/Assembly-Tracker"
						>
							View Project
						</Button>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item variant="info">Django</ListGroup.Item>
					</ListGroup>
				</Card>
				<Card className={`${styles.Card} bg-black`}>
					<Card.Body className="text-white">
						<Card.Title>Quiz App</Card.Title>
						<hr></hr>
						<Card.Text>
							An interactive and open web app that allows a user
							to create his personal quiz with questions and
							options.
						</Card.Text>
						<Button
							variant="dark"
							href="https://github.com/kosharun/quiz-app"
						>
							View Project
						</Button>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item variant="info">
							React, Firebase
						</ListGroup.Item>
					</ListGroup>
				</Card>
				<Card className={`${styles.Card} bg-black`}>
					<Card.Body className="text-white">
						<Card.Title>A Movie Database</Card.Title>
						<hr></hr>
						<Card.Text>
							A web application that allows users to browse and
							search for movies, view movie details and ratings,
							and leave reviews. This was a group project with my buddies.
						</Card.Text>
						<Button
							variant="dark"
							href="https://github.com/kosharun/a-movie-database"
						>
							View Project
						</Button>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item variant="info">
							Django
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</div>
		</div>
	);
};

export default Projects;
