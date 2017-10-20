import * as React from 'react';

import { User } from '../../types/user';
import TalentList from './TalentView';
import PortfolioList from './PortfolioView';

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
            <table className="user-info-table">
                <tr>
                    <td>Name: </td>
                    <td>{props.displayUser.first_name} {props.displayUser.last_name}</td>
                </tr>
                <tr>
                    <td>Country: </td>
                    <td>{props.displayUser.location.country}</td>
                </tr>
                <tr>
                    <td>State: </td>
                    <td>{props.displayUser.location.state}</td>
                </tr>
                <tr>
                    <td>City: </td>
                    <td>{props.displayUser.location.city}</td>
                </tr>
                <tr>
                    <td>Bio: </td>
                    <td>{props.displayUser.biography}</td>
                </tr>
                <tr>
                    <td>Talents: </td>
                    <td><TalentList talents={props.displayUser.talents} /></td>
                </tr>
                <tr>
                    <td>Portfolio: </td>
                    <td><PortfolioList portfolios={props.displayUser.portfolios} /></td>
                </tr>
            </table>
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
                <div className="columns is-centered">
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