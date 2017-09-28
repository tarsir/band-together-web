import { User } from '../types/user';

const fakeUsers: User[] = [
    {
        userId: 1,
        displayName: 'Joe Hogs',
        firstName: 'Joe',
        lastName: 'Hogs',
        email: 'aa@aa.com'
    },
    {
        userId: 2,
        displayName: 'Bill Spill',
        firstName: 'Bill',
        lastName: 'Spill',
        email: 'bb@aa.com'
    },
    {
        userId: 3,
        displayName: 'ZORK',
        firstName: 'ZORK',
        lastName: 'ZORK',
        email: 'zork@zork.com'
    }
];

async function getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
        resolve(fakeUsers);
    });
}

function getUserById(userId: number): User {
    return fakeUsers.find((user) => {
        return user.userId === userId;
    });
}

export {
    getUsers,
    getUserById
};