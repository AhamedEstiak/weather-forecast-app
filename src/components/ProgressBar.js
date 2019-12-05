import React from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    Platform
} from 'react-native';
import Colors from "../constants/Colors";

const ProgressBar = props => (
    <View {...props} style={[styles.container, props.style]}>
        <View style={styles.progressBar}>
            {props.children}
            <ActivityIndicator size="large" color={Platform.OS === "ios" ? "white" : Colors.primary} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F8FB',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBar: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default ProgressBar;
