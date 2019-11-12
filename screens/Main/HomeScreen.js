<<<<<<< HEAD
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Button,
	SafeAreaView
} from 'react-native';
import HomeCharts from '../../components/Charts/HomeCharts';
import { MonoText } from '../../components/StyledText';
import appLogo from '../../assets/images/appLogo.png';
import { Avatar } from 'react-native-elements';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'reaact-navigation';

// createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
import { FontAwesome5 } from '@expo/vector-icons';
// import SafeAreaView from 'react-native-safe-area-view';
// import { DrawerItems } from 'react-navigation-drawer';



export default function HomeScreen() {
	return (
		<View>
			{/* <SafeAreaView style={{ flex: 1 }}>
				<TouchableOpacity style={{ margin: 15 }} onPress={() => this.props.navigation.openDrawer()}>
					<FontAwesome5 name="bars" size={24} backgroundColor="red" />
				</TouchableOpacity>
			</SafeAreaView>
		 */}
			<HomeCharts />
		</View>
	);
}

HomeScreen.navigationOptions = {
	headerLeft: <View />,

	headerTitle: (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
			<Image
				source={require('../../assets/images/appLogo.png')}
				style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
			/>
		</View>
	),
	headerRight: (
		<Avatar
			size="small"
			rounded
			icon={{ name: 'user', type: 'font-awesome' }}
			onPress={() => console.log('Works!')}
			activeOpacity={0.7}
			containerStyle={{ flex: 1, marginTop: 10, marginRight: 10 }}
		/>
	)
};



const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#fff'
	}
});





// const DrawerNavigator = createDrawerNavigator({
// 	HomeScreen,
// 	ReportsScreen,
// 	StockScreen,
// 	UsersScreen,
// 	SettingsScreen
// });

// HomeScreen.createAppContainer(DrawerNavigator);
=======
import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import HomeCharts from "../../components/Charts/HomeCharts";
import { MonoText } from "../../components/StyledText";

export default function HomeScreen() {
  return (
    <View>
      <HomeCharts />
    </View>
  );
}

HomeScreen.navigationOptions = {
  // title: 'null',
  Header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff"
  }
});
>>>>>>> 212f135824bc8af5916b23bd85655c4a5f97274a
