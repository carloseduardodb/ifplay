import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Track from "../../UI/Track";

const RecentTracks = () => {
  return (
    <>
      <h2 className="text-white text-3xl font-bold my-3">
        Trilhas recentes{" "}
        <span className="h-0.5 w-32 bg-p-yellow absolute mt-5 ml-5"></span>
      </h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </Carousel>
    </>
  );
};

export default RecentTracks;
