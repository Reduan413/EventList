import React, { useEffect } from 'react'
import './_screen.scss'
import { AiFillEye } from 'react-icons/ai'
import { RiFlag2Fill } from 'react-icons/ri'
import { BsFillPeopleFill,BsFillClockFill } from "react-icons/bs";
import { ImLocation } from 'react-icons/im'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const EventDetails = () => {

    return (
        <Card className="eventview_card">
            <div className="eventview">
                <div className="eventview__top">
                    <img src="https://i.ytimg.com/vi/AwRb8LX-szg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmgMg9_elE9IV7_ZGK19klZaGMQQ" alt="" />
                </div>
                <div className="eventview__title">
                    Responsive Animated Product Card Using HTML & CSS & JavaScript
                </div>
                <div className="eventview__details">
                    <span>
                        <BsFillPeopleFill size={20}/>
                    </span>
                </div>
                <div className="eventview__details">
                    <span>
                        <RiFlag2Fill size={20}/> Event by
                    </span>
                </div>
                <div className="eventview__details">
                    <span>
                        <BsFillClockFill size={20}/> 
                    </span>
                </div>
                <div className="eventview__details">
                    <span>
                        <ImLocation size={20}/>
                    </span>
                </div>
                <div className="eventview__details">
                    
                    <p>Research is defined as careful consideration of a study regarding a particular concern or problem using scientific methods. Research results can be presented in various ways, but one of the most popular—and effective—presentation forms is the research paper. It needs enough dedication and eagerness of learning new things in the field of research. A researcher can secure a bright career in the future.


                        DIU CPC is arranging a series of workshops to let you start your journey with research and guide you until the publication of your research paper.
                        To avail of this opportunity, you have to register to join the first workshop -
                        “Workshop on Research Domain and Publication Road Map”  

                        🟣 Expected outcomes of this workshop are:
                        Knowledge about different research domains.
                        Topic Selection and Helping you to find your domain
                        You’ll understand the total roadmap of research publication.
                        Only those who will join in this workshop will get the opportunity to participate in the following workshops. So, grab it and do not miss the opportunity.
                        🟠 Next workshops:
                        1. Workshop on Literature Review and Data Collection Method
                        2. Workshop on Data Preprocessing and Data Visualization
                        3. Workshop on Feature Engineering
                        4. Workshop on Algorithm Implementation
                        5. Conference/journal selection and paper submission
                        Once you get registered, if you show us your dedication and execute the learnings from the workshops properly, we can assure you that you will be able to publish your own research paper after completing all the workshops.
                        ⚠ Requirements: Basic knowledge of Python programming language.
                        ( This event is only for Dept. of CSE students )
                        ✒Registration form: https://forms.gle/EhN22GaaQ2ka1w3w7
                        Registration Fee: 500 BDT (Refundable*)
                        Payment Method and other information are given in the registration form.
                        📢Workshop Date: 06 May. 2021
                        Time: We will notify the registered participants
                        Last date to register: 05 May 2021
                        For any query:
                        Md. Sakibul Hasan
                        Vice President
                        Research and Journal Wing
                        Email: cpc@diu.edu.bd</p>
                </div>
                <hr/>
                <div className="eventview__button">
                    <div className="row">
                        <div className="col">
                            <button className="btn  btn-block">Like</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-info btn-block">Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default EventDetails
