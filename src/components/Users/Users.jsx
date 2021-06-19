import * as axios from 'axios'
import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'

class Users extends React.Component{

    constructor(props){
        super(props)

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        return (
            <section className={style.usersSection}>
                {this.props.users.map(u => <div className={style.usersWrapper} key={u.id}>
                    <div className={style.usersFollow}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                        {u.followed 
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
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
}

export default Users