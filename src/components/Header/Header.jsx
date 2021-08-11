import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png" />
            </div>

            <div className={style.loginBlock}>
            {props.isAuth
                ? <div><p className={style.profileName}>{props.login}</p> <button onClick={props.logOutUser}>Выйти</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
            </div>
        </header>
    )
}

export default Header