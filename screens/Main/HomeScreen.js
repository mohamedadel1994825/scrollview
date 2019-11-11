import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Platform, StyleSheet, ScrollView, Text, TouchableOpacity, View, Button } from 'react-native';
import HomeCharts from '../../components/Charts/HomeCharts';
import { MonoText } from '../../components/StyledText';
import appLogo from '../../assets/images/appLogo.png';
import { Avatar } from 'react-native-elements';

// export default function LogoTitle(){
//   return(
//     <Image source={require('../../assets/images/appLogo.png')} style={{ width: 30, height: 30 }} />
//   );

// }

export default function HomeScreen() {
	return (
		<View>
			<HomeCharts />
		</View>
	);
}

HomeScreen.navigationOptions = {
	// title: 'null',
	// Header: null

	// headerTitle: <LogoTitle />

	headerRight: (
		<Avatar
			size="small"
			rounded
			icon={{ name: 'user', type: 'font-awesome' }}
			onPress={() => console.log('Works!')}
			activeOpacity={0.7}
			containerStyle={{ flex: 2, marginTop: 20, marginRight: 10 }}
		/>
	)

	// headerCenter: (
	// 	<Image
	// 		source={require('../../assets/images/appLogo.png')}
	// 		style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}
	// 	/>
	// )
};

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#fff'
	}
});
