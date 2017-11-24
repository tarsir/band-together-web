import { connect } from 'react-redux';
import { getUserList } from '../../state/users/actions';
import UserList from './UserList';

const mapStateToProps = ( state: any ) => {
    return {
        userList: state.users.userList.userList
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchItems: () => dispatch(getUserList())
    };
};

const UserListC = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserListC;