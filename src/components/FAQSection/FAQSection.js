import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import "./FAQSection.css";

import rightArrow from "../../assets/icons/arrow_right.svg";

const accordionData = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    question: "Can I download the course materials for offline access?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <section className="faqs container rounded-3 bg-white p-4 p-lg-5 mt-5">
      <>
        <Row className="g-4">
          <Col sm={4}>
            <h1>Frequently Asked Questions</h1>
            <p className="text-grey-20">
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <Button className="btn bg-white border-white-95 p-3 mt-3 text-black ">
              See All FAQ’s
            </Button>
          </Col>
          <Col sm={1}></Col>
          <Col sm={7}>
            <Accordion open={open} toggle={toggle} className="faqs">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  className="faq p-3 rounded-3 border-white-95 border-top"
                >
                  <AccordionHeader targetId={index.toString()}>
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody accordionId={index.toString()}>
                    <hr />
                    <p className="mb-5">{item.answer}</p>
                    <div className="d-flex justify-content-center align-items-center bg-white-97 border-white-95 p-3 rounded-3">
                      <h6 className="d-inline">
                        Enrollment Process for Different Courses
                      </h6>
                      <img
                        src={rightArrow}
                        alt=""
                        className="bg-white rounded-5 p-1 ms-auto"
                      />
                    </div>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </>
    </section>
  );
};

export default FAQSection;
