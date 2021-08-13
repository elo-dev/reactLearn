import React from 'react'
import style from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = (props) =>{
    return(
        <section className={style.usersSection}>
                <Paginator  currentPage={props.currentPage}
                            onPageChanged={props.onPageChanged}
                            totalUsersCount={props.totalUsersCount}
                            pageSize={props.pageSize}
                            />

        {props.users.map(u => <User u={u}
                                    isFollowing={props.isFollowing}
                                    follow={props.follow}
                                    unfollow={props.unfollow}
                                    />)}
        </section>
    )
}

export default Users