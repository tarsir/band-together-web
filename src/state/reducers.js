import { combineReducers } from 'redux';
import { UNSET_USER, SET_USER } from './action_types';

function currentUser(state = 1, action) {
    switch (action.type) {
        case SET_USER:
            return action.userId;
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