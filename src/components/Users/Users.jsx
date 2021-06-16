import React from 'react'
import style from './Users.module.css'

const Users = (props) => {
    return (
        <section className={style.usersSection}>
            {props.users.map(u => <div className={style.usersWrapper} key={u.id}>
                <div className={style.usersFollow}>
                    <img src={u.photoUrl} alt="" />
                    {u.followed 
                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
                <div className={style.usersInfo}>
                    <div className={style.usersName}>
                        <p>{u.fullName}</p>
                        <p>{u.status}</p>
                    </div>
                    <div className={style.usersLocation}>
                        <p>{u.location.country}</p>
                        <p>{u.location.city}</p>
                    </div>
                </div>
            </div>)}
        </section>
    )
}

export default Users