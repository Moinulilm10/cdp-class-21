import { Col, Container } from "react-bootstrap";

const Experience = () => {
  return (
    <Container fluid className="experience-section">
      <Col>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-[26px]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-start gap-3 lg:items-center">
                <h4 className="items-center font-sans text-2xl font-normal leading-6">
                  Job Title
                </h4>
                <div className="flex flex-col items-start gap-2 lg:items-end">
                  <h5 className="font-normal text-[16px] leading-5">
                    Qwik It Services
                  </h5>
                  <hr className="w-[196px] hidden lg:visible  border-2 border-[#ffff]" />
                  <h3 className="font-sans text-base font-normal leading-6">
                    Apr 2018 - Dec 2022
                  </h3>
                </div>
              </div>
            </div>
            {/* vertical line */}
            <div className="lg:h-[174px] h-0 w-full lg:w-0  border border-[#ffff]">
              <div></div>
            </div>
            {/* vertical line */}
            <div
              style={{ height: "174px", width: "682px" }}
              className="p-0 pr-24 space-y-5"
            >
              <ul
                style={{ textAlign: "justify", textJustify: "inter-word" }}
                className="flex flex-col items-start justify-start pl-5 overflow-auto list-disc custom-style lg:overflow-hidden"
              >
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-[26px]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-start gap-3 lg:items-center">
                <h4 className="items-center font-sans text-2xl font-normal leading-6">
                  Job Title
                </h4>
                <div className="flex flex-col items-start gap-2 lg:items-end">
                  <h5 className="font-normal text-[16px] leading-5">
                    Qwik It Services
                  </h5>
                  <hr className="w-[196px] hidden lg:visible  border-2 border-[#ffff]" />
                  <h3 className="font-sans text-base font-normal leading-6">
                    Apr 2018 - Dec 2022
                  </h3>
                </div>
              </div>
            </div>
            {/* vertical line */}
            <div className="lg:h-[174px] h-0 w-full lg:w-0  border border-[#ffff]">
              <div></div>
            </div>
            {/* vertical line */}
            <div
              style={{ height: "174px", width: "682px" }}
              className="p-0 pr-24 space-y-3.5"
            >
              <ul
                style={{ textAlign: "justify", textJustify: "inter-word" }}
                className="flex flex-col items-start justify-start pl-5 overflow-auto list-disc custom-style lg:overflow-hidden"
              >
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet vestibulum felis vivamus facilisis ligula
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Experience;
