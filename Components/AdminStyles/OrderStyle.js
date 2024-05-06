import { StyleSheet } from "react-native";

const orderStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F9FF",
    minHeight: 700,
  },
  mainSection: {
    backgroundColor: "#F9A5AE",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
  },
  upload_img: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  redText: {
    color: "red",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    width: 150,
    backgroundColor: "white",
    paddingVertical: 0, // Adjust vertical padding
    fontSize: 12, // Adjust text size
  },
  pickerItem: {
    fontSize: 12, // Adjust text size for picker items
  },
});

export { orderStyles };
