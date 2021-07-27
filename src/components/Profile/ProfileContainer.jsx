import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReducer'
import Profile from './Profile'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render(){
        return(
            <section className="profileWrapper">
                <Profile {...this.props} profile={this.props.profile} />
            </section>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)