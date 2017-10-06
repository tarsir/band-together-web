import * as React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../types/user';
import './user.less';

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
            <li className="user-listing">
                <Link to={`/users/${this.props.user.id}`}>
                    {this.props.user.first_name + this.props.user.last_name}
                </Link>
            </li>
        );
    }
}

const UserListContainer = (props: UserListProps) => {
    const userItems = props.userList.map((user) => {
        return <UserListItem key={user.id} user={user} />;
    });
    return (
        <ul>
            {userItems}
        </ul>
    );
};

const UserListHeader = () => {
    return (
        <h1 className="user-list-header">User List</h1>
    );
};

const UserList = (props: UserListProps) => {
    return (
        <div className="user-list-container has-text-centered">
            <UserListHeader />
            <UserListContainer userList={props.userList} />
        </div>
    );
};

export default UserList;