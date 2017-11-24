import {
    BAND_DATA_REQUEST,
    BAND_DATA_SUCCESS,
    BAND_DATA_ERROR,
    BAND_LIST_REQUEST,
    BAND_LIST_SUCCESS,
    BAND_LIST_ERROR
} from './action_types';

import { getBands, getBandById } from '../../api/bands';
import { Band } from '../../types/band';

function requestBandData() {
    return {
        type: BAND_DATA_REQUEST
    };
}

function receiveBandData(bandData: Band) {
    return {
        type: BAND_DATA_SUCCESS,
        bandData,
        timeOfReceipt: Date.now()
    };
}

function bandDataError() {
    return {
        type: BAND_DATA_ERROR
    };
}

function requestBandList() {
    return {
        type: BAND_LIST_REQUEST
    };
}

function receiveBandList(bandList: Band[]) {
    return {
        type: BAND_LIST_SUCCESS,
        bandList,
        timeOfReceipt: Date.now()
    };
}

function bandListError() {
    return {
        type: BAND_LIST_ERROR,
        timeOfReceipt: Date.now()
    };
}

function getBandList() {
    return (dispatch) => {
        dispatch(requestBandList());

        return getBands()
            .then(
                response => response,
                error => dispatch(bandListError())
            ).then(
                json => {
                    dispatch(receiveBandList(json));
                }
            );
    };
}

function getBandData(bandId: number) {
    return (dispatch) => {
        dispatch(requestBandData());

        return getBandById(bandId)
            .then(
                response => response,
                error => dispatch(bandDataError())
            ).then(
                json => {
                    dispatch(receiveBandData(json));
                }
            );
    };
}

export {
    getBandList,
    getBandData
};