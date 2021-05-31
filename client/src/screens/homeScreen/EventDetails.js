import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFillClockFill, BsFillPeopleFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { RiFlag2Fill } from "react-icons/ri";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import getImageRoute from "../../utils/getImageRoute";
import "./_screen.scss";

const EventDetails = (props) => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:3001/event/${location.state.eventId}`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        setEventData(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function createMarkup() {
    return { __html: eventData[0]?.description };
  }
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    const newD = new Date(year, month, day);
    const monthName = newD.toLocaleString("default", { month: "long" });
    return day + " " + monthName + ", " + year;
  };

  const formatTime = ([date, time]) => {
    const mainTime = time.split(".")[0];

    let gotTime = new Date(`${date} ${mainTime}`)
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

    let hour = gotTime.split(":")[0];

    if (hour < 10) {
      gotTime = 0 + gotTime;
    }

    return gotTime;
  };

  function interestedEvent(id) {
    console.log(props.token, "=======================================");

    axios
      .put(
        `http://localhost:3001/event/interest/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function goingEvent(id) {
    console.log(id);

    axios
      .put(
        `http://localhost:3001/event/going/${id}`,
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
  console.log(eventData);
  // console.log(eventData[0].page.name);
  return (
    <Card className="eventview_card">
      <div className="eventview">
        <div className="eventview__top">
          <img
            src={getImageRoute(eventData[0]?.img)}
            style={{ width: "100%", height: "430px", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className="eventview__title">
          <h3>{eventData[0]?.title}</h3>
        </div>
        <Row>
          <Col lg={8} md={6}>
            <div className="eventview__details">
              <span>
                <BsFillPeopleFill size={20} />
                {eventData[0]?.interested.length} interested •{" "}
                {eventData[0]?.going.length} going
              </span>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="eventview__going">
              <div className="row">
                <div className="col">
                  <button
                    key={eventData[0]?._id}
                    onClick={() => goingEvent(eventData[0]?._id)}
                    className={
                      eventData[1]?.userIsGoing
                        ? "btn btn-info btn-block"
                        : "btn btn-light"
                    }
                  >
                    Going
                  </button>
                </div>
                <div className="col">
                  <button
                    key={eventData[0]?._id}
                    onClick={() => interestedEvent(eventData[0]?._id)}
                    className={
                      eventData[1]?.userIsInterested
                        ? "btn btn-info btn-block"
                        : "btn btn-light"
                    }
                  >
                    interested
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="eventview__details">
          <span>
            <RiFlag2Fill size={20} /> Event by {eventData[0]?.page.name}
          </span>
        </div>
        <div className="eventview__details">
          <span>
            <BsFillClockFill size={20} /> {"  "}
            {eventData[0]?.dateTime
              ? formatDate(eventData[0].dateTime.split("T")[0])
              : "Null"}{" "}
            At{" "}
            {eventData[0]?.dateTime
              ? formatTime(eventData[0].dateTime.split("T"))
              : "Null"}{" "}
          </span>
        </div>
        <div className="eventview__details">
          <span>
            <ImLocation size={20} />
            {eventData[0]?.location}
          </span>
        </div>
        <div className="eventview__details">
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
        {/* <hr />
        <div className="eventview__button">
          <div className="row">
            <div className="col">
              <button className="btn  btn-block">Like</button>
            </div>
            <div className="col">
              <button className="btn btn-info btn-block">Comment</button>
            </div>
          </div>
        </div> */}
      </div>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};
export default connect(mapStateToProps)(EventDetails);
