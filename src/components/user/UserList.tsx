import * as React from 'react';

import { User } from '../../types/user';

interface UserListProps {
    userList: User[];
}

interface UserItemPropsBase {
    user: User;
}

type UserItemProps = UserItemPropsBase & React.HTMLProps<any>;

class UserListItem extends React.Component<UserItemProps, {}> {
    render() {
        return (
            <li>{this.props.user.displayName} : {this.props.user.email}</li>
        );
    }
}

const UserListContainer = (props: UserListProps) => {
    const userItems = props.userList.map((user) => {
        return <UserListItem key={user.userId} user={user} />;
    });
    return (
        <ul>
            {userItems}
        </ul>
    );
};

const UserListHeader = () => {
    return (
        <h1>User List</h1>
    );
};

const UserList = (props: UserListProps) => {
    return (
        <div className="user-list-container">
            <UserListHeader />
            <UserListContainer userList={props.userList} />
        </div>
    );
};

export default UserList;