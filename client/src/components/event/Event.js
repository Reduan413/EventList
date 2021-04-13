import React, { useEffect } from 'react'
import './_event.scss'
import { AiFillEye } from 'react-icons/ai'
import { Card } from 'react-bootstrap'

const Event = () => {

    return (
        <Card>
            <div className="event">
                <div className="event__top">
                    <img src="https://i.ytimg.com/vi/AwRb8LX-szg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmgMg9_elE9IV7_ZGK19klZaGMQQ" alt="" />
                </div>
                <div className="event__title">
                    Responsive Animated Product Card Using HTML & CSS & JavaScript
                </div>
                <div className="event__details">
                    <span>
                        <AiFillEye/> 5m Views •
                    </span>
                    <span> 6 days ago</span>
                </div>
                <div className="event__channel">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnjjl7sUdeyZ4pGOobMQnFM-U91gh1rZ40hvg1NONQ=s48-c-k-c0x00ffffff-no-rj" alt="" />
                    <p>True Coder</p>
                </div>
            </div>
        </Card>
    )
}

export default Event
