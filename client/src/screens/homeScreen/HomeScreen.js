import React, { useEffect, useState } from "react";
import axios from "axios";
import {Row, Container, Col} from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import Event from '../../components/event/Event'
import './_screen.scss'

const HomeScreen = () => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const calleventData = async () => {
      await axios
        .get(`http://localhost:3001/event`)
        .then((res) => {
          setEventData(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    calleventData();
  }, []);

    return (
        <Container className="home_screen">
            <Row style={{marginTop:10}}>
                {eventData?.map((data, idx) => (
                    <Col lg={4} md={6} key={idx}>
                        <Event data={data} />
                    </Col>
                ))}
            </Row>
            {/* <Row style={{marginTop:10}}>
                    <Col lg={4} md={6}>
                        <Event/>
                    </Col>
            </Row>      */}
        </Container>
    )
}

export default HomeScreen
