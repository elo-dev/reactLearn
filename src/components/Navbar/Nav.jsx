import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendsItems from './Friends/FriendsItems'
import style from './Nav.module.css'
import styleFriends from './Friends/FriendsItems.module.css'
import StoreContext from '../../StoreContext'

const Nav = () => {

    return <StoreContext.Consumer>
        { (store) => {

        let friendsElement = store.getState().sideBar.friends.map(f => <FriendsItems id={f.id} name={f.name} />)

            return (
                <nav className={style.nav}>
                    <ul>
                        <li><NavLink activeClassName={style.linkTabs} to="/profile">Profile</NavLink></li>
                        <li><NavLink activeClassName={style.linkTabs} to="/dialogs">Message</NavLink></li>
                        <li><a>News</a></li>
                        <li><a>Music</a></li>
                        <li><a>Settings</a></li>
                    </ul>

                    <div className={styleFriends.navFriendsWrapper}>
                        <h2>Friends</h2>
                        <div className={styleFriends.itemsWrapper}>
                            {friendsElement}
                        </div>
                    </div>
                </nav>
            )
        }
    }
    </StoreContext.Consumer>
}

export default Nav