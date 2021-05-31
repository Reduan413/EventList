import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { AiFillEye, AiOutlineClose } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsCalendar, BsClockHistory } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { connect } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import getImageRoute from "../../utils/getImageRoute";
import "./_page.scss";

const PageHome = (props) => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [eventData, setEventData] = useState([]);
  const [editItem, setEditItem] = useState();
  const [singleEventData, setSingleEventData] = useState({});

  const handleInput = (e) => {
    setSingleEventData({ ...singleEventData, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    const newdata = { ...singleEventData };
    newdata["img"] = e.target.files[0];
    setSingleEventData(newdata);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function editPostSubmit(e, id) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", singleEventData.title);
    formData.append("description", singleEventData.description);
    formData.append("image", singleEventData.img);
    formData.append("location", singleEventData.location);
    formData.append(
      "dateTime",
      singleEventData.date + "T" + singleEventData.time
    );
    axios
      .put(`http://localhost:3001/event/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        setShow(false);
        fetchData();
      });
  }
  const deleteEvent = (id) => {
    axios
      .delete(`http://localhost:3001/event/${id}`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        fetchData();
      });
  };

  

  const fetchData = async (id) => {
    await axios
      .post(
        'http://localhost:3001/page/events/',
        {
          pid: props.data._id,
        },
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      )
      .then((res) => {
        let events = res.data.result?.map((event, idx) => {
          let [date, time] = getDateAndTime(
            event.dateTime ?? new Date().toISOString()
          );

          return {
            ...event,
            date,
            time,
          };
        });

        setEventData(events);
      });
  };
 console.log(singleEventData)
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
  return (
    <div className="myevent">
      {eventData &&
        eventData.map((event) => (
          <Card className="pagecard">
            <div className="pageevent">
              <div className="pageevent__top">
                <img src={getImageRoute(event.img)} alt="" />
              </div>
              <div className="pageevent__details">
                <span>
                  <BsCalendar />{" "}
                  {event.dateTime
                    ? formatDate(event.dateTime.split("T")[0])
                    : "Null"}
                </span>
                <span>
                  <BsClockHistory />
                  {event.dateTime
                    ? formatTime(event.dateTime.split("T"))
                    : "Null"}{" "}
                </span>
              </div>
              <div className="pageevent__title">{event.title}</div>
              <div className="pageevent__title">
                <span>
                  <BiMap />
                  {event.location}
                </span>
              </div>

              <div className="pageevent__details">
                <span>
                  <AiFillEye /> {event.interested.length} interested •
                </span>
                <span> {event.going.length} going </span>
              </div>
              <hr />
              <div className="row" style={{ height: 50 }}>
                <div className="col-6 ">
                  <div className="col-4 text-right editButton">
                    <button
                      className="btn "
                      key={event._id}
                      onClick={() => {
                        let editEvent = eventData.filter(
                          (data) => data._id === event._id
                        )[0];
                        setSingleEventData(editEvent);
                        handleShow(true);
                      }}
                    >
                      <FiEdit size={25} />
                    </button>
                  </div>
                </div>
                <div className="col-6 ">
                  <button
                    className="btn btn-sm  deleteButton"
                    onClick={() => deleteEvent(event._id)}
                    type="submit"
                  >
                    <AiOutlineClose size={25} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Edit New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => editPostSubmit(e, singleEventData._id)}
            encType="multipart/form-data"
          >
            <h6 className="heading-small text-muted mb-4">Event information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-address"
                    >
                      Event Name
                    </label>
                    <input
                      type="text"
                      value={singleEventData.title}
                      className="form-control form-control-alternative"
                      id="eventName"
                      onChange={handleInput}
                      name="title"
                      placeholder="Event Name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group focused">
                    <img
                      src={getImageRoute(singleEventData.img)}
                      style={{ width: 150 }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-event_photo"
                    >
                      Event Photo
                    </label>

                    <input
                      type="file"
                      id="img"
                      onChange={(e) => onFileChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-event_date"
                    >
                      Start Date
                    </label>

                    <input
                      type="date"
                      value={singleEventData.date}
                      className="form-control form-control-alternative"
                      id="date"
                      onChange={handleInput}
                      name="date"
                      placeholder="Event Date"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="nput-event_time"
                    >
                      Start Time
                    </label>
                    <input
                      type="time"
                      value={singleEventData.time}
                      className="form-control form-control-alternative"
                      id="time"
                      onChange={handleInput}
                      name="time"
                      placeholder="Event Time"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="input-location"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      value={singleEventData.location}
                      onChange={handleInput}
                      id="eventLocation"
                      className="form-control form-control-alternative"
                      name="location"
                      placeholder="Location"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />

            <h6 className="heading-small text-muted mb-4">About Event</h6>
            <div className="pl-lg-4">
              <div className="form-group focused">
                <label>Description</label>
                <textarea
                  rows="4"
                  id="eventDetails"
                  name="description"
                  onChange={handleInput}
                  className="form-control form-control-alternative"
                  value={singleEventData.description}
                  placeholder="Event Description...."
                ></textarea>
              </div>
            </div>
            <div className="col-4 text-right">
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};
export default connect(mapStateToProps)(PageHome);

function getDateAndTime(dateTime) {
  let [date, time] = dateTime?.split("T");
  time = time.slice(0, 5);
  return [date, time];
}
