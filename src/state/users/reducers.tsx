import { combineReducers } from 'redux';
import {
    USER_LIST_REQUEST,
    USER_LIST_ERROR,
    USER_LIST_SUCCESS,
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_ERROR,
} from './action_types';
import { User } from '../../types/user';

interface UserListAction { type: string; userList: User[]; timeOfReceipt: Date; }
interface UserDataAction { type: string; userData: User; timeOfReceipt: Date; }

interface UserDataState {
    userData: User;
    isFetching: boolean;
    isValid: boolean;
    lastUpdated: Date;
}

const initialUserData: UserDataState = {
    userData: null,
    isFetching: false,
    isValid: false,
    lastUpdated: null
};

interface UserListState {
    userList: User[];
    isFetching: boolean;
    isValid: boolean;
    lastUpdated: Date;
}

const initialUserList: UserListState = {
    userList: [],
    isFetching: false,
    isValid: false,
    lastUpdated: null
};

function userList(
    state: UserListState = initialUserList,
    action: UserListAction
) {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return Object.assign({}, state, {
                userList: [],
                isFetching: true,
                isValid: false
            });
        case USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                userList: action.userList,
                isFetching: false,
                isValid: true,
                lastUpdated: action.timeOfReceipt
            });
        case USER_LIST_ERROR:
            return Object.assign({}, state, {
                userList: [],
                isFetching: false,
                isValid: false,
                lastUpdated: action.timeOfReceipt
            });
        default:
            return state;
    }
}

function userData(
    state: UserDataState = initialUserData,
    action: UserDataAction
) {
    switch (action.type) {
        case USER_DATA_REQUEST:
            return Object.assign({}, state, {
                userData: action.userData,
                isFetching: true,
                isValid: false
            });
        case USER_DATA_SUCCESS:
            return Object.assign({}, state, {
                userData: action.userData,
                isFetching: false,
                isValid: true,
                lastUpdated: action.timeOfReceipt
            });
        case USER_DATA_ERROR:
            return Object.assign({}, state, {
                userData: action.userData,
                isFetching: true,
                isValid: false,
                lastUpdated: action.timeOfReceipt
            });
        default:
            return state;
    }
}

const users = combineReducers({
    userList,
    userData
});

export default users;