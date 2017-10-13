import { connect } from 'react-redux';
import UserInfo from '../user/UserInfo';
import { getUserData } from '../../state/actions';

const mapStateToProps = ( state: any) => {
    return {
        currentUserId: state.currentUser,
        displayUser: state.userData
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