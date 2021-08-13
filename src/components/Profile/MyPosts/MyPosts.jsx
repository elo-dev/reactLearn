import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'
import { Field, Form } from 'react-final-form'
import { composeValidators, maxLength, required } from '../../../utils/validators/validators'
import formControl from '../../../hoc/formControl'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like} />)

  let addPost = (value) => {
    props.addPost(value.postBody)
  }

    return (
        <div className={style.infoAboutMe}>
          <h2>My Posts</h2>
          <div className={style.createNewPost}>
            <PostForm addPost={addPost} />
          </div>
          <div className={style.posts}>
           {postsElements}
          </div>
        </div>
    )
}

const PostForm = (props) => {

const Textarea = formControl('textarea')

  return(
    <Form onSubmit={props.addPost}>
      {({handleSubmit, submitting, pristine}) => (
      <form onSubmit={handleSubmit}>
          <Field component={Textarea} name={'postBody'} placeholder={'Напишите пост'} validate={composeValidators(required, maxLength(10))} />
          <button className={style.btnAddNewPost} disabled={pristine || submitting} type={'submit'}>Добавить пост</button>
      </form>
      )}
    </Form>
  )
}

export default MyPosts