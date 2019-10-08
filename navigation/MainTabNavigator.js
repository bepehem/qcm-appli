import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ProposeScreen from '../screens/ProposeScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const QuestionStack = createStackNavigator(
  {
    Questionnaires: QuestionScreen,
  },
  config
);

QuestionStack.navigationOptions = {
  tabBarLabel: 'Questionnaires',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  ),
};

QuestionStack.path = '';

const ProposeStack = createStackNavigator(
  {
    Proposer: ProposeScreen,
  },
  config
);

ProposeStack.navigationOptions = {
  tabBarLabel: 'Proposer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} />
  ),
};

ProposeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  QuestionStack,
  ProposeStack,
});

tabNavigator.path = '';

export default tabNavigator;
