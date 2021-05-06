import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { AiFillStar } from "react-icons/ai";
import './_intereste.scss'

const InterstedEvent = () => {
    return (
        <Card className="intersted_card">
            <div className="intersted">
                <div className="intersted__container">
                    <div className="intersted__img">
                        <img src="https://i.ytimg.com/vi/AwRb8LX-szg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmgMg9_elE9IV7_ZGK19klZaGMQQ" alt="" />
                    </div>
                    <div className="intersted__name">
                        <h1>True Coder</h1>
                        <p>500 followers</p>
                        <p>first value applies to top-left corner, second value applies to top-right corner, third value applies to bottom-right corner, and fourth value applies to bottom-left corner</p>
                    </div>
                    <div className="intersted__follow">
                        <button className="page__btn btn btn-primary"><AiFillStar size={23}/>intersted</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default InterstedEvent
