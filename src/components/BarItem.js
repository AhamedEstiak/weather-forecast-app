import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const BarItem = props => {
    const {temperature} = props;

    return (
        <View {...props} style={[styles.tempBarContainer, props.style]}>
            <View style={[styles.tempBarInner, {height: `${temperature}%`}]}>
                <Text style={{fontSize: 20, color: 'white'}}>{temperature}&deg;</Text>
            </View>
        </View>
    );
};

BarItem.propTypes = {
    temperature: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    tempBarContainer: {
        backgroundColor: Colors.offWhite,
        height: 200,
        width: 40,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        flexDirection: 'row',
    },
    tempBarInner: {
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: '100%',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
    },
});

export default BarItem;
