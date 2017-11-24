import { connect } from 'react-redux';
import { logout } from '../../state/auth/actions';

import AuthButton from './AuthButton';

const mapStateToProps = ( state: any ) => {
    return {
        loggedIn: state.auth.userId ? true : false
    };
};

const mapDispatchToProps = ( dispatch: Function ) => {
    return {
        logoutHandler: () => {
            dispatch(logout());
        }
    };
};

const AuthButtonC = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthButton);

export default AuthButtonC;
