import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import {imageUrl} from '../constants/Url';
import BoxItem from './BoxItem';
import {convertDirectionToName} from '../utils/convertDirectionName';
import BarItem from './BarItem';
import TimeInfo from './TimeInfo';

// const { height, width } = Dimensions.get('window');

const CurrentCondition = ({weather}) => {
    const temperature = weather.Temperature && Math.round(weather.Temperature.Metric.Value);
    const realFeelTemperature = weather.RealFeelTemperature && Math.round(weather.RealFeelTemperature.Metric.Value);
    const weatherText = weather.WeatherText && weather.WeatherText;
    const weatherIcon = weather.WeatherIcon && weather.WeatherIcon;
    const month = weather.LocalObservationDateTime && moment(weather.LocalObservationDateTime).format('MMM');
    const weekDay = weather.LocalObservationDateTime && moment(weather.LocalObservationDateTime).format('dddd');
    const day = weather.LocalObservationDateTime && moment(weather.LocalObservationDateTime).format('DD');
    const isoTime = weather.EpochTime && new Date(weather.EpochTime * 1000);
    const time = moment(isoTime).format('hh:mm');
    const timeFormat = moment(isoTime).format('a');
    const humidity = weather.RelativeHumidity && weather.RelativeHumidity;
    const wind = weather.Wind && weather.Wind;
    const pressure = weather.Pressure && weather.Pressure;
    const dewPoint = weather.DewPoint && weather.DewPoint;
    const visibility = weather.Visibility && weather.Visibility;
    const cloudCover = weather.CloudCover && weather.CloudCover;
    const pressureTendency = weather.PressureTendency && weather.PressureTendency.LocalizedText;
    const hasPrecipitation = weather.HasPrecipitation && weather.HasPrecipitation;
    const isDay = weather.IsDayTime && weather.IsDayTime;

    const backgroundColor = isDay ? Colors.blueRgb : Colors.dark;
    const textColor = isDay ? 'black' : 'white';
    const statusTextColor = isDay ? Colors.purple : Colors.primary;
    const iconColor = isDay ? 'black' : Colors.gray;

    const tempItems = [
        {
            title: 'Wind',
            icon: <FeatherIcon name='wind' size={25} color={iconColor} />,
            value: wind.Speed.Metric.Value,
            unit: wind.Speed.Metric.Unit,
        },
        {
            title: 'Humidity',
            icon: <SimpleLineIcon name='drop' size={25} color={iconColor} />,
            value: humidity,
            unit: '%',
        },
        {
            title: 'Pressure',
            icon: <SimpleLineIcon name='speedometer' size={25} color={iconColor} />,
            value: pressure.Metric.Value,
            unit: pressure.Metric.Unit,
        },
        {
            title: 'Dew Point',
            icon: <FontawesomeIcon name='temperature-low' size={23} color={iconColor} />,
            value: Math.round(dewPoint.Metric.Value),
            unit: `°${dewPoint.Metric.Unit}`,
        },
        {
            title: 'Winds From',
            icon: <SimpleLineIcon name='directions' size={25} color={iconColor} />,
            // value: wind.Direction && wind.Direction.English,
            unit: wind.Direction && convertDirectionToName(wind.Direction.English.toString()),
        },
        {
            title: 'Visibility',
            icon: <MaterialCommunityIcon name='weather-fog' size={25} color={iconColor} />,
            value: visibility.Metric.Value,
            unit: visibility.Metric.Unit,
        },
    ];

    let weatherIconNum = weatherIcon < 10 ? ('0' + weatherIcon) : weatherIcon;

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <View style={styles.tempStatusContainer}>
                <View style={styles.tempValueContainer}>
                    <Text style={[styles.statusText, {color: statusTextColor}]}>{weekDay}</Text>
                    <Text style={[styles.statusText, {color: statusTextColor}]}>{weatherText}</Text>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: `${imageUrl(weatherIconNum)}`}}
                    />
                    <Text style={[styles.temperatureText, {color: textColor}]}>{temperature}&deg;c</Text>
                    <Text style={{fontSize: 15, color: textColor}}>RealFeel {realFeelTemperature}&deg;c</Text>
                    <Text style={{fontSize: 15, color: textColor}}>Precipitation : {hasPrecipitation ? 'Yes' : 'No'}</Text>
                </View>

                <BarItem temperature={temperature}/>

                <TimeInfo
                    textColor={textColor}
                    time={time}
                    timeFormat={timeFormat}
                    month={month}
                    day={day}
                />

            </View>
            <View style={styles.boxContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {tempItems.map(item =>
                        <BoxItem
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            value={item.value}
                            unit={item.unit}
                            isDay={isDay}
                            textColor={textColor}
                        />,
                    )}
                </ScrollView>
            </View>

        </View>
    );
};

CurrentCondition.propTypes = {
    weather: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 30,
        height: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    tempStatusContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 20,
    },
    tempValueContainer: {
        justifyContent: 'flex-start',
    },
    temperatureText: {
        fontSize: 60,
        color: 'black',
    },
    boxContainer: {
        flexDirection: 'row',
        marginTop: 80,
        marginRight: -30,
    },
    boxSingle: {
        borderWidth: 1,
        borderColor: Colors.offWhite,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginRight: 15,
    },
    statusText: {
        fontSize: 15,
    },
    imageStyle: {
        width: 60, height: 60, marginTop: 10, marginBottom: 10
    }
});

export default CurrentCondition;
