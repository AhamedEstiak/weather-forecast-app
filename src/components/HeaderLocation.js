import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';

const HeaderLocation = props => {
    const { location } = props;

    console.log('from header screen',location);

    const area = location.EnglishName && location.EnglishName + ', ';
    const state = location.AdministrativeArea && location.AdministrativeArea.EnglishName + ', ';
    const country = location.Country && location.Country.EnglishName;

    return (
        <View {...props} style={[styles.header, props.style]}>
            <Icon name='location' size={30} color={Colors.accent}/>
            <Text>{area}{state}{country}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: Colors.offWhite,
    },
    locationName: {
        fontSize: 15,
    }
});

export default HeaderLocation;
