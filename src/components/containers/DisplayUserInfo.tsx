import { connect } from 'react-redux';
import UserInfo from '../user/UserInfo';
import { AppStore } from '../../state/store';

const mapStateToProps = ( state: AppStore ) => {
    return {
        currentUser: state.currentUser
    };
};

const DisplayUserInfo = connect(
    mapStateToProps
)(UserInfo);

export default DisplayUserInfo;