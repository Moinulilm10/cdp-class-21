import { Col, Container } from "react-bootstrap";
import ShowTestimonial from "./ShowTestimonial";
import TestimonialForm from "./TestimonialForm";

const TestimonialWrapper = () => {
  return (
    <Container fluid className="testimonial-section">
      <Container>
        <Col style={{ justifyContent: "center", padding: "10px" }}>
          <TestimonialForm />
          <ShowTestimonial />
        </Col>
      </Container>
    </Container>
  );
};

export default TestimonialWrapper;
