import { Col, Card, CardBody } from "reactstrap";
import orangeArrow from "../../assets/icons/orange_arrow.svg";

import classes from "./BenefitCard.module.css";

const BenefitCard = (props) => {
  return (
    <Col sm="4">
      <Card className={`${classes["my-card"]} p-3`}>
        <CardBody className="d-flex flex-column">
          <h1 className={`${classes["card-title"]} text-end mb-4`}>
            {props.number}
          </h1>
          <h5 className="card-text text-grey-20 mb-3">{props.title}</h5>
          <p className="card-text text-grey-30">{props.description}</p>
          <div
            className="rounded-3 ms-auto d-flex justify-content-center align-items-center mt-auto border-white-95 bg-white-99"
            style={{ width: "50px", height: "50px" }}
          >
            <img src={orangeArrow} alt="" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BenefitCard;
