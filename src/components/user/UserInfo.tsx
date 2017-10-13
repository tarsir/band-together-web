import * as React from 'react';

import { User } from '../../types/user';
import TalentList from './TalentView';

interface UserInfoStateProps {
    currentUserId: number;
    displayUser: any | {};
}

interface UserInfoDispatchProps {
    fetchUser: () => any;
}

type UserInfoProps = UserInfoStateProps & UserInfoDispatchProps;

interface UserInfoDetailsProps {
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

const UserInfoDetails = (props: UserInfoDetailsProps) => {
    return (
        <div>
            <div>{props.displayUser.first_name} {props.displayUser.last_name}</div>
            <TalentList talents={props.displayUser.talents} />
        </div>
    );
};

class UserInfo extends React.Component<UserInfoProps, {}> {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        if (this.props.displayUser.isValid) {
            return (
                <div className="columns">
                    <div className="user-info column is-half has-text-centered">
                        <UserInfoHeader displayName={this.props.displayUser.userData.stage_name} />
                        <UserInfoDetails displayUser={this.props.displayUser.userData} />
                    </div>
                </div>
            );
        }

        return (
            // this will be a saigo sexy super spinner
            <div>spin</div>
        );
    }
}

export default UserInfo;