import {IS_DAY, UI_START_LOADING, UI_STOP_LOADING} from './actionTypes';

const initialState = {
    isLoading: false,
    isDay: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UI_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case UI_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };

        case IS_DAY:
            return {
                ...state,
                isDay: action.isDay
            };
        default:
            return state;
    }
};
