import { combineReducers } from 'redux';
import {
    USER_LIST_REQUEST,
    USER_LIST_ERROR, USER_LIST_SUCCESS, UNSET_USER, SET_USER } from './action_types';
import { User } from '../types/user';

interface UserListAction { type: string; userList: User[]; timeOfReceipt: Date; }
interface CurrentUserAction { type: string; currentUser: User; }

function currentUser(state: number = 1, action: CurrentUserAction) {
    switch (action.type) {
        case SET_USER:
            return action.currentUser;
        case UNSET_USER:
            return null;
        default:
            return state;
    }
}

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
                isFetching: false,
                isValid: false,
                lastUpdated: action.timeOfReceipt
            });
        default:
            return state;
    }
}

const bandTogether = combineReducers({
    currentUser,
    userList
});

export default bandTogether;