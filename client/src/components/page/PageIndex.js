import React, { useState,useEffect } from 'react'
import '../../_app.scss'
import PagesScreen from '../../screens/homeScreen/MyPagesScreen'
import PageHome from './PageHome'
import PageHeader from '../header/PageHeader'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../sidebar/_sidebar.scss'
import PageProfile from '../setting/PageProfile'
import PostPage from '../page/PostPage'
import axios from 'axios';
import { useLocation } from "react-router-dom"


const PageIndex = (props) => {
    const [isLoading, setLoading] = useState(true) 
    const [navbar, setNavbar] = useState(false);
    const [pageData, setPageData] = useState([])
    const location = useLocation()

    useEffect(() => {
      const callPageData = async () =>{
        await axios.get(`http://localhost:3001/page/${location.state.pageId}`)
        .then((res) => {
            setPageData(res.data.result)
            setLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
      }
      callPageData()
    }, [pageData])
    const changeNavPosition =() => {
        if (window.scrollY >= 300){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeNavPosition)

   return(
    <>
    { isLoading ? <h1>Wait</h1> : 
      <>
        <PageHeader data={pageData[0]} />
        <Tabs>
          <TabList className= {navbar ? 'pagesidebar open': 'pagesidebar'}>
          <Tab>Home</Tab>
            <Tab>Post</Tab>
            <Tab>Setting</Tab>
          </TabList>

          <TabPanel>
            <PageHome data={pageData[0]} />
          </TabPanel>
          <TabPanel>
            <PostPage/>
          </TabPanel>
          <TabPanel>
            <PageProfile/>
          </TabPanel>
        </Tabs>
      </>
    }
    </>
  )
}

export default PageIndex
