import { connect } from 'react-redux';
// import { unsetUser } from '../../state/actions.js';

import { AppStore } from '../../state/store';
import Header from '../header/Header';

const mapStateToProps = ( state: AppStore ) => {
    return {
        currentUser: state.currentUser
    };
};

const HeaderC = connect(
    mapStateToProps
)(Header);

export default HeaderC;