import { User } from '../types/user';

const API_URL_DEV = 'http://127.0.0.1:4000';

async function getUsers(): Promise<User[]> {
    const response = await fetch(API_URL_DEV + '/users');
    const json = await response.json();
    return json.data;
}

function getUserById(userList: User[], userId: number): User {
    return userList.find((user) => {
        return user.id == userId;
    });
}

export {
    getUsers,
    getUserById
};