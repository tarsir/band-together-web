import { User } from '../types/user';

// TODO: fix for async stuff
export interface AppStore {
    currentUser: User;
    userList: User[];
}

/*
    userList: {
        data: User[],
        isFetched: bool,
        lastFetched: DateTime
    }
*/