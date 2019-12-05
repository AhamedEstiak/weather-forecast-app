import {combineReducers} from 'redux';
import weatherReducer from './weatherReducer';
import geolocationReducer from './geolocationReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    geolocation: geolocationReducer,
    ui: uiReducer,
});

export default rootReducer;
