import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../styles/styles";

export default function DonorScreen() {
  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.title}>Donors</Text>
      {/* search form */}
      <View style={styles.card}>
        <Text style={styles.subTitle}>Search For Donor</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder=" Civil ID"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.gridContainer}>
          <TextInput
            style={styles.column_6}
            placeholder=" First Name"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.column_6}
            placeholder=" Last Name"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TextInput
            style={styles.column_6}
            placeholder=" Third Name"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.column_6}
            placeholder=" Fourth Name"
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <LinearGradient
            colors={["#333333", "#dd1818"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.linearGradient, {}]}
          >
            <Text style={styles.buttonText}>Advanced Search </Text>
          </LinearGradient>
          <LinearGradient
            colors={["#333333", "#dd1818"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.linearGradient, { marginLeft: 20 }]}
          >
            <Text style={styles.buttonText}> Search </Text>
          </LinearGradient>
        </View>
      </View>

      {/* searchResult */}
      <View style={[styles.containerStyle, { marginTop: 20 }]}>
        <Text style={styles.subTitle}>Result Found:10</Text>
      </View>
    </ScrollView>
  );
}

DonorScreen.navigationOptions = {
  title: "Donors"
};
