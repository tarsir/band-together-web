import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AuthButtonStateProps {
    loggedIn: boolean;
}

interface AuthButtonDispatchProps { logoutHandler: () => void; }
type AuthButtonProps = AuthButtonDispatchProps & AuthButtonStateProps;

class AuthButton extends React.Component<AuthButtonProps, any> {
    render() {
        let button = (
            <Link className="button nav-link is-outlined" to="/login">
                Sign in here!
            </Link>
        );

        if (this.props.loggedIn) {
            button = (
                <Link className="nav-link is-outlined" to="/" onClick={this.props.logoutHandler}>
                    Sign out here!
                </Link>
            );
        }

        return (
            <div className="navbar-item">
                {button}
            </div>
        );
    }
};

export default AuthButton;
