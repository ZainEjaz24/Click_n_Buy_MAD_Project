// import { View, Text, Image, Pressable } from "react-native";
// import React from "react";
// import ArrowIcon from "../../UI/ArrowIcon";
// import profileStyle from "./ProfieStyle";
// import CloudLogo from "../../assets/Images/CloudLogo.png";
// import Userdata from "./Userdata";
// import { FontAwesome5 } from "@expo/vector-icons";
// import Button from "../../UI/Button";

// export default function Profile({ navigation }) {
//   const navigateToAdmin = () => {
//     navigation.navigate("AdminHome");
//   };
//   return (
//     <View style={{ gap: 20 }}>
//       <View style={profileStyle.profileHeader}>
//         <Pressable
//           onPress={() => navigation.navigate("Home")}
//           style={profileStyle.icon}
//         >
//           <ArrowIcon />
//         </Pressable>

//         <View style={profileStyle.CloudLogo}>
//           <Image source={CloudLogo} style={{ width: "100%", height: "100%" }} />
//         </View>
//       </View>

//       <Userdata />

//       <View style={profileStyle.oders}>
//         <Text style={{ fontSize: 20, fontFamily: "Mogra", color: "#fff" }}>
//           My Orders
//         </Text>

//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 10,
//             width: "100%",
//           }}
//         >
//           <Pressable style={profileStyle.orderIconView}>
//             <FontAwesome5 name="money-check-alt" size={20} color="black" />
//             <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
//               To Pay
//             </Text>
//           </Pressable>

//           <Pressable style={profileStyle.orderIconView}>
//             <FontAwesome5 name="calendar-check" size={20} color="black" />
//             <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
//               To Ship
//             </Text>
//           </Pressable>

//           <Pressable style={profileStyle.orderIconView}>
//             <FontAwesome5 name="truck" size={20} color="black" />
//             <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
//               To Receive
//             </Text>
//           </Pressable>

//           <Pressable style={profileStyle.orderIconView}>
//             <FontAwesome5 name="comment-dots" size={20} color="black" />
//             <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
//               To Review
//             </Text>
//           </Pressable>
//         </View>
//       </View>

//       <View
//         style={{
//           width: "100%",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 20,
//         }}
//       >
//         <Text style={{ fontSize: 20, fontFamily: "Mogra" }}>My Wallet</Text>

//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-around",
//             width: "100%",
//           }}
//         >
//           <View
//             style={{ alignItems: "center", justifyContent: "center", gap: 10 }}
//           >
//             <Text
//               style={{ fontFamily: "Mogra", color: "#D53624", fontSize: 16 }}
//             >
//               PKR
//             </Text>
//             <Text>0</Text>
//           </View>

//           <View
//             style={{
//               width: 2,
//               height: 50,
//               backgroundColor: "rgba(0,0,0,0.5)",
//               right: -10,
//             }}
//           ></View>

//           <View
//             style={{ alignItems: "center", justifyContent: "center", gap: 10 }}
//           >
//             <Text
//               style={{ fontFamily: "Mogra", color: "#D53624", fontSize: 16 }}
//             >
//               Vouchers
//             </Text>
//             <Text>0</Text>
//           </View>
//         </View>
//       </View>

//       <Pressable
//         onPress={navigateToAdmin}
//         style={{ width: 200, alignSelf: "flex-end", margin: 30 }}
//       >
//         <Button onPress={navigateToAdmin}>Go to Your Store</Button>
//       </Pressable>
//     </View>
//   );
// }
// // import React, { useState } from "react";
// // import { View, Text, Image, Pressable, TextInput, Modal } from "react-native";
// // import profileStyle from "./ProfieStyle";
// // import CloudLogo from "../../assets/Images/CloudLogo.png";
// // import { supabase } from "../../supabase";

// // export default function Profile({ navigation }) {
// //   const [name, setName] = useState("John Doe");
// //   const [location, setLocation] = useState("New York");
// //   const [phoneNumber, setPhoneNumber] = useState("1234567890");
// //   const [isEditing, setIsEditing] = useState(false);

// //   const [editName, setEditName] = useState(name);
// //   const [editLocation, setEditLocation] = useState(location);
// //   const [editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber);

// //   const [editModalVisible, setEditModalVisible] = useState(false);

// //   const handleSave = async () => {
// //     // Update user information in Supabase table
// //     try {
// //       const { data, error } = await supabase
// //         .from("users")
// //         .update({
// //           name: editName,
// //           location: editLocation,
// //           phone_number: editPhoneNumber,
// //         })
// //         .eq("id", user.id);

// //       if (error) {
// //         throw error;
// //       }

// //       // Update state
// //       setName(editName);
// //       setLocation(editLocation);
// //       setPhoneNumber(editPhoneNumber);

// //       setEditModalVisible(false);
// //     } catch (error) {
// //       console.error("Error updating user information:", error.message);
// //     }
// //   };

// //   return (
// //     <View style={{ gap: 20 }}>
// //       {/* Profile header */}
// //       <View style={profileStyle.profileHeader}>
// //         {/* Cloud logo */}
// //         <View style={profileStyle.CloudLogo}>
// //           <Image source={CloudLogo} style={{ width: "100%", height: "100%" }} />
// //         </View>
// //       </View>

// //       {/* User data */}
// //       <View style={profileStyle.userData}>
// //         <Text>Name: {name}</Text>
// //         <Text>Location: {location}</Text>
// //         <Text>Phone Number: {phoneNumber}</Text>
// //       </View>

