import {
    postRequest
} from './api_base';

interface SessionData  { sessionToken: string; userId: number; }

import AuthenticationError from '../exceptions/errors';

async function login(email: string, password: string): Promise<Response> {
    try {
        const loginResponse = await postRequest('/sessions', {email, password});
        return validateLoginResponse(loginResponse);
    } catch (e) {
        throw e;
    }
}

function clearSessionData() {
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userId');
}

function setSessionToken(sessionToken: string, userId: number) {
    localStorage.setItem('sessionToken', sessionToken);
    localStorage.setItem('userId', userId.toString());
}

function getSessionToken(): SessionData {
    return {
        'sessionToken' : localStorage.getItem('sessionToken'),
        'userId' : parseInt(localStorage.getItem('userId'))
    };
}

function validateLoginResponse(loginResponse: Response): Response {
    if (loginResponse.ok) {
        return loginResponse;
    }
    throw new AuthenticationError();
}

export {
    login,
    setSessionToken,
    getSessionToken,
    clearSessionData,
    SessionData
};
