import { connect } from 'react-redux';
import { getBandList } from '../../state/actions';
import BandList from './BandList';

const mapStateToProps = ( state: any ) => {
    return {
        bandList: state.bandList.bandList
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchItems: () => dispatch(getBandList())
    };
};

const BandListC = connect(
    mapStateToProps,
    mapDispatchToProps
)(BandList);

export default BandListC;