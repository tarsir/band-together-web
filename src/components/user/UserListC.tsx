import { connect } from 'react-redux';
import UserList from './UserList';

const mapStateToProps = ( state: any ) => {
    return {
        userList: state.userList.userList
    };
};

const UserListC = connect(
    mapStateToProps
)(UserList);

export default UserListC;