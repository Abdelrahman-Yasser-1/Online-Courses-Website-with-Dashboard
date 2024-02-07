import { Row } from "reactstrap";

import SectionHeader from "../UI/SectionHeader";
import BenefitCard from "./BenefitCard";

const BenefitsSection = () => {
  const benefitsData = [
    {
      number: "01",
      title: "Flexible Learning Schedule",
      description:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      number: "02",
      title: "Expert Instruction",
      description:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      number: "03",
      title: "Diverse Course Offerings",
      description:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      number: "04",
      title: "Updated Curriculum",
      description:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      number: "05",
      title: "Practical Projects and Assignments",
      description:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      number: "06",
      title: "Interactive Learning Environment",
      description:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

  const title = "Benefits";
  const description =
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.";

  return (
    <>
      <SectionHeader title={title} description={description} />
      <section className="benefits container mt-3">
        <Row className="row-cols-1 row-cols-lg-3 row-cols-md-2 g-3 g-lg-3">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </Row>
      </section>
    </>
  );
};

export default BenefitsSection;
