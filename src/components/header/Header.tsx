import * as React from 'react';
import AuthButtonC from '../containers/AuthButtonC';
import { User } from '../../types/user';

export interface HeaderProps { currentUser: User; }

const Header = (props: HeaderProps) => {
    let greeting = <p>Hello there</p>;

    if (props.currentUser) {
        greeting = <p>Hello, {props.currentUser.userId}</p>;
    }

    return (
        <div className="header">
            {greeting}
            <AuthButtonC />
        </div>
    );
};

export default Header;