import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/resume.pdf";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);
  const toRotate = ["Java Developer", "Data Analyst", "Tech Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, loopNum, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Sanjith Ram`}{" "}
                <span className="txt-rotate">
                  <br />
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
              Skilled in Java, Python, and Embedded C, with hands-on experience developing AI and IoT-based solutions to real-world problems. Strong foundation in data analytics, business strategy, and technical consulting. Proficient with tools such as SQL, Power BI, Tableau, and Excel. Developed impactful projects in areas including image encryption, voice authentication, gesture recognition, and elderly fall detection.
              </p>
              <button
                onClick={() => window.open(resume, "_blank")}
                className="d-flex align-items-center gap-2 px-4 py-2 bg-primary text-white rounded-3 shadow-lg border-0 hover:bg-blue-700 transition-all"
                style={{ fontSize: "1.1rem", fontWeight: "500" }}
              >
                Check my Resume <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src="/Sanjith.jpg" alt="Profile Img" className="img-fluid rounded-circle shadow-lg" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
