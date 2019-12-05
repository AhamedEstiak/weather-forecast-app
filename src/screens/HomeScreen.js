import React, {useEffect } from 'react';
import {View, Text } from 'react-native';
import {useSelector, useDispatch } from 'react-redux';
import styles from '../styles/style';
import {getCurrentPosition} from '../store/actions';
import ProgressBar from '../components/ProgressBar';
import CurrentCondition from '../components/CurrentCondition';
import HeaderLocation from '../components/HeaderLocation';
import Colors from '../constants/Colors';

const HomeScreen = props => {
    const weatherData = useSelector(state => state.weather.weather);
    const location = useSelector(state => state.weather.location);
    const isLoading = useSelector(state => state.ui.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        // get user current lat, lng
        dispatch(getCurrentPosition());
    }, [dispatch]);

    // console.log(weatherData);

    return (
        isLoading ? <ProgressBar><Text style={{color: Colors.dark, fontSize: 24}}>Loading weather...</Text></ProgressBar> :
            <View style={[styles.container, styles.defaultBackgroundColor]}>
                {location && <HeaderLocation location={location} />}
                {weatherData.length > 0 &&
                    weatherData.map((weather, i) => <CurrentCondition key={i} weather={weather}/>,
                    )
                }
            </View>
    );
};

HomeScreen.navigationOptions = {
    header: null,
};

export default HomeScreen;
