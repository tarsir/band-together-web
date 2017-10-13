import * as React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../types/user';
import './user.less';

interface UserListStateProps {
    userList: User[];
}
interface UserListDispatchProps {
    fetchItems: () => any;
}

interface UserListContainerProps {
    userList: User[];
}

interface UserItemPropsBase {
    user: User;
}

type UserListProps = UserListStateProps & UserListDispatchProps;
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

const UserListContainer = (props: UserListContainerProps) => {
    let userItems;
    if (props.userList.length) {
        userItems = props.userList.map((user) => {
            return <UserListItem key={user.id} user={user} />;
        });
    }
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

// because this component is connected, the props interface must be an
// intersection type of state props & dispatch props
class UserList extends React.Component<UserListProps, {}> {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <div className="user-list-container has-text-centered">
                <UserListHeader />
                <UserListContainer userList={this.props.userList}/>
            </div>
        );
    }
}

export default UserList;