import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, unfollow, toggleIsFollowing, requestUsers } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getUsers, getCurrentPage, getIsFetching, getIsFollowing, getPageSize, getTotalUsersCount } from '../../redux/usersSelector'

class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render(){
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFollowing={this.props.isFollowing}
                      />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.isFollowing
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleIsFollowing, requestUsers}),
)(UsersContainer)

// let withRedirect = withAuthRedirect(UsersContainer)

// export default connect(mapStateToProps, 
//     {follow, unfollow, setCurrentPage, toggleIsFollowing, getUsers})(withRedirect)