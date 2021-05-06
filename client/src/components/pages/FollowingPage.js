import React, { useEffect } from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import { MdAllOut } from 'react-icons/md'
import All from './All.js'

const FollowingPage = () => {
    return (
        <Container>
            <Row style={{marginTop:0}}>
                {[...new Array(20)].map(() => (
                    <Col>
                        <All/>
                    </Col>
                ))} 
            </Row>   
        </Container>
    )
}

export default FollowingPage