// //       {/* Edit button */}
// //       <Pressable
// //         onPress={() => setEditModalVisible(true)}
// //         style={profileStyle.editButton}
// //       >
// //         <Text>Edit Info</Text>
// //       </Pressable>

// //       {/* Edit modal */}
// //       <Modal
// //         visible={editModalVisible}
// //         animationType="slide"
// //         transparent={true}
// //         onRequestClose={() => setEditModalVisible(false)}
// //       >
// //         <View style={profileStyle.modalContainer}>
// //           <View style={profileStyle.modalContent}>
// //             <Text>Edit Information</Text>
// //             <TextInput
// //               value={editName}
// //               onChangeText={setEditName}
// //               placeholder="Name"
// //             />
// //             <TextInput
// //               value={editLocation}
// //               onChangeText={setEditLocation}
// //               placeholder="Location"
// //             />
// //             <TextInput
// //               value={editPhoneNumber}
// //               onChangeText={setEditPhoneNumber}
// //               placeholder="Phone Number"
// //               keyboardType="phone-pad"
// //             />
// //             <Pressable onPress={handleSave}>
// //               <Text>Save</Text>
// //             </Pressable>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // }

import { View, Text, Image, Pressable, TextInput, Modal } from "react-native";
import React, { useState } from "react";
import ArrowIcon from "../../UI/ArrowIcon";
import profileStyle from "./ProfieStyle";
import CloudLogo from "../../assets/Images/CloudLogo.png";
import Userdata from "./Userdata";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../UI/Button";
import { supabase } from "../../supabase";

export default function Profile({ navigation }) {
  const [name, setName] = useState("John Doe");
  const [location, setLocation] = useState("New York");
  const [phoneNumber, setPhoneNumber] = useState("1234567890");
  const [isEditing, setIsEditing] = useState(false);

  const [editName, setEditName] = useState(name);
  const [editLocation, setEditLocation] = useState(location);
  const [editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber);

  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleSave = async () => {
    // Assuming user.id is passed as a prop
    try {
      const { data, error } = await supabase
        .from("users")
        .update({
          name: editName,
          location: editLocation,
          phone_number: editPhoneNumber,
        })
        .eq("id", user.id);

      if (error) {
        throw error;
      }

      // Update state
      setName(editName);
      setLocation(editLocation);
      setPhoneNumber(editPhoneNumber);

      setEditModalVisible(false);
    } catch (error) {
      console.error("Error updating user information:", error.message);
    }
  };

  const navigateToAdmin = () => {
    navigation.navigate("AdminHome");
  };

  return (
    <View style={{ gap: 20 }}>
      <View style={profileStyle.profileHeader}>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={profileStyle.icon}
        >
          <ArrowIcon />
        </Pressable>

        <View style={profileStyle.CloudLogo}>
          <Image source={CloudLogo} style={{ width: "100%", height: "100%" }} />
        </View>
      </View>

      <Userdata />

      <View style={profileStyle.oders}>
        <Text style={{ fontSize: 20, fontFamily: "Mogra", color: "#fff" }}>
          My Orders
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            width: "100%",
          }}
        >
          <Pressable style={profileStyle.orderIconView}>
            <FontAwesome5 name="money-check-alt" size={20} color="black" />
            <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
              To Pay
            </Text>
          </Pressable>

          <Pressable style={profileStyle.orderIconView}>
            <FontAwesome5 name="calendar-check" size={20} color="black" />
            <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
              To Ship
            </Text>
          </Pressable>

          <Pressable style={profileStyle.orderIconView}>
            <FontAwesome5 name="truck" size={20} color="black" />
            <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
              To Receive
            </Text>
          </Pressable>

          <Pressable style={profileStyle.orderIconView}>
            <FontAwesome5 name="comment-dots" size={20} color="black" />
            <Text style={{ fontSize: 12, fontFamily: "PoppinsMedium" }}>
              To Review
            </Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "Mogra" }}>My Wallet</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", gap: 10 }}
          >
            <Text
              style={{ fontFamily: "Mogra", color: "#D53624", fontSize: 16 }}
            >
              PKR
            </Text>
            <Text>0</Text>
          </View>

          <View
            style={{
              width: 2,
              height: 50,
              backgroundColor: "rgba(0,0,0,0.5)",
              right: -10,
            }}
          ></View>

          <View
            style={{ alignItems: "center", justifyContent: "center", gap: 10 }}
          >
            <Text
              style={{ fontFamily: "Mogra", color: "#D53624", fontSize: 16 }}
            >
              Vouchers
            </Text>
            <Text>0</Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={navigateToAdmin}
        style={{ width: 200, alignSelf: "flex-end", margin: 30 }}
      >
        <Button onPress={navigateToAdmin}>Go to Your Store</Button>
      </Pressable>

      {/* Edit modal */}
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={profileStyle.modalContainer}>
          <View style={profileStyle.modalContent}>
            <Text>Edit Information</Text>
            <TextInput
              value={editName}
              onChangeText={setEditName}
              placeholder="Name"
            />
            <TextInput
              value={editLocation}
              onChangeText={setEditLocation}
              placeholder="Location"
            />
            <TextInput
              value={editPhoneNumber}
              onChangeText={setEditPhoneNumber}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
            <Pressable onPress={handleSave}>
              <Text>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
