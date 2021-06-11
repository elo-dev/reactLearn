import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './FriendsItems.module.css'

const FriendsItems = (props) => {
    return(
        <span className={style.item}>
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png" alt="" />
            <p className={style.itemName}><NavLink to={"/id" + props.id}>{props.name}</NavLink></p>
        </span>
    )
}

export default FriendsItems