/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';
import AppWithNavigationState from './src/navigators/AppNavigator';

export default class App extends Component<{}> {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyAnFRpyNY0YKIR3tOMcaScgBIyck96AqqY",
      authDomain: "manager-30455.firebaseapp.com",
      databaseURL: "https://manager-30455.firebaseio.com",
      projectId: "manager-30455",
      storageBucket: "manager-30455.appspot.com",
      messagingSenderId: "569964674046"
    };
    firebase.initializeApp(config);
  }
  render() {

    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        {/* <View> */}
          {/* <LoginForm /> */}
        {/* </View> */}
        {/* <Router /> */}
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    // color: '#333333',
    marginBottom: 5,
  },
});
