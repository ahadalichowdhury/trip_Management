import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://img.freepik.com/free-psd/wood-text-style-effect_35913-2116.jpg?w=900&t=st=1681398541~exp=1681399141~hmac=d06b0f381702af98a0cd3ee708a8f66c78e314ebbc75160aa2f7d2b9c5cfafb0"height={"600px"} width={"100%"} alt="" />
      </div>
      <div>
        <img src="https://img.freepik.com/free-psd/wood-text-style-effect_35913-2116.jpg?w=900&t=st=1681398541~exp=1681399141~hmac=d06b0f381702af98a0cd3ee708a8f66c78e314ebbc75160aa2f7d2b9c5cfafb0" height={"600px"} width={"100%"} alt="" />
      </div>
      <div>
        <img src="https://img.freepik.com/free-psd/wood-text-style-effect_35913-2116.jpg?w=900&t=st=1681398541~exp=1681399141~hmac=d06b0f381702af98a0cd3ee708a8f66c78e314ebbc75160aa2f7d2b9c5cfafb0" height={"600px"} width={"100%"} alt="" />
      </div>
    </Slider>
  );
}