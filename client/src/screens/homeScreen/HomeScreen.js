import React, { useEffect } from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import Video from '../../components/event/Event'

const HomeScreen = () => {
    return (
        <Container>
            <Row style={{marginTop:10}}>
                {[...new Array(20)].map(() => (
                    <Col lg={4} md={6}>
                        <Video/>
                    </Col>
                ))}    
            </Row>   
        </Container>
    )
}

export default HomeScreen
