import { connect } from 'react-redux';
import UserInfo from '../user/UserInfo';
import { User } from '../../types/user';
import { getUserById } from '../../api/users';

const mapStateToProps = ( state: any, ownProps: any ) => {
    const displayUser: User = getUserById(state.userList.userList, ownProps.match.params.userId);
    return {
        currentUserId: state.currentUser,
        displayUser
    };
};

const UserInfoC = connect(
    mapStateToProps
)(UserInfo);

export default UserInfoC;