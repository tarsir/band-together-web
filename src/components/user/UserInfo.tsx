import * as React from 'react';

import { User } from '../../types/user';

interface UserInfoProps {
    readonly currentUser: User;
    readonly displayUser: User;
}

interface UserInfoHeaderProps {
    readonly displayName: string;
}

const UserInfoHeader = (props: UserInfoHeaderProps) => {
    return (
        <h1 className="user-info-header">{props.displayName}</h1>
    );
};

const UserInfo = (props: UserInfoProps) => {
    return (
        <div className="columns">
            <div className="user-info column is-half has-text-centered">
                <UserInfoHeader displayName={props.displayUser.stage_name} />
            </div>
        </div>
    );
};

export default UserInfo;