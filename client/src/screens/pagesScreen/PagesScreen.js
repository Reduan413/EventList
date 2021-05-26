import React, { useState,useEffect } from 'react'
import '../../_app.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import All from '../../components/pages/All'
import Following from '../../components/pages/Following'

const PagesScreen = () => {
  const [navbar, setNavbar] = useState(false);

    const changeNavPosition =() => {
        if (window.scrollY >= 10){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
  }
    window.addEventListener('scroll', changeNavPosition)
    return (
        <>
        <Tabs>
          <TabList className={navbar ? 'pagesidebar open': 'pagesidebar'}>
            <Tab>All</Tab>
            <Tab>Following</Tab>
          </TabList>

          <TabPanel>
            <All/>
          </TabPanel>
          <TabPanel>
            <Following/>
          </TabPanel>
        </Tabs>   
        </>
    )
}

export default PagesScreen
