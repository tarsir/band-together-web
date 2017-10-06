import { connect } from 'react-redux';
import UserInfo from '../user/UserInfo';
import { AppStore } from '../../state/store';
// import { User } from '../../types/user';
import { getUserById } from '../../api/users';

const mapStateToProps = ( state: AppStore, ownProps: any ) => {
    const displayUser: any = getUserById(ownProps.match.params.userId);
    return {
        currentUser: state.currentUser,
        displayUser
    };
};

const UserInfoC = connect(
    mapStateToProps
)(UserInfo);

export default UserInfoC;