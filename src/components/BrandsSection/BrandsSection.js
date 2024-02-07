import { Container } from "reactstrap";
// Assets
import { ReactComponent as Zapier } from "../../assets/img/zapier.svg";
import { ReactComponent as Spotify } from "../../assets/img/spotify.svg";
import { ReactComponent as Zoom } from "../../assets/img/zoom.svg";
import { ReactComponent as Amazon } from "../../assets/img/amazon.svg";
import { ReactComponent as Adobe } from "../../assets/img/adobe.svg";
import { ReactComponent as Notion } from "../../assets/img/notion.svg";
import { ReactComponent as Netflix } from "../../assets/img/netflix.svg";

// CSS File
import classes from "./BrandsSection.module.css";
const BrandsSection = () => {
  return (
    <Container className={`${classes.brands} mb-5 mt-4`}>
      <div className="p-5 rounded-3 d-flex gap-4 justify-content-around align-items-center bg-white-99 border-white-95">
        <Zapier className={classes["brand-image"]} />
        <Spotify className={classes["brand-image"]} />
        <Zoom className={classes["brand-image"]} />
        <Amazon className={`${classes["brand-image"]} d-none d-lg-flex`} />
        <Adobe className={`${classes["brand-image"]} d-none d-lg-flex`} />
        <Notion className={`${classes["brand-image"]} d-none d-lg-flex`} />
        <Netflix className={`${classes["brand-image"]} d-none d-lg-flex`} />
      </div>
    </Container>
  );
};

export default BrandsSection;
