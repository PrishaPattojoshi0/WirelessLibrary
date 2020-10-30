import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import bookTransactionScreen from './screens/bookTransactionScreen';
import SearchScreen from './screens/searchScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const tabNavigator= createBottomTabNavigator({
  transaction: {screen: transactionScreen},
  search: {screen: SearchScreen},
})

const AppContainer= createAppContainer(tabNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
