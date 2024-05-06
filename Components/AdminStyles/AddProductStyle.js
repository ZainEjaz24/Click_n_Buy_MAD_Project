import { StyleSheet } from "react-native";

const addProductPageStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F5F9FF",
    minHeight: 1000,
  },
  mainSection: {
    backgroundColor: "#F9A5AE",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 15,
    paddingBottom: 20,
  },
  cloudlogo: {
    width: 200,
    height: 110,
  },
  backbutton: {
    width: 20,
    height: 20,
    marginTop: -12,
  },
  backBackground: {
    backgroundColor: "#D9435C",
    borderRadius: 50,
    padding: 20,
    width: 40,
    height: 40,
    margin: 30,
    elevation: 10, // For Android elevation
    shadowColor: "black", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addProdButn: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 150,
    backgroundColor: "#D9435C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
    shadowColor: "white",
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  upload_img: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
});

export { addProductPageStyle };
