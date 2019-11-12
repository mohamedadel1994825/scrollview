import * as WebBrowser from "expo-web-browser";
import React from "react";
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
} from "react-native";
import HomeCharts from "../../components/Charts/HomeCharts";
import { MonoText } from "../../components/StyledText";
import appLogo from "../../assets/images/appLogo.png";
import { Avatar } from "react-native-elements";
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'reaact-navigation';

// createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
import { FontAwesome5 } from "@expo/vector-icons";
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
  headerMode: "none"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff"
  }
});
