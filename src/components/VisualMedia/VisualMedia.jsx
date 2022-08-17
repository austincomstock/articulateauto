import React from "react";
import "./VisualMedia.css";
import Carousel from "react-bootstrap/Carousel"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/
import NewChevy from "../Images/imgNewChevy.jpg";
import OldChevy from "../Images/imgOldChevy.jpg";
import NewGMC from "../Images/imgNewGMC.jpg";
import OldGMC from "../Images/imgOldGMC.jpg";
import NewFord from "../Images/imgNewFord.jpg";
import OldFord from "../Images/imgOldFord.jpg";

export const VisualMedia = () => {
  return (
    <div className="Vis">
      <Carousel slide={false}>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={NewChevy} alt="First slide" />
          <Carousel.Caption>{/* <p>New Chevy</p> */}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={OldChevy} alt="Second slide" />
          <Carousel.Caption>{/* <p>Old Chevy</p> */}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={NewGMC} alt="Third slide" />
          <Carousel.Caption>{/* <p>New GMC</p> */}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={OldGMC} alt="Fourth slide" />
          <Carousel.Caption>{/* <p>Old GMC</p> */}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={NewFord} alt="Fifth slide" />
          <Carousel.Caption>{/* <p>New Ford</p> */}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={OldFord} alt="Sixth slide" />
          <Carousel.Caption>{/* <p>Old Ford</p> */}</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
