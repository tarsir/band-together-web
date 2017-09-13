import * as React from 'react';

import { User } from '../../types/user';

interface UserInfoProps {
    readonly currentUser: User;
    readonly displayUser: User;
}

interface UserInfoHeaderProps {
    readonly userName: string;
}

const UserInfoHeader = (props: UserInfoHeaderProps) => {
    return (
        <h1>{props.userName}</h1>
    );
};

const UserInfo = (props: UserInfoProps) => {
    return (
        <div className="user-info">
            <UserInfoHeader userName={props.displayUser.displayName} />
        </div>
    );
};

export default UserInfo;