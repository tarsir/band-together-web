import { connect } from 'react-redux';
import BandInfo from './BandInfo';
import { getBandData } from '../../state/actions';

const mapStateToProps = ( state: any) => {
    return {
        currentBandId: state.currentBand,
        displayBand: state.bandData
    };
};

const mapDispatchToProps = ( dispatch: Function, ownProps: any) => {
    return {
        fetchBand: () => dispatch(getBandData(ownProps.match.params.bandId))
    };
};

const BandInfoC = connect(
    mapStateToProps,
    mapDispatchToProps
)(BandInfo);

export default BandInfoC;