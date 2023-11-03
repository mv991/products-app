import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import React from "react"
const Image = styled.img`
  width: 100%;
  height: 859px;

  @media only screen and (max-width: 1400px) {
    height: 500px;
  }
`
function CarouselComponent() {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={true}
      showThumbs={false}
    >
      <Image
        src={"./img2.png"}
        alt="cover-img2"
        width={"100%"}
        height={"500px"}
      />
      <Image
        src={"./img3.png"}
        alt="cover-img2"
        width={"100%"}
        height={"500px"}
      />
      <Image
        src={"./img1.png"}
        alt="cover-img1"
        width={"100%"}
        height={"500px"}
      />
    </Carousel>
  )
}

export default CarouselComponent
