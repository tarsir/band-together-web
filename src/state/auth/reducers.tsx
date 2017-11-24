import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
    USER_SESSION_LOGIN,
    USER_LOGOUT
} from './action_types';

interface UserLoginAction { type: string; sessionToken: string; userId: number; timeOfReceipt: Date; }
interface UserLoginState {
    userId: number;
    sessionToken: string;
    isFetching: boolean;
    isValid: boolean;
    lastUpdated: Date;
}

const initialUserLogin: UserLoginState = {
    userId: null,
    sessionToken: null,
    isFetching: false,
    isValid: false,
    lastUpdated: null,
};

function currentUser(
    state: UserLoginState = initialUserLogin,
    action: UserLoginAction
) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isValid: false
            });
        case USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                userId: action.userId,
                sessionToken: action.sessionToken,
                isFetching: false,
                isValid: true,
                lastUpdated: action.timeOfReceipt
            });
        case USER_LOGIN_ERROR:
            return Object.assign({}, state, {
                isFetching: true,
                isValid: false,
                lastUpdated: action.timeOfReceipt
            });
        case USER_SESSION_LOGIN:
            return Object.assign({}, state, {
                userId: action.userId,
                sessionToken: action.sessionToken,
                isFetching: false,
                isValid: true
            });
        case USER_LOGOUT:
            return Object.assign({}, state, {
                userId: null,
                sessionToken: null,
                isFetching: false,
                isValid: true,
                lastUpdated: Date.now()
            });
        default:
            return state;
    }
}

export default currentUser;
