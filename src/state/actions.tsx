import {
    SET_USER,
    UNSET_USER,
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_ERROR,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_ERROR,
    BAND_DATA_REQUEST,
    BAND_DATA_SUCCESS,
    BAND_DATA_ERROR,
    BAND_LIST_REQUEST,
    BAND_LIST_SUCCESS,
    BAND_LIST_ERROR
} from './action_types';

import { getUsers, getUserById } from '../api/users';
import { getBands, getBandById } from '../api/bands';
import { User } from '../types/user';
import { Band } from '../types/band';

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

function requestUserData() {
    return {
        type: USER_DATA_REQUEST
    };
}

function receiveUserData(userData: User) {
    return {
        type: USER_DATA_SUCCESS,
        userData,
        timeOfReceipt: Date.now()
    };
}

function userDataError() {
    return {
        type: USER_DATA_ERROR
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

function getUserData(userId: number) {
    return (dispatch) => {
        dispatch(requestUserData());

        return getUserById(userId)
            .then(
                response => response,
                error => dispatch(userDataError())
            ).then(
                json => {
                    dispatch(receiveUserData(json));
                }
            );
    };
}

/*
* BAND STUFF
*/

function requestBandData() {
    return {
        type: BAND_DATA_REQUEST
    };
}

function receiveBandData(bandData: Band) {
    return {
        type: BAND_DATA_SUCCESS,
        bandData,
        timeOfReceipt: Date.now()
    };
}

function bandDataError() {
    return {
        type: BAND_DATA_ERROR
    };
}

function requestBandList() {
    return {
        type: BAND_LIST_REQUEST
    };
}

function receiveBandList(bandList: Band[]) {
    return {
        type: BAND_LIST_SUCCESS,
        bandList,
        timeOfReceipt: Date.now()
    };
}

function bandListError() {
    return {
        type: BAND_LIST_ERROR,
        timeOfReceipt: Date.now()
    };
}

function getBandList() {
    return (dispatch) => {
        dispatch(requestBandList());

        return getBands()
            .then(
                response => response,
                error => dispatch(bandListError())
            ).then(
                json => {
                    dispatch(receiveBandList(json));
                }
            );
    };
}

function getBandData(bandId: number) {
    return (dispatch) => {
        dispatch(requestBandData());

        return getBandById(bandId)
            .then(
                response => response,
                error => dispatch(bandDataError())
            ).then(
                json => {
                    dispatch(receiveBandData(json));
                }
            );
    };
}

export {
    setUser,
    unsetUser,
    getBandList,
    getBandData,
    getUserList,
    getUserData
};