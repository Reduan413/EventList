import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "../../screens/homeScreen/_screen.scss";
import getImageRoute from "../../utils/getImageRoute";

const Following = (props) => {
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:3001/page/follows`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        setPageData(res.data.result);
      });
  };

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
      .then((res) => {
        fetchData();
      });
  }
  console.log(pageData);
  return (
    <>
      {pageData.map((page) => (
        <Card className="following_card">
          <div className="following">
            <div className="following__container">
              <div className="following__img">
                <img
                  src={
                    !page.img
                      ? "https://yt3.ggpht.com/ytc/AAUvwnjjl7sUdeyZ4pGOobMQnFM-U91gh1rZ40hvg1NONQ=s48-c-k-c0x00ffffff-no-rj"
                      : getImageRoute(page.img)
                  }
                  alt=""
                />
              </div>
              <div className="following__name">
                <h1>{page.name}</h1>
              </div>
              <div className="following__follow">
                <button
                  key={page._id}
                  onClick={() => unlikepage(page._id)}
                  className="page__btn btn btn-primary"
                >
                  UnFollow
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps)(Following);
