import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../cards/ExperienceCard";
import { experiences } from "../data/constants";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="experience-bx">
              <h2>Experience</h2>
              <p>
                I have gained hands-on experience in data analysis, Java development, and embedded systems
                through internships and academic projects. My work includes automating antenna measurement 
                systems using LabVIEW and Python, and developing AI-based travel assistance tools. 
                I focus on solving real-world problems using data-driven approaches and scalable software.
              </p>
              <VerticalTimeline>
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                  />
                ))}
              </VerticalTimeline>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
