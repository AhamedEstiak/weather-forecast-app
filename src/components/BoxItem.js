import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

const BoxItem = props => {
    const { title, value, unit, icon, textColor, isDay } = props;

    return (
        <View {...props} style={[styles.boxSingle, props.style]}>
            {icon}
            <Text style={{fontSize: 13, marginTop: 10, color: textColor }}>{title}</Text>
            <Text style={{fontSize: 14, color: isDay ? Colors.purple : Colors.accent}}>{value}{unit}</Text>
        </View>
    );
};

BoxItem.propTypes = {
    title: PropTypes.string.isRequired,
    // icon: PropTypes.number,
    textColor: PropTypes.string,
    isDay: PropTypes.bool,
    // unit: PropTypes.string,
    // value: PropTypes.number,
};

const styles = StyleSheet.create({
    boxSingle: {
        borderWidth: 1,
        borderColor: Colors.offWhite,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginRight: 15,
        // width: '30%'
    },
});

export default BoxItem;
