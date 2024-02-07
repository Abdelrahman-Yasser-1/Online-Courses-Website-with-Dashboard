// Bootstrap Components
import { Container, Button } from "reactstrap";

const SectionHeader = (props) => {
  return (
    <Container className="my-5">
      <h1>{props.title}</h1>
      <div className="d-flex flex-wrap">
        <p className="col-lg-10 text-grey-35">{props.description}</p>
        <Button className="p-2 mb-auto ms-lg-auto bg-white-99 border-white-95 text-black ">
          View All
        </Button>
      </div>
    </Container>
  );
};

export default SectionHeader;
