import { connect } from 'react-redux';
import { getUserLogin } from '../../state/auth/actions';

import LoginPage from './LoginPage';

const mapDispatchToProps = (dispatch: Function, ownProps: any) => {
    return {
        loginHandler: (email: string, password: string) => {
            dispatch(getUserLogin(email, password));
        }
    };
};

const LoginPageC = connect(
    (state: any) => {},
    mapDispatchToProps
)(LoginPage);

export default LoginPageC;