import React from 'react' 
import { Field, Form } from 'react-final-form'
import { connect } from 'react-redux'
import formControl from '../../hoc/formControl'
import { loginUser } from '../../redux/loginReducer'
import { composeValidators, maxLength, required } from '../../utils/validators/validators'

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <LoginForm loginUser={loginUser} />
        </div>
    )
}

class LoginForm extends React.Component {

    componentDidMount(){
        this.props.loginUser()
    }

    render(){

        const Input = formControl('input')

        return(
            <Form onSubmit={formData => this.props.loginUser(formData.email, formData.password)}>
                {({handleSubmit, pristine, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field placeholder='email' type={'email'} name={'email'} component={Input} validate={composeValidators(required, maxLength(10))} />
                    </div>
                    <div>
                        <Field placeholder={'password'} type='password' name={'password'} component={Input} validate={composeValidators(required, maxLength(10))} />
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
}

let mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {loginUser})(Login)