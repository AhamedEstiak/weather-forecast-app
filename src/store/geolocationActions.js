import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {CURRENT_POSITION} from './actionTypes';
import {loadWeather} from './actions';

// get user current latitude and longitude
export const getCurrentPosition = () => {
    return async dispatch => {
        try {
            Geolocation.getCurrentPosition(async position => {
                // console.log('******* geo location', position);
                if (position.coords) {
                    const currentPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    dispatch(getCurrentPositionSuccess(currentPosition));
                    dispatch(loadWeather(currentPosition));
                    return currentPosition;
                }
            }, error => {
                console.log('error::', error);
                if (error.message === 'User denied access to location services.') {
                    Alert.alert('You already denied Location Access. To See direction Allow Location Access!');
                } else {
                    Alert.alert('Something went wrong. Please try again');
                }
            },
            {enableHighAccuracy: false},
            );
        } catch (e) {
            console.log('error', e);
            Alert.alert('Something went wrong. Please try again');
        }
    };
};

// save user current lat long in redux store
export const getCurrentPositionSuccess = (currentPosition) => {
    return async dispatch => {
        dispatch({
            type: CURRENT_POSITION,
            currentPosition,
        });
    };
};
