import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import { getUserData } from '../../state/users/actions';

const mapStateToProps = ( state: any) => {
    return {
        currentUserId: state.auth.userId,
        displayUser: state.users.userData
    };
};

const mapDispatchToProps = ( dispatch: Function, ownProps: any) => {
    return {
        fetchUser: () => dispatch(getUserData(ownProps.match.params.userId))
    };
};

const UserInfoC = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo);

export default UserInfoC;