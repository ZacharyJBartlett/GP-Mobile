import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import DummyScreen from '../screens/dummyscreen';
import Shed from '../screens/Shed';
import AboutUs from '../screens/AboutUs';
import Invoice from '../screens/Invoice';
import Main from '../screens/main';

export default TabNavigator(
  {
    MainPage: {
      screen: Main,
    },
    Shed: {
      screen: Shed,
    },
    Invoice: {
      screen: Invoice,
    },
    Client: {
      screen: AboutUs,
    },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {

          case 'MainPage':
            iconName = 'superpowers';
            break;
          case 'Shed':
            iconName = 'building';
            break;
          case 'Client':
            iconName = 'info-circle';
            break;
          case 'Invoice':
            iconName = 'address-book';
            break;  
        }
        return (
          <FontAwesome
            name={iconName}
            size={30}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: false,
    },
  }
);
