import { StyleSheet } from "react-native";
const AdminHomeStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F5F9FF",
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
    backgroundColor: "#F9A5AE",
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
  storeDetails: {
    padding: 20,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  leftDetails: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    flex: 1,
    width: 140,
    height: 135,
    borderRadius: 75,
    marginLeft: 25,
  },
  rightDetails: {
    marginTop: 20,
    justifyContent: "flex-start",
    alignContent: "center",
    flex: 1.4,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  phoneDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  phoneIcon: {
    width: 30,
    height: 30,
  },

  storeIcon: {
    width: 144,
    height: 144,
    borderRadius: 70,
  },
  phoneNumber: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    fontFamily: "Poppins-Bold",
  },
  storeName: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  ownerName: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 32,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },

  myProducts: {
    flexDirection: "row",
    textAlign: "center",
    marginLeft: 10,
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "white",
  },
  editText: {
    textAlign: "right",
    marginRight: 20,
    fontSize: 16,
    marginBottom: 10,
    marginTop: -10,
    textDecorationLine: "underline",
    fontFamily: "Poppins-Regular",
  },
  updateText: {
    position: "absolute",
    bottom: -15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#ffffff",
    padding: 5,
    alignSelf: "center",
    borderRadius: 15,
  },
  myProductsSlider: {
    paddingTop: 10,
    backgroundColor: "#F9A5AE",
  },
  addBtnContainer: {
    alignItems: "center",
    margin: 10,
    marginBottom: 30,
  },
  addProdBtn: {
    paddingTop: 10,
    paddingBottom: 5,
    width: 120,
    backgroundColor: "#D9435C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  addProduct: {
    color: "white",
    fontFamily: "Poppins-Bold",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
  },
  orders: {
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: 20,
  },
  ordersHeading: {
    color: "black",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
  },
  ordersBtn: {
    paddingTop: 10,
    paddingBottom: 5,
    width: 120,
    backgroundColor: "#D9435C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  ordersText: {
    color: "white",
    fontFamily: "Poppins-Bold",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
  },
  messages: {
    marginBottom: 150,
  },
  customersHeading: {
    color: "black",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  messageIcon: {
    width: 30,
    height: 30,
  },
  msgPressable: {
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  messagesText: {
    flexDirection: "row",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    maxHeight: 550,
    width: "80%",
    alignSelf: "center",
    marginTop: "30%",
    elevation: 40,
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 40,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  messageContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  messageName: {
    fontWeight: "bold",
  },
  messageTime: {
    color: "#666",
  },
  messageText: {
    marginBottom: 5,
  },
  deleteButton: {
    color: "red",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export { styles, AdminHomeStyle };
