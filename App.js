import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from "./screens/bookTransactionsScreen"
import SearchScreen from "./screens/searchScreen"
import { createBottomTabNavigator } from "react-navigation-tabs";
import {createAppContainer}from "react-navigation"

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
  
}

const TabNavigator= createBottomTabNavigator({
  Trasaction : {screen:TransactionScreen},
  Search: {screen:SearchScreen}
})

const AppContainer=createAppContainer(TabNavigator)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
