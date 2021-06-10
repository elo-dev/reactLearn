import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Message</NavLink></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav