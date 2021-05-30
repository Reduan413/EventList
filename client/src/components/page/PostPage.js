import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import RichTextEditor from "react-rte";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const PostPage = (props) => {
  const [description, setDescription] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [eventData, setEventData] = useState({
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    eventPhoto: "",
    eventLocation: "",
    eventDetails: "",
  });

  const handleInput = (e) => {
    const newdata = { ...eventData };
    newdata[e.target.id] = e.target.value;
    setEventData(newdata);
    console.log("Input Data ---- \n", newdata);
  };

  const onFileChange = (e) => {
    const newdata = { ...eventData };
    newdata["eventPhoto"] = e.target.files[0];
    setEventData(newdata);
  };
  console.log(eventData);

  function createEventSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", eventData.eventTitle);
    formData.append("description", description.toString("html"));
    formData.append("image", eventData.eventPhoto);
    formData.append("location", eventData.eventLocation);
    formData.append(
      "dateTime",
      eventData.eventDate + " " + eventData.eventTime
    );
    formData.append("pageId", props.data._id);
    axios
      .post(`http://localhost:3001/event/`, formData, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }
  return (
    <div className="col-xl-12 order-xl-1">
      {console.log(props.data._id)}
      <div className="card shadow">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0">Create New Event</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={createEventSubmit} encType="multipart/form-data">
            <h6 className="heading-small text-muted mb-4">Event information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-9">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-address"
                    >
                      Event Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-alternative"
                      id="eventTitle"
                      value={eventData.eventTitle}
                      onChange={(e) => handleInput(e)}
                      name="event_name"
                      placeholder="Event Name"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group focused">
                    <label
                      className="form-control-label"
                      htmlFor="input-event_photo"
                    >
                      Event Photo
                    </label>
                    <input type="file" onChange={(e) => onFileChange(e)} />
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
                      className="form-control form-control-alternative"
                      id="eventDate"
                      value={eventData.eventDate}
                      onChange={(e) => handleInput(e)}
                      name="event_date"
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
                      className="form-control form-control-alternative"
                      id="eventTime"
                      value={eventData.eventTime}
                      onChange={(e) => handleInput(e)}
                      name="event_time"
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
                      id="eventLocation"
                      className="form-control form-control-alternative"
                      value={eventData.eventLocation}
                      onChange={(e) => handleInput(e)}
                      placeholder="Location"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />

            <h6 className="heading-small text-muted mb-4">About Event</h6>
            <div className="pl-lg-4">
              <RichTextEditor
                value={description}
                toolbarConfig={toolbarConfig}
                onChange={setDescription}
              />
            </div>
            <div className="col-4 text-right">
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps)(PostPage);

const toolbarConfig = {
  display: [
    "INLINE_STYLE_BUTTONS",
    "BLOCK_TYPE_BUTTONS",
    "BLOCK_TYPE_DROPDOWN",
    "HISTORY_BUTTONS",
  ],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: "Normal", style: "unstyled" },
    { label: "Heading Large", style: "header-one" },
    { label: "Heading Medium", style: "header-two" },
    { label: "Heading Small", style: "header-three" },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
  ],
};
