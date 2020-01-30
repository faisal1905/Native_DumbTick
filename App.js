import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Screens/Home';
import Detail  from './Screens/Detail';
import Profile from './Screens/Profile';
import MyTicket from './Screens/MyTicket';
import Cart from './Screens/Cart';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown : false
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerShown: false
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false
    }
  },
  MyTicket: {
    screen: MyTicket,
    navigationOptions: {
      headerShown: false
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      headerShown: false
    }
  },

}, {
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);
