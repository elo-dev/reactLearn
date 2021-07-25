import React from 'react'
import * as axios from 'axios'
import style from './Users.module.css'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import { NavLink } from 'react-router-dom'

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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "0e5c0981-d3a9-4812-a1cb-d8d1f4461a03"
                                }
                            }).then(response => {
                                if(response.data.resultCode === 0){
                                    props.unfollow(u.id)
                                    }
                                })
                            }}>Unfollow</button> 
                        : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "0e5c0981-d3a9-4812-a1cb-d8d1f4461a03"
                                    }
                                }).then(response => {
                                if(response.data.resultCode === 0){
                                    props.follow(u.id)
                                    }
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