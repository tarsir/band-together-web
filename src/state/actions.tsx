import {
    SET_USER,
    UNSET_USER,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_ERROR
} from './action_types';

import { getUsers } from '../api/users';
import { User } from '../types/user';

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

function requestUserList() {
    return {
        type: USER_LIST_REQUEST
    };
}

function receiveUserList(userList: User[]) {
    return {
        type: USER_LIST_SUCCESS,
        userList,
        timeOfReceipt: Date.now()
    };
}

function userListError() {
    return {
        type: USER_LIST_ERROR,
        timeOfReceipt: Date.now()
    };
}

function getUserList() {
    return (dispatch) => {
        dispatch(requestUserList());

        return getUsers()
            .then(
                response => response,
                error => dispatch(userListError())
            ).then(
                json => {
                    dispatch(receiveUserList(json));
                }
            );
    };
}

export {
    setUser,
    unsetUser,
    getUserList
};