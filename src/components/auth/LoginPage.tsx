import * as React from 'react';
import { form } from 'react-inform';
import './auth.less';

const fields: string[] = ['email', 'password'];

interface LoginState { error: string; message: string; }
interface LoginFormProps { fields: { email: any; password: any; }; form: any; }
interface LoginDispatchProps { loginHandler: (email: string, password: string) => void; }

type LoginProps = LoginFormProps & LoginDispatchProps;

class LoginPageClass extends React.Component<LoginProps, LoginState> {
    constructor(props: any) {
        super(props);
        this.state = { error: null, message: null };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        const loginForm = this.props.fields;

        // call login with form fields here
        this.props.loginHandler(loginForm.email.value, loginForm.password.value);
    }

    render() {
        const { email, password } = this.props.fields;

        return (
            <div className="columns">
                <form className="is-offset-one-quarter is-half has-text-centered column" onSubmit={this.handleSubmit}>
                    <h1 className="subtitle is-1">Login</h1>
                    <h4 className="error">{this.state.error}</h4>
                    <h4 className="message">{this.state.message}</h4>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="text" {...email.props} />
                        </div>
                        <span>{email.error}</span>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" {...password.props} />
                        </div>
                        <span>{password.error}</span>
                    </div>

                    <div className="field">
                        <div className="has-text-left control register-bottom">
                            <input className="button" type="submit" value="Sign In" />
                        </div>
                        <div className="has-text-right register-bottom">
                            <a href="/register">Register</a>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

const LoginPage = form({
    fields
})(LoginPageClass);

export default LoginPage;
