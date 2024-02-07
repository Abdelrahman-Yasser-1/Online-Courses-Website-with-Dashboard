import classes from "./Panner.module.css";
// import { ReactComponent as Icon } from "../../assets/icons/Icon.svg";
const Panner = (props) => {
  return (
    <div
      className={`${classes["top-panner"]} text-center text-white rounded-3 mt-3`}
    >
      <p className="d-inline">{props.text}</p>
      <img
        src={require("../../assets/icons/Icon.svg").default}
        alt="arrow icon"
        className="ms-2"
        width={19}
        height={19}
      />
      {/* <Icon className={"ms-2"} /> */}
    </div>
  );
};

export default Panner;
