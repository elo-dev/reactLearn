import React from 'react'
import * as axios from 'axios'
import style from './Users.module.css'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

let Users = (props) =>{

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return(
        <section className={style.usersSection}>
                <div className={style.pageCount}>
                    {pages.map(p => {
                        return <span className={`${style.notSelectedPage} ${props.currentPage === p && style.selectedPage}`} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {props.users.map(u => <div className={style.usersWrapper} key={u.id}>
                    <div className={style.usersFollow}>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                        </NavLink>
                        {u.followed 
                        ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowing(true, u.id)
                            usersAPI.unfollow(u.id).then(data => {
                                if(data.resultCode === 0){
                                    props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowing(false, u.id)
                                })
                            }}>Unfollow</button> 
                        : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowing(true, u.id)
                                usersAPI.follow(u.id).then(data => {
                                if(data.resultCode === 0){
                                    props.follow(u.id)
                                    }
                                props.toggleIsFollowing(false, u.id)
                                })
                            }}>Follow</button>
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
                </div>)}
            </section>
    )
}

export default Users