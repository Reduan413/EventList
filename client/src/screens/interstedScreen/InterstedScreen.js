import React, { useEffect } from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import { MdAllOut } from 'react-icons/md'
import InterstedEvent from '../../components/intersted/InterstedEvent.js'

const InterstedScreen = () => {
    return (
        <Container>
            <Row style={{marginTop:0}}>
                {[...new Array(20)].map(() => (
                    <Col>
                        <InterstedEvent/>
                    </Col>
                ))} 
            </Row>   
        </Container>
    )
}

export default InterstedScreen
