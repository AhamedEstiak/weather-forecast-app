import ENV from '../../env';
import {LOAD_WEATHER, CURRENT_LOCATION} from './actionTypes';
import locationData from '../brisbane';
import weatherData from '../weather';
import { uiStartLoading, uiStopLoading} from './actions';
import {locationUrl, weatherUrl} from '../constants/Url';

/*
* get full weather data from api
* */
export const loadWeather = ({lat, lng}) => {
    return async dispatch => {
        dispatch(uiStartLoading());

        console.log(lat);
        console.log(lng);

        try {
            const url = locationUrl(ENV.ApiKey, lat, lng);
            const response = await fetch(url);

            if (!response.ok || !response.status === 200) {
                dispatch(uiStopLoading());
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData);

            if (resData.Key) {
                try {
                    const locationKey = parseInt(resData.Key);
                    const response = await fetch(weatherUrl(locationKey, ENV.ApiKey));

                    if (!response.ok || !response.status === 200) {
                        dispatch(uiStopLoading());
                        throw new Error('Something went wrong!');
                    }

                    const weatherData = await response.json();
                    console.log(weatherData);

                    dispatch(loadWeatherSuccess(weatherData, resData));
                    dispatch(uiStopLoading());
                } catch (err) {
                    dispatch(uiStopLoading());
                    throw err;
                }
            }

            // if (locationData.Key) {
            //     dispatch(loadWeatherSuccess(weatherData, locationData));
            //     dispatch(uiStopLoading());
            // }
        } catch (err) {
            dispatch(uiStopLoading());
            throw err;
        }
    };
};

/*
* store weather data in redux store
* and save user current location in store so that we can use this later any places
 */
const loadWeatherSuccess = (weatherData, locationData) => {
    return dispatch => {
        dispatch({
            type: LOAD_WEATHER,
            weatherData,
            locationData: locationData
        });
    };
};

