import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsFillPeopleFill } from "react-icons/bs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getImageRoute from "../../utils/getImageRoute";
import "./_intereste.scss";

const InterstedEvent = (props) => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:3001/event/follows`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        setEventData(res.data.result);
      });
  };
  return (
    <>
      {eventData.map((event) => (
        <Card className="intersted_card">
          <div className="intersted">
            <div className="intersted__container">
              <div className="intersted__img">
                <img
                  src={getImageRoute(event.img)}
                  style={{ width: "90%", height: "150px", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className="intersted__name">
                <h1>{event?.title}</h1>
                <span>
                  <BsFillPeopleFill size={20} />
                  {event?.interested.length} interested • {event?.going.length}{" "}
                  going
                </span>
              </div>
              <div className="intersted__follow">
                <Link
                  to={{
                    pathname: "/eventDetails",
                    state: {
                      eventId: event._id,
                    },
                  }}
                >
                  <button key={event._id} className="btn btn-info btn-block">
                    View Details
                  </button>
                </Link>
                {/* <button className="page__btn btn btn-primary"><AiFillStar size={23}/>View</button> */}
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
export default connect(mapStateToProps)(InterstedEvent);
