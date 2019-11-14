import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  card: {
    width: "90%",
    margin: "5%",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    elevation: 2,
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "red"
  },
  title: {
    fontSize: 24,
    marginLeft: 50,
    marginBottom: 20,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 10
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 20
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  column_6: {
    height: 40,
    width: "45%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 20
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 10,
    textAlign: "center",
    padding: 5,
    margin: 5,
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});

export default styles;
