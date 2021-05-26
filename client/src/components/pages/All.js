import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import './_pages.scss'
import axios from 'axios';
import { connect } from "react-redux"

const All = (props) => {
    const [pageData, setPageData] = useState([])
    // const { authReducer } = this.props
    

    useEffect(() => {
        const fetchData = async() =>{
            await axios.get(`http://localhost:3001/page/`)
            .then((res) => {
                setPageData(res.data.result)

            })
        }
        fetchData()
    })
    // console.log(authReducer.isAuthenticated)
    function likepage(id){
        console.log(id)
        
        axios.put(`http://localhost:3001/page/like/${id}`,

        {
           
        },
        { 
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
        .then((res) => {       
    })
    }
    return (
        <>
        {pageData.map((page) => (
            <Card className="following_card">
                <div className="following">
                    <div className="following__container">
                        <div className="following__img">
                            <img src="https://yt3.ggpht.com/ytc/AAUvwnjjl7sUdeyZ4pGOobMQnFM-U91gh1rZ40hvg1NONQ=s48-c-k-c0x00ffffff-no-rj" alt="" />
                        </div>
                        <div className="following__name">
                            <h1>{page.name}</h1>
                            <p>500 followers</p>
                            <p></p>
                        </div>
                        <div className="following__follow">
                            <button key={page._id}  onClick={()=>likepage(page._id)} className="page__btn btn btn-primary">Follow</button>
                        </div>
                    </div>
                </div>
            </Card>
        ))}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token
    }
}
export default connect(mapStateToProps)(All)
