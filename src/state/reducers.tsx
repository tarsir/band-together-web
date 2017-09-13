import { combineReducers } from 'redux';
import { UNSET_USER, SET_USER } from './action_types';
import { User } from '../types/user';

interface CurrentUserAction { type: string; currentUser: User; }

function currentUser(state: User = null, action: CurrentUserAction) {
    switch (action.type) {
        case SET_USER:
            return action.currentUser;
        case UNSET_USER:
            return null;
        default:
            return state;
    }
}

const bandTogether = combineReducers({
    currentUser
});

export default bandTogether;