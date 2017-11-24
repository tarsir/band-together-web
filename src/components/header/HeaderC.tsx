import { connect } from 'react-redux';

import Header from '../header/Header';

const mapStateToProps = ( state: any ) => {
    return {
        currentUser: state.auth.userId
    };
};

const HeaderC = connect(
    mapStateToProps
)(Header);

export default HeaderC;