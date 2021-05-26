import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { connect } from "react-redux"

const PostPage = (props) => {

  const[eventData, setEventData] = useState({
    eventTitle: '',
    eventDataTime: {
      'date':'',
      'time':''
    },
    eventPhoto:'',
    eventLocation: '',
    eventDetails:''
  })

  const handleInput = (e)=>{
    const newdata = {...eventData}
    newdata[e.target.id] = e.target.value
    setEventData(newdata)
    console.log(props)
  }

  function createEventSubmit(e){
    e.preventDefault()
    axios.post(`http://localhost:3001/event/`,
    {
        title: eventData.eventTitle,
        description: eventData.eventDetails,
        location: eventData.eventLocation,
        dateTime: eventData.eventDateTime,
        Photo: eventData.eventPhoto,
        page: props.key
    },
    { 
        headers: {
            Authorization: `Bearer ${props.token}`
        }
    })
    .then((res) => {
        console.log(res.data)        
    })
    .catch((err) => {
      console.dir(err)
    })
  }
    return (
        <div className="col-xl-12 order-xl-1">
          <div className="card shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Create New Event</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={createEventSubmit}>
                <h6 className="heading-small text-muted mb-4">Event information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-address">Event Name</label>
                        <input type="text" className="form-control form-control-alternative" id="eventTitle" 
                        value={eventData.eventTitle} onChange={(e) =>handleInput(e)} name="event_name"  placeholder="Event Name" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-event_photo">Event Photo</label>
                        <input type="file" className="" id="eventPhoto" value={eventData.eventPhoto} onChange={(e) =>handleInput(e)} name="event_photo"  placeholder="Event Date" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-event_date">Start Date</label>
                        <input type="date" className="form-control form-control-alternative" id="eventDataTime" value={eventData.eventDataTime} onChange={(e) =>handleInput(e)}name="event_date"  placeholder="Event Date" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="nput-event_time">Start Time</label>
                        <input type="time" className="form-control form-control-alternative" id="eventDataTime" value={eventData.eventDataTime} onChange={(e) =>handleInput(e)}name="event_time"  placeholder="Event Time" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-location">Location</label>
                        <input type="text" id="eventLocation" className="form-control form-control-alternative" value={eventData.eventLocation} onChange={(e) =>handleInput(e)}placeholder="Location"/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
               
                <h6 className="heading-small text-muted mb-4">About Event</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>Description</label>
                    <textarea rows="4" class="form-control form-control-alternative" id="eventDetails" placeholder="Description" value={eventData.eventDetails} onChange={(e) =>handleInput(e)} placeholder="Event Description...."></textarea>
                  </div>
                </div>
                <div className="col-4 text-right">
                    <button  className="btn btn-primary" type="submit">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      token: state.authReducer.token
  }
}

export default connect(mapStateToProps)(PostPage)

