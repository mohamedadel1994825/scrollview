import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Main/HomeScreen';
import ReportsScreen from '../screens/Main/ReportsScreen';
import StockScreen from '../screens/Main/StockScreen';
import UsersScreen from '../screens/Main/UsersScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

// #### HOME STACK ####
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />,
	tabBarOptions: {
		activeTintColor: Colors.tabLabelSelected,
		inactiveTintColor: Colors.tabIconDefault
	}
};

HomeStack.path = "";

// #### REPORTS STACK ####
const ReportsStack = createStackNavigator(
	{
		Reports: ReportsScreen
	},
	config
);

ReportsStack.navigationOptions = {
	tabBarLabel: 'Reports',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'} />
	),
	tabBarOptions: {
		activeTintColor: Colors.tabLabelSelected,
		inactiveTintColor: Colors.tabIconDefault
	}
};

ReportsStack.path = '';

// #### STOCK STACK ####
const StockStack = createStackNavigator(
	{
		Stock: StockScreen
	},
	config
);

StockStack.navigationOptions = {
	tabBarLabel: 'Stock',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-filing' : 'md-filing'} />
	),
	tabBarOptions: {
		activeTintColor: Colors.tabLabelSelected,
		inactiveTintColor: Colors.tabIconDefault
	}
};

StockStack.path = '';

// #### USERS STACK ####
const UsersStack = createStackNavigator(
	{
		Users: UsersScreen
	},
	config
);

UsersStack.navigationOptions = {
	tabBarLabel: 'Users',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
	),
	tabBarOptions: {
		activeTintColor: Colors.tabLabelSelected,
		inactiveTintColor: Colors.tabIconDefault
	}
};

UsersStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
	),
	tabBarOptions: {
		activeTintColor: Colors.tabLabelSelected,
		inactiveTintColor: Colors.tabIconDefault
	}
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	ReportsStack,
	StockStack,
	UsersStack,
	SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
