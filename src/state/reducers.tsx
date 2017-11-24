import { combineReducers } from 'redux';
import auth from './auth/reducers';
import bands from './bands/reducers';
import users from './users/reducers';

const bandTogether = combineReducers({
    auth,
    bands,
    users
});

export default bandTogether;