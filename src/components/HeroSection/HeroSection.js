// Bootstrap Components
import { Button } from "reactstrap";

// Assets
import { ReactComponent as Icon } from "../../assets/icons/Icon (1).svg";
import { ReactComponent as TopIcon } from "../../assets/icons/Abstract Line.svg";

// CSS File
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section
      className={`${classes.hero} text-center p-lg-5 p-2 d-flex flex-column justify-content-center align-items-center`}
    >
      <div className="position-relative mb-2">
        <div className="d-flex justify-content-center align-items-center bg-white px-2 rounded-3 m-sm-2">
          <span className="badge">
            <Icon />
          </span>
          <p className={`${classes["hero_title"]} my-2 p-2`}>
            <span>Unlock</span> Your Creative Potential
          </p>
        </div>
        <TopIcon
          width={35}
          height={38}
          className="position-absolute top-0 start-0 translate-middle"
        />
      </div>
      <h2 className="m-2">with Online Design and Development Courses.</h2>
      <p>Learn from Industry Experts and Enhance Your Skills.</p>
      <div className="d-flex mt-5">
        <Button className="main-button me-2 p-3">Explore Courses</Button>
        <Button className="bg-white p-3 border-white-95 text-black">
          View Pricing
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
