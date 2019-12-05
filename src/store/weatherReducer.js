import { LOAD_WEATHER } from './actionTypes';

const initialState = {
    weather: [],
    location: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_WEATHER:
            return {
                weather: action.weatherData,
                location: {...state.location, ...action.locationData }
            };

        default:
            return state;
    }
};
