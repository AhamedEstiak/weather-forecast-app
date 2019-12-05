import { UI_START_LOADING, UI_STOP_LOADING, IS_DAY } from './actionTypes';

/*
* these two method using globally to handle loading when calling any api or others
* */
export const uiStartLoading = () => {
    return {
        type: UI_START_LOADING
    };
};

export const uiStopLoading = () => {
    return {
        type: UI_STOP_LOADING
    };
};

/*
* store is day or night from weather data for change theme all over the app
 */
export const setIsDay = (data) => {
    console.log('actionsss', data);
    return dispatch => {
        dispatch({
            type: IS_DAY,
            isDay: data
        });
    };
};
