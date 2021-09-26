import React from "react";
import Carousel from "react-multi-carousel";
import Video from "../../UI/Video";

const RecentVideos = () => {
  return (
    <div className="pt-5">
      <h2 className="text-white text-3xl font-bold my-3">
        Últimos vídeos{" "}
        <span className="h-0.5 w-32 bg-p-green absolute mt-5 ml-5"></span>
      </h2>
      <Carousel
        additionalTransfrom={0}
        className="w-full"
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container mx-auto"
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
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </Carousel>
    </div>
  );
};

export default RecentVideos;
