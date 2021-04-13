import React, { useState,useEffect } from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import Profile from './components/setting/Profile'
import './_app.scss'
import { Redirect, Route, Switch } from 'react-router-dom'
import PagesScreen from './screens/homeScreen/PagesScreen'
import PageIndex from './components/page/PageIndex'


const Layout = ({children}) => {
  const [ sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container className="app__main">
            {children}
        </Container>
      </div>
    </>
  )
}
const App = () => {
   return (
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen/>
          </Layout>
        </Route>
        <Route path="/profile" exact>
          <Layout>
            <Profile/>
          </Layout>
        </Route>
        <Route path="/auth" exact>
            <LoginScreen/>
        </Route>
        <Route path="/page" exact component={PageIndex}>
          <Layout>
            <PageIndex/>
          </Layout>
        </Route>
        <Route path="/search" exact>
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>
        <Route path="/pages" exact>
          <Layout>
            <PagesScreen/>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
  )
}

export default App
