import { getSessionToken } from './auth';

const API_URL_DEV = process.env.APP_API_URL || 'http://127.0.0.1:4000';

function constructRequestOptions(method: string, params: any, authNeeded: boolean): RequestInit {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    if (authNeeded) {
        addAuthorizationHeaders(headers);
    }

    return {
        method,
        headers,
        mode: 'cors',
        cache: 'default',
    };
}

async function postRequest(endpoint: string, params: any, authNeeded: boolean = false): Promise<any> {
    let requestOptions = constructRequestOptions('POST', params, authNeeded);
    requestOptions['body'] = JSON.stringify(params);
    try {
        const response = await fetch(API_URL_DEV + endpoint, requestOptions);
        return response;
    } catch (e) {
        console.log(e);
    }
}

async function getRequest(endpoint: string, authNeeded: boolean = false): Promise<any> {
    const requestOptions: RequestInit = constructRequestOptions('GET', {}, authNeeded);
    try {
        const response = await fetch(API_URL_DEV + endpoint, requestOptions);
        return response;
    } catch (e) {
        console.log(e);
    }
}

function addAuthorizationHeaders(headers: Headers): void {
    const sessionData = getSessionToken();
    headers.append('Authorization', 'Token token=' + sessionData.sessionToken);
}

export {
    postRequest,
    getRequest
};
