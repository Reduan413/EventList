import React, { useState,useEffect } from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import Profile from './components/setting/Profile'
import './_app.scss'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import PageIndex from './components/page/PageIndex'
import LikePage from './screens/homeScreen/LikeEvent'
import PagesScreen from './screens/pagesScreen/PagesScreen'
import OwnPage from './components/createPage/OwnPage'
import InterstedEvent from './components/intersted/InterstedEvent'


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
    <Provider store={store}>
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
        <Route path="/intersted" exact>
          <Layout>
            <InterstedEvent/>
          </Layout>
        </Route>
        <Route path="/mypages" exact>
          <Layout>
            <OwnPage/>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Provider>
  )
}

export default App
