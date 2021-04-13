import React from 'react'
import './_sidebar.scss'

import { 
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from 'react-icons/md'
import { RiStackFill } from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSidebar(false)}> 
            <Link to='/'>
                <li>
                    <MdHome size={23}/>
                    <span>Home</span> 
                </li>
            </Link>
            <li>
                <RiStackFill size={23}/>
                <span>Following Pages</span> 
            </li>
            <li>
                <MdThumbUp size={23}/>
                <span>Like Events</span> 
            </li>
            <Link to='/profile'>
                <li>
                    <BiUserPin size={23}/>
                    <span>Profile</span> 
                </li>
            </Link>
            <Link to='/pages'>
                <li>
                    <MdLibraryBooks size={23}/>
                    <span>My Pages</span> 
                </li>
            </Link>
            <hr/>
            <li>
                <MdExitToApp size={23}/>
                <span>Log Out</span> 
            </li>
            <hr/>
        </nav>
    )
}

export default Sidebar
