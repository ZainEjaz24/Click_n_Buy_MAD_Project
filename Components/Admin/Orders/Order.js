import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { orderStyles } from "../../AdminStyles/OrderStyle";
import Makeup from "../../AdminAssets/Makeup.jpg";

const Order = () => {
  const [selectedStatus, setSelectedStatus] = useState("Processing");

  return (
    <View
      style={{ marginBottom: 20, flexDirection: "row", alignItems: "center" }}
    >
      <Image source={Makeup} style={orderStyles.upload_img} />
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontFamily: "Poppins-Bold" }}>Product Name</Text>
        <Text>
          Ordered By: <Text style={styles.redText}>Zain Ejaz</Text>
        </Text>
        <Text>
          Qty: <Text style={styles.redText}>01</Text>
        </Text>
        <View style={styles.statusContainer}>
          <Text style={{ marginRight: 10, fontFamily: "Poppins-Regular" }}>
            Status:
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedStatus}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedStatus(itemValue)
              }
            >
              <Picker.Item label="Processing" value="Processing" />
              <Picker.Item label="Shipped" value="Shipped" />
              <Picker.Item label="Delivered" value="Delivered" />
            </Picker>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  redText: {
    color: "red",
    fontFamily: "Poppins-Regular",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pickerContainer: {
    width: 170,
    height: 30,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    alignContent: "center",
    justifyContent: "center",
  },
  picker: {
    flex: 1,
    color: "black",
    fontSize: 10,
  },
  pickerItem: {
    fontSize: 12,
  },
});

export default Order;
