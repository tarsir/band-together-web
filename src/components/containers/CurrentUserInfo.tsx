import { connect } from 'react-redux';
import UserInfo from '../user/UserInfo';

const mapStateToProps = ( state: any ) => {
    return {
        userId: state.currentUser
    };
};

const CurrentUserInfo = connect(
    mapStateToProps
)(UserInfo);

export default CurrentUserInfo;