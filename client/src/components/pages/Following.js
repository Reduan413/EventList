import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './_screen.scss'

const Following = () => {
    return (
        <Card className="following_card">
            <div className="following">
                <div className="following__container">
                    <div className="following__img">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwnjjl7sUdeyZ4pGOobMQnFM-U91gh1rZ40hvg1NONQ=s48-c-k-c0x00ffffff-no-rj" alt="" />
                    </div>
                    <div className="following__name">
                        <h1>True Coder</h1>
                        <p>500 followers</p>
                        <p></p>
                    </div>
                    <div className="following__follow">
                        <button className="page__btn btn btn-primary">Follow</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Following
