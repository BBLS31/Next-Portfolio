import React from 'react'
import Layout from '../components/Layout'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from 'next/link';

export default function Projects() {
  return (
    <Layout>
      <div>
        <h3 className="header">
          Here are some of the projects I've been working on :
        </h3>
        <div className="card-container">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Screenshot (243).png" />

            <Card.Body>
              <Card.Title>iSearch</Card.Title>
              <Card.Text>
                An Express server was created using the itunes api so that each
                search or saved result can be pushed to being diplayed on the
                react front-end side of thr project.
              </Card.Text>
              <Link href="https://github.com/BBLS31/iSearch">
                <Button variant="primary">Go to project</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Screenshot (244).png" />
            <Card.Body>
              <Card.Title>Wordle Guesser</Card.Title>
              <Card.Text>
                A random word generator api was used to get the words needed for
                the game and the rest of the project was made using the
                Javascript framework React.
              </Card.Text>
              <Link href="https://github.com/BBLS31/Wordle-Guesser">
                <Button variant="primary">Go to project</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Screenshot (247).png" />
            <Card.Body>
              <Card.Title>My Nextjs Portfolio</Card.Title>
              <Card.Text>
                A portfolio made using nextjs and styled using styled-jsx
              </Card.Text>
              <Link href="https://github.com/BBLS31/Next-Portfolio.git">
                <Button variant="primary">Go to project</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <p className="footer">
          For more projects, see my
          <Link href="https://github.com/BBLS31"> Github page</Link>
        </p>
      </div>

      <style jsx>{`
        .card-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 5rem;
          position: relative;
          top: 220px;
          text-align: center;
          height: 300px;
        }

        .header {
          position: absolute;
          top: 130px;
          left: 20%;
          color: white;
        }

        .footer {
          color: white;
          position: fixed;
          bottom: 0;
          width: 100%;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}
