import React,{ useState }  from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container,Button ,Modal,Form } from 'react-bootstrap'
import { BsCalendar } from 'react-icons/bs'
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsClockHistory } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import { AiFillEye } from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import './_page.scss'
import axios from 'axios'

const PageHome = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[eventData, setEventData] = useState({
        eventName: '',
        eventDataTime: {
          'date':'',
          'time':''
        },
        eventLocation: '',
        eventDetails:''
    })
    const handleInput = (e)=>{
        const newdata = {...eventData}
        newdata[e.target.id] = e.target.value
        setEventData(newdata)
        console.log(newdata)
        
      }
    function editPostSubmit(e){
        e.preventDefault()
        axios.put(``,
        {
            title: eventData.eventName,
            description: eventData.eventDetails,
            location: eventData.eventLocation,
            dateTime: eventData.eventDataTime

        },
        {    
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
        .then((res) => {
            console.log(res.data)        
    })
    }

    const deleteEvent = (id) => {
        axios.delete(`http://localhost:3001/event/${id}`,
        { 
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
        .then((res) =>{
            const det = eventData.filter(pd => pd.id !== id)
            setEventData(det)
            console.log(res.data, det )
        })
    }
    return (
        <Card className="pagecard">
            <div className="pageevent">
                <div className="pageevent__top">
                    <img src="https://i.ytimg.com/vi/AwRb8LX-szg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmgMg9_elE9IV7_ZGK19klZaGMQQ" alt="" />
                </div>
                <div className="pageevent__details">
                    <span>
                        <BsCalendar/> 5 MAY    
                    </span>
                    <span><BsClockHistory/>6 AM</span>
                </div>
                <div className="pageevent__title">
                    Responsive Animated Product Card Using HTML & CSS & JavaScript
                </div>
                <div className="pageevent__title">
                    <span>
                        <BiMap/>Online
                    </span>
                </div>

                <div className="pageevent__details">
                    <span>
                        <AiFillEye/> 5m Views •
                    </span>
                    <span> 6 days ago</span>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6 ">
                        <div className="col-4 text-right editButton">
                            <a href="#!" className="btn " onClick={handleShow}><FiEdit size={25}/></a>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="modal-title">Edit Profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="card shadow">
                                    <div className="card-header bg-white border-0">
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                                <h3 className="mb-0">Edit New Event</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={(e)=>editPostSubmit(e)}>
                                            <h6 className="heading-small text-muted mb-4">Event information</h6>
                                            <div className="pl-lg-4">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" htmlFor="input-address">Event Name</label>
                                                            <input type="text" className="form-control form-control-alternative" id="eventName" onChange={(e) =>handleInput(e)} name="event_name"  placeholder="Event Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" htmlFor="input-event_date">Start Date</label>
                                                            <input type="date" className="form-control form-control-alternative" id="eventDataTime" onChange={(e) =>handleInput(e)} name="event_date"  placeholder="Event Date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" htmlFor="nput-event_time">Start Time</label>
                                                            <input type="time" className="form-control form-control-alternative" id="eventDataTime" onChange={(e) =>handleInput(e)} name="event_time"  placeholder="Event Time" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-location">Location</label>
                                                            <input type="text" onChange={(e) =>handleInput(e)} id="eventLocation" className="form-control form-control-alternative" placeholder="Location"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-4"/>
               
                                            <h6 className="heading-small text-muted mb-4">About Event</h6>
                                            <div className="pl-lg-4">
                                                <div className="form-group focused">
                                                    <label>Description</label>
                                                    <textarea rows="4"  id="eventDetails" onChange={(e) =>handleInput(e)} class="form-control form-control-alternative" placeholder="Event Description...."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-4 text-right">
                                                <button  className="btn btn-primary" type="submit">Create</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="col-6 ">
                        <button  className="btn btn-sm  deleteButton"  onClick={() => deleteEvent(1)} type="submit"><AiOutlineClose size={25}/></button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PageHome
