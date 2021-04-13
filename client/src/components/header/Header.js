import React from 'react'
import './_header.scss'
import loginImg from '../../login.svg';
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="header">
            <FaBars className="header__menu" size={26} onClick={() => handleToggleSidebar()}/>
            <Link to='/'><img
                src={loginImg}
                alt="logo"
                className="header__logo"
            />
            </Link>

            <form>
                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <img
                    src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                    alt="avater"
                />
            </div>
        </div>
    )
}

export default Header
