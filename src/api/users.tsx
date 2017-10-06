import { User } from '../types/user';

const API_URL_DEV = 'http://127.0.0.1:4000';

async function getUsers(): Promise<User[]> {
    const response = await fetch(API_URL_DEV + '/users');
    const json = await response.json();
    return json.data;
}

async function getUserById(userId: number): Promise<User> {
    const response = await fetch(API_URL_DEV + '/users/' + userId);
    const json = await response.json();
    return json.data;
}

async function testApiCall(): Promise<object> {
    const res = await fetch('http://127.0.0.1:4000/api/test');
    const json = await res.json();
    return json;
}

export {
    getUsers,
    getUserById,
    testApiCall
};