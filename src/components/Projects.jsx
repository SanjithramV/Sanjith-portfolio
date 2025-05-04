import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import encryptionImg from "../assets/img/encryption.png"; // placeholder
import travelImg from "../assets/img/travelgpt.png"; // placeholder
import fallImg from "../assets/img/falldetect.png"; // placeholder
import voiceImg from "../assets/img/voiceauth.png"; // placeholder

export const Projects = () => {
  const projects = [
    {
      title: "Secure Digital Signature Image Encryption",
      description:
        "Built a hybrid encryption system using CNN, Quantum Key Distribution (QKD), and chaotic maps to secure signature images against cyber threats. Ensures authentication and confidentiality in digital transactions.",
      imgUrl: encryptionImg,
    },
    {
      title: "AI-Powered Travel Assistant",
      description:
        "Developed a TravelGPT-like web app using computer vision and NLP to suggest destinations and personalize itineraries based on user inputs. Leveraged ML models and real-time APIs for dynamic recommendations.",
      imgUrl: travelImg,
    },
    {
      title: "IoT-based Fall Detection System",
      description:
        "Engineered an IoT solution for elderly safety using ESP8266, MPU6050, and Blynk IoT app. Detected sudden motion using accelerometer data and sent alerts for emergency assistance.",
      imgUrl: fallImg,
    },
    {
      title: "Vocal Authentication System",
      description:
        "Implemented a voice recognition-based secure login system using Python and machine learning. Enabled biometric access through speaker verification techniques.",
      imgUrl: voiceImg,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    My projects reflect my passion for AI, IoT, and secure systems — blending innovation with practical solutions for real-world challenges.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
