import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AuthButtonProps {
    loggedIn: boolean;
}

const AuthButton = (props: AuthButtonProps) => {
    let button = (
        <Link className="header-auth-button" to="/login">
            Sign in here!
        </Link>
    );

    if (props.loggedIn) {
        button = (
            <Link className="header-auth-button" to="/logout">
                Sign out here!
            </Link>
        );
    }

    return (
        <div>
            {button}
        </div>
    );
};

export default AuthButton;