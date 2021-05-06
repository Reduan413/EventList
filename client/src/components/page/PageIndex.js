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

const PageIndex = () => {
    const [navbar, setNavbar] = useState(false);

    const changeNavPosition =() => {
        if (window.scrollY >= 300){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeNavPosition)
   return (
    <>
      <PageHeader/>
        <Tabs>
          <TabList className={navbar ? 'pagesidebar open': 'pagesidebar'}>
          <Tab>Home</Tab>
            <Tab>Post</Tab>
            <Tab>Setting</Tab>
          </TabList>

          <TabPanel>
            <PageHome/>
          </TabPanel>
          <TabPanel>
            <PostPage/>
          </TabPanel>
          <TabPanel>
            <PageProfile/>
          </TabPanel>
        </Tabs>
    </>
  )
}

export default PageIndex
