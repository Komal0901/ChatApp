import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/Components/Home';
import MainStack from './src/Navigators/StackNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
