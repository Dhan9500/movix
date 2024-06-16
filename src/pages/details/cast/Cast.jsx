import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import avatargirl2 from "../../../assets/avatargirl2.jpeg";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let profileUrl = item?.profile_path
                ? url.profile + item?.profile_path
                : item?.gender === 1
                ? avatargirl2
                : avatar;
              return (
                <div key={item?.cast_id} className="listItem">
                  <div className="profileImg">
                    <Img src={profileUrl} />
                  </div>
                  <div className="name">
                    {item?.name}
                  </div>
                  <div className="character">
                    {item?.character}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
