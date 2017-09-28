import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AuthButtonProps {
    loggedIn: boolean;
}

const AuthButton = (props: AuthButtonProps) => {
    let button = (
        <Link className="button nav-link is-outlined" to="/login">
            Sign in here!
        </Link>
    );

    if (props.loggedIn) {
        button = (
            <Link className="nav-link is-outlined" to="/logout">
                Sign out here!
            </Link>
        );
    }

    return (
        <div className="navbar-item">
            {button}
        </div>
    );
};

export default AuthButton;