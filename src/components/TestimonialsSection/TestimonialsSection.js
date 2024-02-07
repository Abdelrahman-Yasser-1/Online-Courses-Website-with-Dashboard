import React from "react";
import { Row, Col } from "reactstrap";
import TestimonialCard from "./TestimonialCard ";
import SectionHeader from "../UI/SectionHeader";

// Assets
import testimonial1Image from "../../assets/img/testimonials1.png";
import testimonial2Image from "../../assets/img/testimonials2.png";
import testimonial3Image from "../../assets/img/testimonials3.png";
import testimonial4Image from "../../assets/img/testimonials4.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      author: "Sarah L",
      image: testimonial1Image,
    },
    {
      text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!!",
      author: "Jason M",
      image: testimonial2Image,
    },
    {
      text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      author: "Emily R",
      image: testimonial3Image,
    },
    {
      text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      author: "Michael K",
      image: testimonial4Image,
    },
  ];

  const title = "Our Testimonials";
  const description =
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.";

  return (
    <>
      <SectionHeader title={title} description={description} />
      <section className="testimonials container my-5">
        <Row className="row-cols-1 row-cols-lg-2 g-3 g-lg-3">
          {testimonials.map((testimonial, index) => (
            <Col key={index} sm="6" lg="6">
              <TestimonialCard {...testimonial} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default TestimonialsSection;
