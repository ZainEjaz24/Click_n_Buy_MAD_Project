import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../../supabase"; // Import your Supabase client
import { AdminHomeStyle, styles } from "../../AdminStyles/AdminHomeStyle";
import backButton from "../../AdminAssets/back.png";
import phoneLogo from "../../AdminAssets/call-in.png";
import MessageIcon from "../../AdminAssets/mail.png";
import cloudLogo from "../../AdminAssets/Cloud_black_text-01.png";
import storeIcon from "../../AdminAssets/Store-icon-01.png";
import ShopProduct from "../../AdminComponents/ShopProduct/ShopProduct";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

// MessagesPopup component
const MessagesPopup = ({ messages, handleDeleteMessage, onClose }) => {
  const [refreshedMessages, setRefreshedMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase.from("allmessages").select("*");

      if (error) {
        throw error;
      }

      if (data) {
        setRefreshedMessages(data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error.message);
    }
  };

  useEffect(() => {
    if (messages && messages.length > 0) {
      setRefreshedMessages(messages);
    } else {
      setRefreshedMessages([]);
    }
  }, [messages]);

  const renderMessages = () => {
    return refreshedMessages.map((msg) => (
      <View key={msg.id} style={styles.messageContainer}>
        <View style={styles.messageHeader}>
          <Text style={styles.messageName}>{msg.name}</Text>
          <Text style={styles.messageTime}>{msg.time}</Text>
        </View>
        <Text style={styles.messageText}>{msg.message}</Text>
        <Pressable onPress={() => handleDeleteMessage(msg.id)}>
          <Text style={styles.deleteButton}>X</Text>
        </Pressable>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messages</Text>
      </View>
      <ScrollView>{renderMessages()}</ScrollView>
      <Pressable onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
    </View>
  );
};

// AdminHome component
const AdminHome = () => {
  const [messages, setMessages] = useState([]);
  const [showMessagesPopup, setShowMessagesPopup] = useState(false);
  useEffect(() => {
    fetchStoreInfo();
    fetchMessages();
  }, []);

  const fetchStoreInfo = async () => {
    try {
      const { data, error } = await supabase
        .from("stores")
        .select("*")
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setStoreInfo(data);
      }
    } catch (error) {
      console.error("Error fetching store information:", error.message);
    }
  };

  useEffect(() => {
    if (showMessagesPopup) {
      fetchMessages();
    }
  }, [showMessagesPopup]);

  const handleEditInfo = () => {
    setIsEditing(true);
  };

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase.from("allmessages").select("*");

      if (error) {
        throw error;
      }

      if (data) {
        setMessages(data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error.message);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const { error } = await supabase
        .from("allmessages")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );
      Alert.alert("Success", "Message deleted successfully!");
    } catch (error) {
      console.error("Error deleting message:", error.message);
      Alert.alert("Error", "Failed to delete message. Please try again later.");
    }
  };

  const handleMessagesPress = () => {
    setShowMessagesPopup(true);
  };

  const AddProductBtnClick = () => {
    navigation.navigate("AddProduct");
  };

  const OrdersBtnClick = () => {
    navigation.navigate("Orders");
  };

  const navigation = useNavigation();
  const [storeInfo, setStoreInfo] = useState({
    store_name: "",
    store_owner: "",
    owner_number: "",
    store_image: null,
  });

  // const [storeInfo, setStoreInfo] = useState({
  //   store_name: "",
  //   store_owner: "",
  //   owner_number: "",
  //   store_image: storeIcon,
  // });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editedStoreInfo, setEditedStoreInfo] = useState({ ...storeInfo });

  useEffect(() => {
    fetchStoreInfo();
  }, []);

  const handleStoreIconPress = async () => {
    Alert.alert(
      "Select Action",
      "Choose an action for the store icon:",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove Icon",
          onPress: removeIcon,
        },
        {
          text: "Select from Gallery",
          onPress: selectFromGallery,
        },
      ],
      { cancelable: true }
    );
  };

  const handleSaveInfo = async () => {
    try {
      const { error } = await supabase.from("stores").upsert([editedStoreInfo]);

      if (error) {
        throw error;
      }

      //setStoreInfo(editedStoreInfo);
      setIsEditing(false);
      Alert.alert("Success", "Store information updated successfully!");
    } catch (error) {
      console.error("Error updating store information:", error.message);
      Alert.alert(
        "Error",
        "Failed to update store information. Please try again later."
      );
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedStoreInfo({ ...storeInfo });
  };

  const handleChange = (field, value) => {
    setEditedStoreInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const removeIcon = () => {
    setEditedStoreInfo((prevInfo) => ({
      ...prevInfo,
      store_image: storeIcon, // Set original store_icon image
    }));
    setSelectedImage(null); // Clear selected image state
  };

  //   // const selectFromGallery = async () => {
  //   //   const permission = await MediaLibrary.requestPermissionsAsync();

  //   //   if (permission.granted) {
  //   //     let result = await ImagePicker.launchImageLibraryAsync({
  //   //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //   //       allowsEditing: true,
  //   //       aspect: [1, 1],
  //   //       quality: 1,
  //   //     });

  //   //     if (
  //   //       !result.cancelled &&
  //   //       result.assets &&
  //   //       result.assets.length > 0 &&
  //   //       result.assets[0].uri
  //   //     ) {
  //   //       const selectedImageUrl = result.assets[0].uri; // Extract image URL from result

  //   //       // Check if selected image is different from current store image
  //   //       if (selectedImageUrl !== storeInfo.store_image) {
  //   //         setSelectedImage(selectedImageUrl); // Update selected image state
  //   //         setEditedStoreInfo((prevInfo) => ({
  //   //           ...prevInfo,
  //   //           store_image: selectedImageUrl, // Update storeInfo object with selected image URL
  //   //         }));
  //   //       }

  //   //       try {
  //   //         const fileName = `store_image_${Date.now()}.jpg`; // Generate a unique file name
  //   //         const { data, error } = await supabase.storage
  //   //           .from("products") // Specify the folder in your Supabase storage
  //   //           .upload(fileName, selectedImageUrl);

  //   //         if (error) {
  //   //           throw error;
  //   //         }

  //   //         console.log("Image uploaded successfully:", data);
  //   //         Alert.alert("Success", "Image uploaded successfully.");

  //   //         //handleSaveInfo(); // Call handleSaveInfo to update store information
  //   //       } catch (error) {
  //   //         console.error("Error uploading image:", error.message);
  //   //         Alert.alert("Error", "Failed to upload image.");
  //   //       }
  //   //     } else {
  //   //       console.log("Image selection cancelled or URI not available.");
  //   //     }
  //   //   } else {
  //   //     Alert.alert(
  //   //       "Permission Required",
  //   //       "Please allow access to your media library to select an image."
  //   //     );
  //   //   }
  //   // };
  const selectFromGallery = async () => {
    const permission = await MediaLibrary.requestPermissionsAsync();

    if (permission.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (
        !result.cancelled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        const selectedImageUrl = result.assets[0].uri; // Extract image URL from result

        // Check if selected image is different from current store image
        if (selectedImageUrl !== storeInfo.store_image) {
          setSelectedImage(selectedImageUrl); // Update selected image state
          setEditedStoreInfo((prevInfo) => ({
            ...prevInfo,
            store_image: selectedImageUrl, // Update storeInfo object with selected image URL
          }));
        }

        try {
          const fileName = `store_image_${Date.now()}.jpg`; // Generate a unique file name
          const response = await fetch(selectedImageUrl);
          const blob = await response.blob();

          const { data, error } = await supabase.storage
            .from("products") // Specify the folder in your Supabase storage
            .upload(fileName, blob); // Upload the blob (image) directly

          if (error) {
            throw error;
          }

          console.log("Image uploaded successfully:", data);
          Alert.alert("Success", "Image uploaded successfully.");

          // handleSaveInfo(); // Call handleSaveInfo to update store information
        } catch (error) {
          console.error("Error uploading image:", error.message);
          Alert.alert("Error", "Failed to upload image.");
        }
      } else {
        console.log("Image selection cancelled or URI not available.");
      }
    } else {
      Alert.alert(
        "Permission Required",
        "Please allow access to your media library to select an image."
      );
    }
  };

  return (
    <View style={AdminHomeStyle.container}>
      {/* Header */}
      <View style={AdminHomeStyle.header}>
        <View style={AdminHomeStyle.backBackground}>
          <Pressable>
            <Image source={backButton} style={[AdminHomeStyle.backbutton]} />
          </Pressable>
        </View>
        <Image source={cloudLogo} style={[AdminHomeStyle.cloudlogo]} />
      </View>

      {/* Store details */}
      <View style={AdminHomeStyle.storeDetails}>
        <View style={AdminHomeStyle.leftDetails}>
          <Pressable onPress={handleStoreIconPress}>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={AdminHomeStyle.storeIcon}
              />
            ) : (
              <Image source={storeIcon} style={AdminHomeStyle.storeIcon} />
            )}
          </Pressable>
        </View>

        <View style={AdminHomeStyle.rightDetails}>
          {isEditing ? (
            <>
              <TextInput
                value={editedStoreInfo.store_name}
                onChangeText={(text) => handleChange("store_name", text)}
              />
              <TextInput
                value={editedStoreInfo.store_owner}
                onChangeText={(text) => handleChange("store_owner", text)}
              />
              <TextInput
                value={editedStoreInfo.owner_number}
                onChangeText={(text) => handleChange("owner_number", text)}
              />
              <View style={{ margin: 10, flexDirection: "row", gap: 10 }}>
                <Button title="Save" onPress={handleSaveInfo} />
                <Button title="Cancel" onPress={handleCancelEdit} />
              </View>
            </>
          ) : (
            <>
              <Text style={AdminHomeStyle.storeName}>
                {storeInfo.store_name}
              </Text>
              <Text style={AdminHomeStyle.ownerName}>
                {storeInfo.store_owner}
              </Text>
              <View style={AdminHomeStyle.phoneDetails}>
                <Image source={phoneLogo} style={[AdminHomeStyle.phoneIcon]} />
                <Text style={AdminHomeStyle.phoneNumber}>
                  {storeInfo.owner_number}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>

      {/* Edit Info button */}
      <View>
        {!isEditing && (
          <Pressable onPress={handleEditInfo}>
            <Text style={AdminHomeStyle.editText}>Edit Info...</Text>
          </Pressable>
        )}
      </View>

      {/* My Products section */}
      <View style={AdminHomeStyle.myProductsSlider}>
        <Text style={AdminHomeStyle.myProducts}>MY PRODUCTS</Text>
        <ShopProduct />
      </View>

      {/* Add Product button */}
      <View style={AdminHomeStyle.addBtnContainer}>
        <Pressable
          onPress={AddProductBtnClick}
          style={AdminHomeStyle.addProdBtn}
        >
          <Text style={AdminHomeStyle.addProduct}>ADD PRODUCT</Text>
        </Pressable>
      </View>

      {/* Orders section */}
      <View style={AdminHomeStyle.orders}>
        <Text style={AdminHomeStyle.ordersHeading}>ORDERS</Text>
        <Pressable onPress={OrdersBtnClick} style={AdminHomeStyle.ordersBtn}>
          <Text style={AdminHomeStyle.ordersText}>ALL ORDERS</Text>
        </Pressable>
      </View>

      {/* Messages section */}
      <View style={AdminHomeStyle.messages}>
        <Text style={AdminHomeStyle.customersHeading}>CUSTOMERS</Text>
        <Pressable
          onPress={handleMessagesPress}
          style={AdminHomeStyle.msgPressable}
        >
          <Image source={MessageIcon} style={[AdminHomeStyle.messageIcon]} />
          <Text style={AdminHomeStyle.messagesText}>Messages</Text>
        </Pressable>
      </View>

      {/* MessagesPopup modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showMessagesPopup}
        onRequestClose={() => setShowMessagesPopup(false)}
      >
        <MessagesPopup
          messages={messages}
          handleDeleteMessage={handleDeleteMessage}
          onClose={() => setShowMessagesPopup(false)}
        />
      </Modal>
    </View>
  );
};

export default AdminHome;
