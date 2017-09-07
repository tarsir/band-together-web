import * as React from 'react';

export interface UserInfoProps { userId: number; }

const UserInfo = (props: UserInfoProps) => {
    return (
        <div className="user-info">
            <h1>{props.userId}</h1>
        </div>
    );
};

export default UserInfo;