import { connect } from 'react-redux';
import { setUser, unsetUser } from '../../state/actions';
import { AppStore } from '../../state/store';

import AuthButton from '../header/AuthButton';

const mapStateToProps = ( state: AppStore ) => {
    return {
        loggedIn: state.currentUser ? true : false
    };
};

const mapDispatchToProps = ( dispatch: Function ) => {
    return {
        loginButtonHandler: () => {
            dispatch(setUser(1));
        },
        logoutButtonHandler: () => {
            dispatch(unsetUser());
        }
    };
};

const AuthButtonC = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthButton);

export default AuthButtonC;