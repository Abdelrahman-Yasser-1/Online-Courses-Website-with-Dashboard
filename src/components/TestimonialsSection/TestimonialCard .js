import { Card, Button } from "reactstrap";

const TestimonialCard = ({ text, author, image }) => {
  return (
    <Card
      className="rounded-3 bg-white border-white-95"
      style={{ minHeight: 300 }}
    >
      <p className="text-grey-30 pt-5 ps-5 pe-5 m-0">{text}</p>
      <div className="d-flex align-items-center justify-content-center p-4 px-lg-5 bg-white-99 mt-auto">
        <img
          src={image}
          className="rounded-3 me-2"
          width="50px"
          height="50px"
          alt="testimonial"
        />
        <p className="me-auto mt-2">{author}</p>
        <Button className="btn bg-white-97 border-white-95 text-black ">
          Read Full Story
        </Button>
      </div>
    </Card>
  );
};

export default TestimonialCard;
