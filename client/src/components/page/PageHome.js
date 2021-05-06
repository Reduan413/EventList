import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from '../../components/event/Event'
import MyEvent from '../../components/page/MyEvent'
import './_page.scss'

const PageHome = () => {
    return (
        <Container>
            <Row style={{marginTop:10}}>
                {[...new Array(20)].map(() => (
                    <Col >
                        <MyEvent/>
                    </Col>
                ))} 
            </Row>   
        </Container>
    )
}

export default PageHome
