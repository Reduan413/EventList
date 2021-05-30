import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import getImageRoute from "../../utils/getImageRoute";
import "./_event.scss";

const Event = ({ data }) => {
  const [eventData, setEventData] = useState([]);
  console.log(data);

  return (
    <>
      <Card>
        <div className="event">
          <div className="event__top">
            <img
              src={`http://localhost:3001/images/${data.img}`}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="event__title">{data.title}</div>
          <div className="event__details">
            <span>
              <AiFillEye />
              {data?.interested.length} interested • {data?.going.length} going
            </span>
          </div>
          <div className="event__channel">
            <img
              src={
                !data.page.img
                  ? "https://yt3.ggpht.com/ytc/AAUvwnjjl7sUdeyZ4pGOobMQnFM-U91gh1rZ40hvg1NONQ=s48-c-k-c0x00ffffff-no-rj"
                  : getImageRoute(data.page.img)
              }
              alt=""
            />
            <p>{data.page.name}</p>
          </div>
          <hr />
          <div className="event__button">
            <Link
              to={{
                pathname: "/eventDetails",
                state: {
                  eventId: data._id,
                },
              }}
            >
              <button key={data._id} className="btn btn-info btn-block">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Event;
