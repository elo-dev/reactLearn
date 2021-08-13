import React from 'react'
import style from './Paginator.module.css'

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {

let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return (
        <section className={style.usersSection}>
            <div className={style.pageCount}>
                {pages.map(p => {
                    return <span className={`${style.notSelectedPage} ${currentPage === p && style.selectedPage}`} onClick={(e) => {onPageChanged(p)}}>{p}</span>
                })}
            </div>
        </section>
    )
}

export default Paginator