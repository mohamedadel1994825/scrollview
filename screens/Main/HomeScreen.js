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
