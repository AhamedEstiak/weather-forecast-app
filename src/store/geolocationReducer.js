import {CURRENT_POSITION} from './actionTypes';

const initialState = {
    currentPosition: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_POSITION:
            return {
                currentPosition: action.currentPosition
            };
        default:
            return state;
    }
};
