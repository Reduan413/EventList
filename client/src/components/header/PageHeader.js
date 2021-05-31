import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import getImageRoute from "../../utils/getImageRoute";
import "./_header.scss";

const PageHeader = (props) => {
  console.log(props.data);

  function likepage(id) {
    console.log(id);

    axios
      .put(
        `http://localhost:3001/page/like/${id}`,

        {},
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function unlikepage(id) {
    console.log(id);

    axios
      .put(
        `http://localhost:3001/page/unlike/${id}`,

        {},
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      )
      .then((res) => {});
  }
  return (
    <>
      <div className="page">
        <div className="page__banner">
          <img
            src="https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg"
            alt=""
          />
        </div>
        <div className="page__container">
          <div className="page__img">
            <img
              src={
                !props.data.img
                  ? "https://yt3.ggpht.com/ytc/AAUvwnjjl7sUdeyZ4pGOobMQnFM-U91gh1rZ40hvg1NONQ=s48-c-k-c0x00ffffff-no-rj"
                  : getImageRoute(props.data.img)
              }
              alt=""
            />
          </div>
          <div className="page__name">
            <h1>{props.data.name}</h1>
            <p>{props.data.likes.length} followers</p>
          </div>
          <div className="page__follow">
            <button
              key={props.data?._id}
              onClick={() => likepage(props.data?._id)}
              className={
                props.data?.pageLiked
                  ? "btn btn-info btn-block"
                  : "btn btn-light"
              }
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps)(PageHeader);
