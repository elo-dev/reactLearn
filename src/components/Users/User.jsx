import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import style from './Users.module.css'

const User = ({u, ...props}) => {
    return(
        <div className={style.usersWrapper} key={u.id}>
            <div className={style.usersFollow}>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                </NavLink>
                {u.followed 
                ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => 
                    {props.unfollow(u.id)}}>
                    Unfollow</button> 
                : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => 
                    {props.follow(u.id)}}>
                    Follow</button>
                }
            </div>
            <div className={style.usersInfo}>
                <div className={style.usersName}>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                </div>
                <div className={style.usersLocation}>
                    <p>country</p>
                    <p>city</p>
                </div>
            </div>
        </div>
    )
}

export default User