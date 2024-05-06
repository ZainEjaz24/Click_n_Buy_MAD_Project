import { View, Pressable, ScrollView } from "react-native";
import { React, useRef } from "react";
import ProductItems from "../ShopProduct/ProductItems";
import ProductImg from "../ShopProduct/ProductImg";
import { Feather } from "@expo/vector-icons";
import productSliderStyle from "../../AdminStyles/ProductSliderStyle";

export default function Category() {
  const scrollViewRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, animated: true });
    }
  };

  const handleScrollRight = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
      <Pressable onPress={handleScrollLeft}>
        <Feather name="chevron-left" size={26} color="black" />
      </Pressable>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={productSliderStyle.scrollViewContent}
      >
        {ProductItems.map((item, i) => {
          return <ProductImg image={item.image} name={item.name} key={i} />;
        })}
      </ScrollView>
      <Pressable onPress={handleScrollRight}>
        <Feather name="chevron-right" size={26} color="black" />
      </Pressable>
    </View>
  );
}
