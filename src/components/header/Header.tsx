import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/user';
import AuthButtonC from '../containers/AuthButtonC';

export interface HeaderProps { currentUser: User; }

const Header = (props: HeaderProps) => {
    let greeting = <p>Hello there</p>;

    if (props.currentUser) {
        greeting = <p>Hello, {props.currentUser.userId}</p>;
    }

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main-navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        Band Together
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/users">
                            User List
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <AuthButtonC />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;