import { Card, Button } from "reactstrap";

import classes from "./CourseCard.module.css";

const CourseCard = (props) => {
  return (
    <Card
      className={`rounded-3 d-flex flex-column p-4 bg-white border-white-95 ${classes["course-card"]}`}
    >
      <img
        src={props.image}
        className={`rounded-3 mb-3 img-fluid ${classes["course_image"]}`}
        alt="course"
      />
      <div className="row">
        <div className="col-sm-6">
          <p className="badge p-2 border-1 border-white-95 text-grey-30">
            {props.duration}
          </p>
          <p className="badge p-2 ms-2 border-white-95 text-grey-30">
            {props.level}
          </p>
        </div>
        <p className="ms-auto col-sm-6 text-sm-end">By {props.instructor}</p>
      </div>
      <h5 className="my-3 fw-bolder">{props.title}</h5>
      <p className="text-grey-30">{props.description}</p>
      <Button className="btn bg-white-97 border-white-95 mt-auto text-black ">
        Get it Now
      </Button>
    </Card>
  );
};

export default CourseCard;
