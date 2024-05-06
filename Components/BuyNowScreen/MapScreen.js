import { View, Text } from "react-native";
import React, { useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Header } from "../Header/Header";
import Button from "../../UI/Button";

export default function MapScreen({ navigation, route }) {
  const { latitude, longitude } = route.params ?? null;
  const mapRef = useRef(MapView);

  const initialRegion = {
    latitude: 33.783,
    longitude: 72.71,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const focusHandler = () => {
    console.log(mapRef.current);
    mapRef.current.animateToRegion(initialRegion);
  };

  return (
    <View>
      <Header />
      <MapView
        style={{ width: "100%", height: "80%" }}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton
        showsUserLocation
        ref={mapRef}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 10,
        }}
      >
        <Button onPress={focusHandler}>Focus</Button>
        <Button>Done</Button>
        <Button>Go Back</Button>
      </View>
    </View>
  );
}
