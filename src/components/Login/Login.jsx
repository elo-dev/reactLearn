import React from 'react' 
import { Field, Form } from 'react-final-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import formControl from '../../hoc/formControl'
import { loginUser } from '../../redux/authReducer'
import { composeValidators, required } from '../../utils/validators/validators'

const LoginForm = (props) => {

    const Input = formControl('input')

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return(
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit, pristine, submitting}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder='email' type={'email'} name={'email'} component={Input} validate={composeValidators(required)} />
                </div>
                <div>
                    <Field placeholder={'password'} type='password' name={'password'} component={Input} validate={composeValidators(required)} />
                </div>
                <div>
                    <label>rememberMe</label>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input} />
                </div>
                <button type='submit' disabled={pristine || submitting}>Отправить</button>
            </form>
            )}
        </Form>
    )
}

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginForm loginUser={loginUser} onSubmit={onSubmit} isAuth={props.isAuth} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login)