import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const TimeInfo = props => {
    const { textColor, time, timeFormat, month, day } = props;

    const textStyle = {fontSize: 15, color: textColor};

    return (
        <View {...props} style={[styles.tempTimeContainer, props.style]}>
            <View style={{borderBottomWidth: 1, borderBottomColor: Colors.offWhite, paddingBottom: 15}}>
                <Text style={textStyle}>{time}</Text>
                <Text style={textStyle}>{timeFormat}</Text>
            </View>
            <View style={{paddingTop: 15}}>
                <Text style={[textStyle, styles.textUppercase]}>{month}</Text>
                <Text style={textStyle}>{day}</Text>
            </View>
        </View>
    );
};

TimeInfo.propTypes = {
    textColor: PropTypes.string,
    // time: PropTypes.string,
};

const styles = StyleSheet.create({
    tempTimeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textUppercase: {
        textTransform: 'uppercase',
    }
});

export default TimeInfo;
