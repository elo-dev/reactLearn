import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <MyPosts onPostChangeText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer