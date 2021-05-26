import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import CreatePage from './CreatePage';
import './_createpage.scss';

const OwnPage = (props) => {
    const [pageData, setPageData] = useState([])

    useEffect(() => {
        const fetchData = async() =>{
            await axios.get(`http://localhost:3001/page/mypage`, 
            {
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            })
            .then((res) => {
                setPageData(res.data.result)
            })
        }
        fetchData()
    })

    const deletePage = (id) => {
        axios.delete(`http://localhost:3001/page/${id}`,
        { 
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
        .then((res) =>{
            const det = pageData.filter(pd => pd.id !== id)
            setPageData(det)
        })
    }
    return (
        <>
        <CreatePage/>
        {pageData.map((page) => (
        <Card className="own_card">
            <div className="own">
                <div className="own__container">
                    <div className="own__img">
                        <img src="https://yt3.ggpht.com/ytc/AAUvwnjjl7sUdeyZ4pGOobMQnFM-U91gh1rZ40hvg1NONQ=s48-c-k-c0x00ffffff-no-rj" alt="" />
                    </div>
                    <div className="own__name">
                        <h1>{page.name}</h1>
                        <p>500 followers</p>
                        <p></p>
                    </div>
                    <div className="own__follow">
                        <Link to={
                            {
                            pathname: '/page',
                            state: {
                                pageId: page._id
                            }
                            }
                        }><button className="page__btn btn btn-primary" key={page._id}><AiOutlineEye size={25}/></button></Link>
                        <button className="page__btn btn btn-primary" key={page._id} onClick={() => deletePage(page._id)}><AiOutlineDelete size={25}/></button>
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

export default connect(mapStateToProps)(OwnPage)
