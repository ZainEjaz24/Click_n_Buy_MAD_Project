import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import productSliderStyle from "../../AdminStyles/ProductSliderStyle";
import { useNavigation } from "@react-navigation/native";

export default function ProductImg(props) {
  const navigation = useNavigation();

  const catergoryNavigate = () => {
    navigation.navigate("SingleProduct");
  };

  return (
    <Pressable
      onPress={catergoryNavigate}
      style={productSliderStyle.categoryPressable}
    >
      <Image source={props.image} style={productSliderStyle.categoryimg} />
      <Text style={{ fontFamily: "Poppins-Regular", fontSize: 12 }}>
        {props.name}
      </Text>
    </Pressable>
  );
}
