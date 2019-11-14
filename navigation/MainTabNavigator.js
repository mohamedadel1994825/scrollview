import React from 'react';
import { Platform, View, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createDrawerNavigator,
	createSwitchNavigator
} from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Main/HomeScreen';
import ReportsScreen from '../screens/Main/ReportsScreen';
import StockScreen from '../screens/Main/StockScreen';
import UsersScreen from '../screens/Main/UsersScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import DonorScreen from '../screens/Donation/DonorScreen';
const config = Platform.select({
	web: { headerMode: 'screen' },
	default: { headerMode: 'none' }
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

HomeStack.path = '';

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

SettingsStack.path = '';

// #### BOTTOM NAVIGATION #####
const bottomTabs = createBottomTabNavigator({
	HomeStack,
	ReportsStack,
	StockStack,
	UsersStack,
	SettingsStack
});

const drawerTabs = createStackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerMode: 'none'
		}
	}
});

// #### Navigation to wrap both bottom and side drawer #####
const drawerNavigator = createDrawerNavigator({
	Home: bottomTabs,
	Donors: {
		screen: DonorScreen
	}
});

drawerNavigator.navigationOptions = ({ navigation }) => ({
	headerLeft: (
		<View>
			<TouchableOpacity
				style={{ margin: 15 }}
				onPress={() => {
					navigation.openDrawer();
				}}
			>
				<FontAwesome5 name="bars" size={24} backgroundColor="red" />
			</TouchableOpacity>
		</View>
	),
	headerTitle: (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
			<Image
				source={require('../assets/images/appLogo.png')}
				style={{
					width: 50,
					height: 50,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			/>
		</View>
	),
	headerRight: (
		<View>
			<Avatar
				size="small"
				rounded
				icon={{ name: 'user', type: 'font-awesome' }}
				onPress={() => console.log('Works!')}
				activeOpacity={0.7}
				containerStyle={{ flex: 1, marginTop: 10, marginRight: 10 }}
			/>
		</View>
	)
});

const App = createStackNavigator({
	App: drawerNavigator
});

//drawerNavigator.path = "";

export default App;
