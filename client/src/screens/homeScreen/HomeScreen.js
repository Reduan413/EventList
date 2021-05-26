import React, { useEffect } from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import Event from '../../components/event/Event'
import './_screen.scss'

const HomeScreen = () => {
    return (
        <Container className="home_screen">
            <Row style={{marginTop:10}}>
                {[...new Array(20)].map(() => (
                    <Col lg={4} md={6}>
                        <Event/>
                    </Col>
                ))} 
            </Row>   
        </Container>
    )
}

export default HomeScreen
