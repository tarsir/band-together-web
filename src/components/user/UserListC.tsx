import { connect } from 'react-redux';
import { getUserList } from '../../state/actions';
import UserList from './UserList';

const mapStateToProps = ( state: any ) => {
    return {
        userList: state.userList.userList
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