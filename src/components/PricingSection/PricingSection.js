import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

import PricingHeader from "./PricingHeader";

import doneIcon from "../../assets/icons/done.svg";
import notDoneIcon from "../../assets/icons/not_done.svg";

const featureCards1 = [
  {
    title: "Access to selected free courses.",
    done: true,
  },
  {
    title: "Limited course materials and resources.",
    done: true,
  },
  {
    title: "Basic community support.",
    done: true,
  },
  {
    title: "No certification upon completion.",
    done: true,
  },
  {
    title: "Ad-supported platform.",
    done: true,
  },
  {
    title: "Access to exclusive Pro Plan community forums.",
    done: false,
  },
  {
    title: "Early access to new courses and updates.",
    done: false,
  },
];

const featureCards2 = [
  {
    title: "Unlimited access to all courses.",
    done: true,
  },
  {
    title: "Unlimited course materials and resources.",
    done: true,
  },
  {
    title: "Priority support from instructors.",
    done: true,
  },
  {
    title: "Course completion certificates.",
    done: true,
  },
  {
    title: "Ad-free experience.",
    done: true,
  },
  {
    title: "Access to exclusive Pro Plan community forums.",
    done: true,
  },
  {
    title: "Early access to new courses and updates.",
    done: true,
  },
];

const PricingSection = () => {
  return (
    <>
      <PricingHeader />
      <section className="rounded-3 bg-white p-4 p-lg-5">
        <Row className="row-cols-1 row-cols-lg-2 g-3 g-lg-4">
          <Col sm={6}>
            <Card className="rounded-3 d-flex flex-column p-4 bg-white-99 border-white-95">
              <p className="text-center p-2 rounded-3 mt-3 bg-orange-97 border-orange-90">
                Free Plan
              </p>
              <p className="text-center my-3">
                <span className="fw-bold h1">$0</span>
                <sub className="text-grey-30">/month</sub>
              </p>
              <CardBody className="card border-white-95">
                <h6 className="card-text text-center">Available Features</h6>
                {featureCards1.map((feature, index) => (
                  <div
                    key={index}
                    className="border-white-95 rounded-3 d-flex justify-content-center align-items-center bg-white my-3 p-2"
                  >
                    <img
                      src={feature.done ? doneIcon : notDoneIcon}
                      alt=""
                      className={"bg-orange-95 rounded-3 p-1 me-2"}
                    />
                    <p className="mt-3 me-auto text-grey-30">{feature.title}</p>
                  </div>
                ))}
              </CardBody>
              <div className="card-footer bg-orange-50 text-center text-white">
                Get Started
              </div>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="rounded-3 d-flex flex-column p-4 bg-white-99 border-white-95">
              <p className="text-center p-2 rounded-3 mt-3 bg-orange-97 border-orange-90">
                Pro Plan
              </p>
              <p className="text-center my-3">
                <span className="fw-bold h1">$79</span>
                <sub className="text-grey-30">/month</sub>
              </p>
              <CardBody className="card border-white-95">
                <h6 className="card-text text-center">Available Features</h6>
                {featureCards2.map((feature, index) => (
                  <div
                    key={index}
                    className="border-white-95 rounded-3 d-flex justify-content-center align-items-center bg-white my-3 p-2"
                  >
                    <img
                      src={feature.done ? doneIcon : notDoneIcon}
                      alt=""
                      className={"bg-orange-95 rounded-3 p-1 me-2"}
                    />
                    <p className="mt-3 me-auto text-grey-30">{feature.title}</p>
                  </div>
                ))}
              </CardBody>
              <div className="card-footer bg-orange-50 text-center text-white">
                Get Started
              </div>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default PricingSection;
