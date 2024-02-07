import { Container } from "reactstrap";
// Assets
import Poster from "../../assets/img/hero_panner.png";
import Video from "../../assets/videos/video.mp4";

import "./VideoSection.css";

const VideoSection = () => {
  return (
    <Container className="mt-3">
      <video
        className="video rounded-3"
        width="100%"
        height="100%"
        controls
        poster={Poster}
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support this video.
      </video>
    </Container>
  );
};

export default VideoSection;
