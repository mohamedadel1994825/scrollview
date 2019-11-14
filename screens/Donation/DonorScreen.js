import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

// import card from '../../components/card' ;

export default function DonorScreen() {
	// state = {
	//   firstQuery: '',
	// };

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Donors</Text>
			{/* search form */}
			<View style={styles.containerStyle}>
				<Text style={styles.subTitle}>Search For Donor</Text>
				<View>
					<TextInput
						style={{
							height: 40,
							width: '100%',
							borderColor: 'gray',
							borderWidth: 1,
							borderRadius: 6,
							marginBottom: 20
						}}
						placeholder=" Civil ID"
						underlineColorAndroid="transparent"
					/>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<TextInput
						style={{
							height: 40,
							width: '45%',
							borderColor: 'gray',
							borderWidth: 1,
							borderRadius: 6,
							marginBottom: 20
						}}
						placeholder=" First Name"
						underlineColorAndroid="transparent"
					/>
					<TextInput
						style={{
							height: 40,
							width: '45%',
							borderColor: 'gray',
							borderWidth: 1,
							borderRadius: 6,
							marginBottom: 20
						}}
						placeholder=" Last Name"
						underlineColorAndroid="transparent"
					/>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<TextInput
						style={{
							height: 40,
							width: '45%',
							borderColor: 'gray',
							borderWidth: 1,
							borderRadius: 6,
							marginBottom: 20
						}}
						placeholder=" Third Name"
						underlineColorAndroid="transparent"
					/>
					<TextInput
						style={{
							height: 40,
							width: '45%',
							borderColor: 'gray',
							borderWidth: 1,
							borderRadius: 6,
							marginBottom: 20
						}}
						placeholder=" Fourth Name"
						underlineColorAndroid="transparent"
					/>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
					<LinearGradient
						colors={[ '#333333', '#dd1818' ]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={[ styles.linearGradient, {} ]}
					>
						<Text style={styles.buttonText}>Advanced Search </Text>
					</LinearGradient>
					<LinearGradient
						colors={[ '#333333', '#dd1818' ]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={[ styles.linearGradient, { marginLeft: 20 } ]}
					>
						<Text style={styles.buttonText}> Search </Text>
					</LinearGradient>
				</View>
			</View>

			{/* searchResult */}
			<View style={[ styles.containerStyle, { marginTop: 20 } ]}>
				<Text style={styles.subTitle}>Result Found:10</Text>
			</View>
		</ScrollView>
	);
}

DonorScreen.navigationOptions = {
	title: 'Donors'
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff'
	},
	containerStyle: {
		width: 400,
		maxWidth: '80%',
		borderRadius: 10,
		padding: 20,
		marginLeft: '10%',
		backgroundColor: 'white',
		elevation: 2,
		shadowOpacity: 0.26,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
		shadowColor: 'red'
	},
	title: {
		fontSize: 24,
		marginLeft: 50,
		marginBottom: 20,
		fontWeight: 'bold'
	},
	subTitle: {
		fontSize: 15,
		marginLeft: 5,
		fontWeight: 'bold',
		color: 'gray',
		marginBottom: 10
	},
	// searchbar:{
	//   width:100
	// },
	linearGradient: {
		flex: 1,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5
	},
	buttonText: {
		fontSize: 10,
		textAlign: 'center',
		margin: 5,
		color: '#ffffff',
		backgroundColor: 'transparent'
	}
});
