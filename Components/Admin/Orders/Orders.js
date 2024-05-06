// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   Image,
//   ScrollView,
//   TextInput,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Order from "./Order";

// import { orderStyles } from "../../Styles/OrderStyle";
// import cloudLogo from "../../assets/Cloud_black_text-01.png";
// import backButton from "../../assets/back.png";

// export default function AddProduct() {
//   const navigation = useNavigation();
//   const [numberOfFeatures, setNumberOfFeatures] = useState(0);

//   const backBtnPress = () => {
//     navigation.navigate("AdminHome");
//   };

//   const renderFeatureInputs = () => {
//     let featureInputs = [];
//     for (let i = 0; i < numberOfFeatures; i++) {
//       featureInputs.push(
//         <TextInput
//           key={i}
//           style={{
//             borderRadius: 10,
//             marginBottom: 10,
//             backgroundColor: "white",
//           }}
//           placeholder={`Feature ${i + 1}`}
//         />
//       );
//     }
//     return featureInputs;
//   };

//   return (
//     <View style={orderStyles.container}>
//       <View style={orderStyles.mainSection}>
//         {/* Header with back button and cloud */}
//         <View style={orderStyles.header}>
//           <View style={orderStyles.backBackground}>
//             <Pressable onPress={backBtnPress}>
//               <Image source={backButton} style={orderStyles.backbutton} />
//             </Pressable>
//           </View>
//           <Image source={cloudLogo} style={orderStyles.cloudlogo} />
//         </View>

//         <View
//           style={{
//             paddingHorizontal: 20,
//             width: "100%",
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 24,
//               fontWeight: "bold",
//               marginBottom: 20,
//               textAlign: "center",
//             }}
//           >
//             ORDERS
//           </Text>
//           <ScrollView>
//             <Order />
//             <Order />
//             <Order />
//             <Order />
//           </ScrollView>
//         </View>
//         <View style={{ paddingBottom: 20, paddingTop: 20 }}>
//           <Text
//             style={{
//               textAlign: "center",
//               fontFamily: "Poppins-Bold",
//               fontSize: 16,
//             }}
//           >
//             Total Orders: 10
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// }
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Order from "./Order";

import { orderStyles } from "../../AdminStyles/OrderStyle";
import cloudLogo from "../../AdminAssets/Cloud_black_text-01.png";
import backButton from "../../AdminAssets/back.png";

export default function AddProduct() {
  const navigation = useNavigation();
  const [numberOfFeatures, setNumberOfFeatures] = useState(0);

  const backBtnPress = () => {
    navigation.navigate("AdminHome");
  };

  const renderFeatureInputs = () => {
    let featureInputs = [];
    for (let i = 0; i < numberOfFeatures; i++) {
      featureInputs.push(
        <TextInput
          key={i}
          style={{
            borderRadius: 10,
            marginBottom: 10,
            backgroundColor: "white",
          }}
          placeholder={`Feature ${i + 1}`}
        />
      );
    }
    return featureInputs;
  };

  return (
    <View style={orderStyles.container}>
      <View style={orderStyles.mainSection}>
        {/* Header with back button and cloud */}
        <View style={orderStyles.header}>
          <View style={orderStyles.backBackground}>
            <Pressable onPress={backBtnPress}>
              <Image source={backButton} style={orderStyles.backbutton} />
            </Pressable>
          </View>
          <Image source={cloudLogo} style={orderStyles.cloudlogo} />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            ORDERS
          </Text>
          <ScrollView style={{ height: 520 }}>
            <ScrollView>
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
            </ScrollView>
          </ScrollView>
        </View>
        <View style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-Bold",
              fontSize: 16,
            }}
          >
            Total Orders: 10
          </Text>
        </View>
      </View>
    </View>
  );
}
