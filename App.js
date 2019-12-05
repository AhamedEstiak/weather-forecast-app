import React, { useEffect } from 'react';
import {screensEnabled} from 'react-native-screens';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import store from './src/store/createStore';
import AppNavigator from './src/navigation/AppNavigator';

screensEnabled();

const App = () => {
    let init = async () => {
        // …do multiple async tasks
    };

    useEffect(() => {
        // RNBootSplash.hide();
        init().finally(() => {
            // without fadeout: RNBootSplash.hide()
            RNBootSplash.hide();
        });
    }, []);

    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
};

export default App;
