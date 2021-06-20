import * as axios from 'axios'
import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'

class Users extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for(let i = 1; i <= pageCount; i++){
            pages.push(i)
        }

        return (
            <section className={style.usersSection}>
                <div className={style.pageCount}>
                    {pages.map(p => {
                        return <span className={`${style.notSelectedPage} ${this.props.currentPage === p && style.selectedPage}`} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
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