import { combineReducers } from 'redux';
import {
    BAND_DATA_REQUEST,
    BAND_DATA_SUCCESS,
    BAND_DATA_ERROR,
    BAND_LIST_REQUEST,
    BAND_LIST_SUCCESS,
    BAND_LIST_ERROR,
} from './action_types';

import { Band } from '../../types/band';

interface BandListAction { type: string; bandList: Band[]; timeOfReceipt: Date; }
interface BandDataAction { type: string; bandData: Band; timeOfReceipt: Date; }

interface BandDataState {
    bandData: Band;
    isFetching: boolean;
    isValid: boolean;
    lastUpdated: Date;
}

const initialBandData: BandDataState = {
    bandData: null,
    isFetching: false,
    isValid: false,
    lastUpdated: null
};

interface BandListState {
    bandList: Band[];
    isFetching: boolean;
    isValid: boolean;
    lastUpdated: Date;
}

const initialBandList: BandListState = {
    bandList: [],
    isFetching: false,
    isValid: false,
    lastUpdated: null
};

function bandList(
    state: BandListState = initialBandList,
    action: BandListAction
) {
    switch (action.type) {
        case BAND_LIST_REQUEST:
            return Object.assign({}, state, {
                bandList: [],
                isFetching: true,
                isValid: false
            });
        case BAND_LIST_SUCCESS:
            return Object.assign({}, state, {
                bandList: action.bandList,
                isFetching: false,
                isValid: true,
                lastUpdated: action.timeOfReceipt
            });
        case BAND_LIST_ERROR:
            return Object.assign({}, state, {
                bandList: [],
                isFetching: false,
                isValid: false,
                lastUpdated: action.timeOfReceipt
            });
        default:
            return state;
    }
}

function bandData(
    state: BandDataState = initialBandData,
    action: BandDataAction
) {
    switch (action.type) {
        case BAND_DATA_REQUEST:
            return Object.assign({}, state, {
                bandData: action.bandData,
                isFetching: true,
                isValid: false
            });
        case BAND_DATA_SUCCESS:
            return Object.assign({}, state, {
                bandData: action.bandData,
                isFetching: false,
                isValid: true,
                lastUpdated: action.timeOfReceipt
            });
        case BAND_DATA_ERROR:
            return Object.assign({}, state, {
                bandData: action.bandData,
                isFetching: true,
                isValid: false,
                lastUpdated: action.timeOfReceipt
            });
        default:
            return state;
    }
}

const bands = combineReducers({
    bandList,
    bandData
});

export default bands;