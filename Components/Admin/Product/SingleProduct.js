import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { SingleProductStyle } from "../../AdminStyles/SingleProductStyle";
import cloudLogo from "../../AdminAssets/Cloud_black_text-01.png";
import backButton from "../../AdminAssets/back.png";
import upload_area from "../../AdminAssets/upload_area.png";

export default function SingleProduct() {
  const navigation = useNavigation();

  const backBtnPress = () => {
    navigation.navigate("AdminHome");
  };
  return (
    <View style={SingleProductStyle.container}>
      <View style={SingleProductStyle.productDisplay}>
        {/* HEADER */}
        <View style={SingleProductStyle.header}>
          <View style={SingleProductStyle.backBackground}>
            <Pressable onPress={backBtnPress}>
              <Image
                source={backButton}
                style={SingleProductStyle.backbutton}
              />
            </Pressable>
          </View>
          <Image source={cloudLogo} style={SingleProductStyle.cloudlogo} />
        </View>
        {/* PRODUCT VIEW */}
        <View style={{ padding: 30, gap: 10 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {/* PRODUCT IMAGE */}
            <Image source={upload_area} style={SingleProductStyle.productImg} />
            {/* IMG RIGHT VIEW */}
            <View style={{ gap: 5, marginTop: 10 }}>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                PRODUCT NAME
              </Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    fontSize: 16,
                  }}
                >
                  Rs 2000/-
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: 14,
                    textDecorationLine: "line-through",
                  }}
                >
                  Rs 3000/-
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "white",
                  padding: 6,
                  margin: 10,
                  borderRadius: 20,
                  width: 120,
                  elevation: 20,
                  shadowColor: "black",
                  shadowOpacity: 0.9,
                  shadowRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: 14,
                    textDecorationLine: "underline",
                    textAlign: "center",
                  }}
                >
                  More Info...
                </Text>
              </Pressable>
            </View>
          </View>
          {/* DETAILS VIEW */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationLine: "underline",
                fontFamily: "Poppins-Bold",
                marginRight: 10,
              }}
            >
              Category
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
              }}
            >
              Wall Clock
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationLine: "underline",
                fontFamily: "Poppins-Bold",
                marginRight: 10,
              }}
            >
              Store Name
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
              }}
            >
              XYZ
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationLine: "underline",
                fontFamily: "Poppins-Bold",
                marginRight: 10,
              }}
            >
              Brand
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
              }}
            >
              ABC
            </Text>
          </View>
          <View>
            <Text
              style={{
                textDecorationLine: "underline",
                fontFamily: "Poppins-Bold",
                marginRight: 20,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
              }}
            >
              This is one of our best selling wall clocks around the globe and
              its modern 3D unique designs.
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Pressable style={SingleProductStyle.RemoveProdBtn}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Poppins-Bold",
                }}
              >
                Remove Product
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
