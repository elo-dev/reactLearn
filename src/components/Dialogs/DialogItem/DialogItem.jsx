import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './DialogItem.module.css'

const DialogItem = (props) => {
    return(
        <div className={style.dialogPerson}>
                <img src="https://img.icons8.com/color/452/avatar.png"></img>
                <NavLink activeClassName={style.dialogPersonLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem