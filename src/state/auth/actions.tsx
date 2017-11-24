import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_SESSION_LOGIN,
    USER_LOGOUT
} from './action_types';

import { login, setSessionToken, getSessionToken, clearSessionData, SessionData } from '../../api/auth';
import { redirectTo } from '../../api/navigation';

function requestUserLogin() {
    return {
        type: USER_LOGIN_REQUEST
    };
}

function useExistingSession() {
    const sessionData: SessionData = getSessionToken();
    return {
        type: USER_SESSION_LOGIN,
        userId: sessionData.userId,
        sessionToken: sessionData.sessionToken
    };
}

function receiveUserLogin(sessionToken: string, userId: number) {
    return {
        type: USER_LOGIN_SUCCESS,
        sessionToken,
        userId,
        timeOfReceipt: Date.now()
    };
}

function logout() {
    clearSessionData();
    return {
        type: USER_LOGOUT
    };
}

function userLoginError() {
    return {
        type: USER_LOGIN_ERROR
    };
}

function getUserLogin(email: string, password: string) {
    return async (dispatch) => {
        dispatch(requestUserLogin());

        try {
            const loginResponse: any = await login(email, password);
            const responseJson: any = await loginResponse.json();
            setSessionToken(responseJson.token, responseJson.user_id);
            dispatch(receiveUserLogin(responseJson.token, responseJson.user_id));
            redirectTo('/', dispatch);
        } catch (e) {
            dispatch(userLoginError());
        }
    };
}

export {
    getUserLogin,
    useExistingSession,
    logout
};
