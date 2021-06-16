import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const NavContainer = connect(mapStateToProps,mapDispatchToProps)(Nav)

export default NavContainer