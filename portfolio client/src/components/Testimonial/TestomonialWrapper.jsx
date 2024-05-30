import { Col, Container } from "react-bootstrap";
import ShowTestimonial from "./ShowTestimonial";
import TestimonialForm from "./TestimonialForm";

const TestimonialWrapper = () => {
  return (
    <Container fluid className="testimonial-section">
      <Container>
        <Col style={{ justifyContent: "center", padding: "10px" }}>
          <h1
            style={{
              fontSize: "2.1em",
              paddingBottom: "20px",
              // marginLeft: "4.5rem",
            }}
          >
            Help Us To <strong className="purple">Improve</strong>
          </h1>
          <TestimonialForm />
          <ShowTestimonial />
        </Col>
      </Container>
    </Container>
  );
};

export default TestimonialWrapper;
