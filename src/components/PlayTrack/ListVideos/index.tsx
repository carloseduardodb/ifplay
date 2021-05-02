import React from "react";
import DetailsVideoList from "./DetailsVideoList";
import { Scrollbars } from "react-custom-scrollbars";
import DetailsQuestions from "./DetailsQuestions";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "#45c8d4",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

const ListVideos = () => {
  return (
    <ul className="w-4/12">
      <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        <DetailsVideoList selected={true} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsVideoList selected={false} />
        <DetailsQuestions />
      </CustomScrollbars>
    </ul>
  );
};

export default ListVideos;