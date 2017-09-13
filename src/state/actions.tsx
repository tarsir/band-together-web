import { SET_USER, UNSET_USER } from './action_types';

function setUser(userId: number) {
    return {
        type: SET_USER,
        userId
    };
}

function unsetUser() {
    return {
        type: UNSET_USER
    };
}

export {
    setUser,
    unsetUser
};