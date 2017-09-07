import { SET_USER, UNSET_USER } from './action_types.js';

function setUser(userId) {
    return {
        type: SET_USER,
        userId
    }
}

function unsetUser() {
    return {
        type: UNSET_USER
    }
}

export {
    setUser,
    unsetUser
};