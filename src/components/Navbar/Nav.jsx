import React from 'react'
import style from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a>Profile</a></li>
                <li><a>Message</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav