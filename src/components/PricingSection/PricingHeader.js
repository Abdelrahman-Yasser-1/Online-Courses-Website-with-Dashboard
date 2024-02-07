import React from "react";
import { Container, Button } from "reactstrap";

const PricingHeader = () => {
  return (
    <Container className="my-5" id="pricing">
      <h1>Our Pricing</h1>
      <div className="d-flex flex-wrap">
        <p className="col-lg-10 text-grey-35">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
          eget habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="rounded-3 bg-white p-2 m-auto">
          <Button type="button" className="btn main-button">Monthly</Button>
          <Button type="button" className="btn bg-white text-black border-0 ms-2">Yearly</Button>
        </div>
      </div>
    </Container>
  );
};

export default PricingHeader;
