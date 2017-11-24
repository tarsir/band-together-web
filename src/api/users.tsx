import { User } from '../types/user';
import { getRequest } from './api_base';

async function getUsers(): Promise<User[]> {
    const response = await getRequest('/users', true);
    const json = await response.json();
    return json.data;
}

async function getUserById(userId: number): Promise<User> {
    const response = await getRequest('/users/' + userId);
    const json = await response.json();
    return json.data;
}

function getUserFromList(userList: User[], userId: number): User {
    return userList.find((user) => {
        return user.id === userId;
    });
}

export {
    getUsers,
    getUserById,
    getUserFromList
};
