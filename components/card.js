import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ReportsScreen() {
	return (
	
			<View style={styles.containerStyle}>
			
			</View>
	
	);
}

const styles = StyleSheet.create({
	containerStyle: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		borderRadius: 10,
		padding: 20,
		marginLeft: '12%',
		backgroundColor: 'white',
		elevation: 2,
		shadowOpacity: 0.26,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
		shadowColor: 'black'
	}
});
