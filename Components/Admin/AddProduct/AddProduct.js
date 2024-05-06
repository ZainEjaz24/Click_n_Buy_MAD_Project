// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   Image,
//   ScrollView,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   TextInput,
//   Alert,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
// import * as MediaLibrary from "expo-media-library";
// import { addProductPageStyle } from "../../AdminStyles/AddProductStyle"; // Import styles
// import cloudLogo from "../../AdminAssets/Cloud_black_text-01.png"; // Import images
// import backButton from "../../AdminAssets/back.png";
// import upload_area from "../../AdminAssets/upload_area.png";
// import { uploadImageToStorage } from "../../../firebase"; // Import Firebase functions
// import { addDoc, collection } from "firebase/firestore";
// import db from "../../../firebase";

// export default function AddProduct() {
//   const navigation = useNavigation();

//   // State variables to hold product details
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(upload_area);
//   const [category, setCategory] = useState("");
//   const [name, setName] = useState("");
//   const [storeName, setStoreName] = useState("");
//   const [description, setDescription] = useState("");
//   const [brand, setBrand] = useState("");
//   const [oldPrice, setOldPrice] = useState("");
//   const [newPrice, setNewPrice] = useState("");

//   // Function to handle when the user presses the upload icon
//   const handleUploadIconPress = () => {
//     Alert.alert(
//       "Select Action",
//       "Choose an action for the store icon:",
//       [
//         {
//           text: "Select from Gallery",
//           onPress: selectFromGallery,
//         },
//         {
//           text: "Remove Image",
//           onPress: removeIcon,
//         },
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//       ],
//       { cancelable: true }
//     );
//   };

//   // Function to upload image to Firebase Storage
//   const uploadImage = async () => {
//     if (!selectedImage) {
//       console.log("No image selected to upload.");
//       return;
//     }

//     try {
//       const imageURL = await uploadImageToStorage(selectedImage);
//       console.log("Image uploaded successfully:", imageURL);
//       return imageURL;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       throw error;
//     }
//   };

//   const addProduct = async () => {
//     try {
//       // Upload image to Firebase Storage
//       const imageURL = await uploadImage();

//       // If imageURL is null, there was an error uploading the image
//       if (!imageURL) {
//         throw new Error("Failed to upload image.");
//       }

//       // Add product details to Firestore
//       const productData = {
//         category,
//         name,
//         storeName,
//         description,
//         brand,
//         oldPrice: parseInt(oldPrice),
//         newPrice: parseInt(newPrice),
//         image: imageURL,
//       };

//       await addDoc(collection(db, "products"), productData);

//       // Reset the form after successful addition
//       setSelectedImage(null);
//       setCategory("");
//       setName("");
//       setStoreName("");
//       setDescription("");
//       setBrand("");
//       setOldPrice("");
//       setNewPrice("");

//       Alert.alert("Success", "Product added successfully!");
//     } catch (error) {
//       console.error("Error adding product:", error);
//       Alert.alert("Error", "Failed to add product. Please try again.");
//     }
//   };

//   // Function to handle back button press
//   const backBtnPress = () => {
//     navigation.navigate("AdminHome");
//   };
//   const selectFromGallery = async () => {
//     const permission = await MediaLibrary.requestPermissionsAsync();

//     if (permission.granted) {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         quality: 1,
//         base64: true,
//       });

//       if (
//         !result.cancelled &&
//         result.assets &&
//         result.assets.length > 0 &&
//         result.assets[0].uri
//       ) {
//         setPreviewImage(result.assets[0].uri);
//         setSelectedImage(result.assets[0].base64);
//       } else {
//         console.log("Image selection cancelled or URI not available.");
//       }
//     } else {
//       Alert.alert(
//         "Permission Required",
//         "Please allow access to your media library to select an image."
//       );
//     }
//   };
//   // Function to remove selected image
//   const removeIcon = () => {
//     setSelectedImage(null);
//   };

//   // JSX structure for the Add Product screen
//   return (
//     <SafeAreaView style={addProductPageStyle.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={{ flex: 1 }}
//       >
//         <View
//           style={[addProductPageStyle.header, { backgroundColor: "#F9A5AE" }]}
//         >
//           <View style={addProductPageStyle.backBackground}>
//             <Pressable onPress={backBtnPress}>
//               <Image
//                 source={backButton}
//                 style={addProductPageStyle.backbutton}
//               />
//             </Pressable>
//           </View>
//           <Image source={cloudLogo} style={addProductPageStyle.cloudlogo} />
//         </View>

//         <ScrollView contentContainerStyle={addProductPageStyle.mainSection}>
//           <Text
//             style={{
//               fontSize: 24,
//               fontWeight: "bold",
//               marginBottom: 20,
//               textAlign: "center",
//             }}
//           >
//             ADD NEW PRODUCT
//           </Text>

//           <View style={{ marginBottom: 20, alignItems: "center" }}>
//             <Pressable onPress={handleUploadIconPress}>
//               {selectedImage ? (
//                 <Image
//                   source={{ uri: previewImage }}
//                   style={addProductPageStyle.upload_img}
//                 />
//               ) : (
//                 <Image
//                   source={upload_area}
//                   style={addProductPageStyle.upload_img}
//                 />
//               )}
//             </Pressable>
//             {selectedImage && (
//               <Pressable onPress={removeIcon}>
//                 <Text style={{ color: "red", marginTop: 10 }}>
//                   Remove Image
//                 </Text>
//               </Pressable>
//             )}
//           </View>

//           {/* Text input fields for product details */}
//           <TextInput
//             style={[
//               addProductPageStyle.input,
//               {
//                 borderRadius: 10,
//                 marginBottom: 20,
//                 backgroundColor: "white",
//                 padding: 5,
//               },
//             ]}
//             placeholder="Category"
//             value={category}
//             onChangeText={setCategory}
//           />

//           <TextInput
//             style={[
//               addProductPageStyle.input,
//               {
//                 borderRadius: 10,
//                 marginBottom: 20,
//                 backgroundColor: "white",
//                 padding: 5,
//               },
//             ]}
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//           />

//           <TextInput
//             style={[
//               addProductPageStyle.input,
//               {
//                 borderRadius: 10,
//                 marginBottom: 20,
//                 backgroundColor: "white",
//                 padding: 5,
//               },
//             ]}
//             placeholder="Store Name"
//             value={storeName}
//             onChangeText={setStoreName}
//           />

//           <TextInput
//             style={[
//               addProductPageStyle.input,
//               {
//                 borderRadius: 10,
//                 marginBottom: 20,
//                 backgroundColor: "white",
//                 padding: 5,
//               },
//             ]}
//             placeholder="Description"
//             multiline={true}
//             numberOfLines={4}
//             value={description}
//             onChangeText={setDescription}
//           />

//           <TextInput
//             style={[
//               addProductPageStyle.input,
//               {
//                 borderRadius: 10,
//                 marginBottom: 20,
//                 backgroundColor: "white",
//                 padding: 5,
//               },
//             ]}
//             placeholder="Brand"
//             value={brand}
//             onChangeText={setBrand}
//           />

//           {/* Text input fields for old and new prices */}
//           <View style={{ flexDirection: "row", marginBottom: 20, gap: 10 }}>
//             <TextInput
//               style={[
//                 addProductPageStyle.input,
//                 {
//                   borderRadius: 10,
//                   marginBottom: 20,
//                   backgroundColor: "white",
//                   padding: 5,
//                   flex: 1,
//                 },
//               ]}
//               placeholder="Old Price"
//               keyboardType="numeric"
//               value={oldPrice}
//               onChangeText={setOldPrice}
//             />
//             <TextInput
//               style={[
//                 addProductPageStyle.input,
//                 {
//                   borderRadius: 10,
//                   marginBottom: 20,
//                   backgroundColor: "white",
//                   padding: 5,
//                   flex: 1,
//                 },
//               ]}
//               placeholder="New Price"
//               keyboardType="numeric"
//               value={newPrice}
//               onChangeText={setNewPrice}
//             />
//           </View>

//           {/* Button to add the product */}
//           <View style={{ alignItems: "center" }}>
//             <Pressable
//               style={addProductPageStyle.addProdButn}
//               onPress={addProduct}
//             >
//               <Text
//                 style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
//               >
//                 ADD PRODUCT
//               </Text>
//             </Pressable>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// import React, { useState } from "react";
// import { View, Text, Pressable, Image, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
// import * as MediaLibrary from "expo-media-library";
// import supabase from "../../../supabase";
// import { decode } from "base64-arraybuffer";

// export default function UploadImage() {
//   const navigation = useNavigation();

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleUpload = async () => {
//     const fileName = Date.now();
//     const { data, error } = await supabase.storage
//       .from("images")
//       .upload(fileName + ".png", decode(selectedImage), {
//         contentType: "image/png",
//       });
//     console.log("Image Uploaded: ", data, error);
//   };

//   const selectFromGallery = async () => {
//     const permission = await MediaLibrary.requestPermissionsAsync();

//     if (permission.granted) {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         quality: 1,
//         base64: true,
//       });

//       if (
//         !result.cancelled &&
//         result.assets &&
//         result.assets.length > 0 &&
//         result.assets[0].uri
//       ) {
//         setSelectedImage(result.assets[0].uri);
//       } else {
//         console.log("Image selection cancelled or URI not available.");
//       }
//     } else {
//       Alert.alert(
//         "Permission Required",
//         "Please allow access to your media library to select an image."
//       );
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {selectedImage ? (
//         <Image
//           source={{ uri: selectedImage }}
//           style={{ width: 200, height: 200, marginBottom: 20 }}
//         />
//       ) : (
//         <Image
//           source={require("../../AdminAssets/upload_area.png")}
//           style={{ width: 200, height: 200, marginBottom: 20 }}
//         />
//       )}

//       <Pressable
//         style={{
//           backgroundColor: "blue",
//           padding: 10,
//           borderRadius: 5,
//           marginBottom: 20,
//         }}
//         onPress={selectFromGallery}
//       >
//         <Text style={{ color: "white", fontWeight: "bold" }}>Select Image</Text>
//       </Pressable>

//       <Pressable
//         style={{
//           backgroundColor: "green",
//           padding: 10,
//           borderRadius: 5,
//         }}
//         onPress={handleUpload}
//       >
//         <Text style={{ color: "white", fontWeight: "bold" }}>Upload</Text>
//       </Pressable>
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
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { addProductPageStyle } from "../../AdminStyles/AddProductStyle"; // Import styles
import cloudLogo from "../../AdminAssets/Cloud_black_text-01.png"; // Import images
import backButton from "../../AdminAssets/back.png";
import upload_area from "../../AdminAssets/upload_area.png";
import * as MediaLibrary from "expo-media-library";
import supabase from "../../../supabase";
import { decode } from "base64-arraybuffer";

export default function AddProduct() {
  const navigation = useNavigation();

  // State variables to hold product details
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(upload_area);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // Function to handle when the user presses the upload icon
  const handleUploadIconPress = () => {
    Alert.alert(
      "Select Action",
      "Choose an action for the store icon:",
      [
        {
          text: "Select from Gallery",
          onPress: selectFromGallery,
        },
        {
          text: "Remove Image",
          onPress: removeIcon,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      console.log("No image selected to upload.");
      return;
    }

    const response = await fetch(selectedImage);
    const blob = await response.blob();
    const mimeType = blob.type;

    if (mimeType.startsWith("image/")) {
      const fileExtension = selectedImage.split(".").pop();
      const fileName = `image-${Date.now()}.${fileExtension}`;
      const filePath = `public/${fileName}`;

      try {
        const { data, error } = await supabase.storage
          .from("images")
          .upload(filePath, blob, { contentType: mimeType });

        if (error) {
          console.log("Error uploading image:", error.message);
        } else {
          console.log("Image Uploaded: ", data);
          // Clear selected image after successful upload if needed
          setSelectedImage("");
        }
      } catch (error) {
        console.log("Error uploading image:", error.message);
      }
    } else {
      console.log("Unsupported file type:", mimeType);
    }
  };

  const selectFromGallery = async () => {
    const permission = await MediaLibrary.requestPermissionsAsync();

    if (permission.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });

      if (
        !result.cancelled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        setPreviewImage(result.assets[0].uri);
        setSelectedImage(result.assets[0].base64);
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
  // Function to remove selected image
  const removeIcon = () => {
    setSelectedImage(null);
  };

  // Function to handle back button press
  const backBtnPress = () => {
    navigation.navigate("AdminHome");
  };

  // Function to add product to the database
  const addProduct = async () => {
    try {
      // Upload image to Supabase Storage
      console.log("Starting image upload...");
      const imageKey = await uploadImage(selectedImage);

      if (!imageKey) {
        Alert.alert("Error", "Failed to upload image");
        return;
      }

      // Add product details to the database
      console.log("Adding product details to the database...");
      const { data: productData, error: productError } = await supabase
        .from("products")
        .insert([
          {
            category,
            name,
            store: storeName,
            description,
            brand,
            price: parseInt(newPrice),
            oldPrice: parseInt(oldPrice),
            image: imageKey,
          },
        ]);

      if (productError) {
        console.error(
          "Error adding product to the database:",
          productError.message
        );
        Alert.alert("Error", "Failed to add product to the database");
      } else {
        console.log("Product added successfully!");
        Alert.alert("Success", "Product added successfully!");
        // Reset the form after successful addition
        setSelectedImage(null);
        setCategory("");
        setName("");
        setStoreName("");
        setDescription("");
        setBrand("");
        setOldPrice("");
        setNewPrice("");
      }
    } catch (error) {
      console.error("Error:", error.message);
      Alert.alert("Error", "An error occurred while adding the product.");
    }
  };

  // JSX structure for the Add Product screen
  return (
    <SafeAreaView style={addProductPageStyle.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={[addProductPageStyle.header, { backgroundColor: "#F9A5AE" }]}
        >
          <View style={addProductPageStyle.backBackground}>
            <Pressable onPress={backBtnPress}>
              <Image
                source={backButton}
                style={addProductPageStyle.backbutton}
              />
            </Pressable>
          </View>
          <Image source={cloudLogo} style={addProductPageStyle.cloudlogo} />
        </View>

        <ScrollView contentContainerStyle={addProductPageStyle.mainSection}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            ADD NEW PRODUCT
          </Text>

          <View style={{ marginBottom: 20, alignItems: "center" }}>
            <Pressable onPress={handleUploadIconPress}>
              {selectedImage ? (
                <Image
                  source={{ uri: previewImage }}
                  style={addProductPageStyle.upload_img}
                />
              ) : (
                <Image
                  source={upload_area}
                  style={addProductPageStyle.upload_img}
                />
              )}
            </Pressable>
            {selectedImage && (
              <Pressable onPress={removeIcon}>
                <Text style={{ color: "red", marginTop: 10 }}>
                  Remove Image
                </Text>
              </Pressable>
            )}
          </View>

          {/* Text input fields for product details */}
          <TextInput
            style={[
              addProductPageStyle.input,
              {
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: "white",
                padding: 5,
              },
            ]}
            placeholder="Category"
            value={category}
            onChangeText={setCategory}
          />

          <TextInput
            style={[
              addProductPageStyle.input,
              {
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: "white",
                padding: 5,
              },
            ]}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={[
              addProductPageStyle.input,
              {
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: "white",
                padding: 5,
              },
            ]}
            placeholder="Store Name"
            value={storeName}
            onChangeText={setStoreName}
          />

          <TextInput
            style={[
              addProductPageStyle.input,
              {
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: "white",
                padding: 5,
              },
            ]}
            placeholder="Description"
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          <TextInput
            style={[
              addProductPageStyle.input,
              {
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: "white",
                padding: 5,
              },
            ]}
            placeholder="Brand"
            value={brand}
            onChangeText={setBrand}
          />

          {/* Text input fields for old and new prices */}
          <View style={{ flexDirection: "row", marginBottom: 20, gap: 10 }}>
            <TextInput
              style={[
                addProductPageStyle.input,
                {
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "white",
                  padding: 5,
                  flex: 1,
                },
              ]}
              placeholder="Old Price"
              keyboardType="numeric"
              value={oldPrice}
              onChangeText={setOldPrice}
            />
            <TextInput
              style={[
                addProductPageStyle.input,
                {
                  borderRadius: 10,
                  marginBottom: 20,
                  backgroundColor: "white",
                  padding: 5,
                  flex: 1,
                },
              ]}
              placeholder="New Price"
              keyboardType="numeric"
              value={newPrice}
              onChangeText={setNewPrice}
            />
          </View>

          {/* Button to add the product */}
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={addProductPageStyle.addProdButn}
              onPress={addProduct}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                ADD PRODUCT
              </Text>
            </Pressable>
            <Pressable
              style={addProductPageStyle.addProdButn}
              onPress={uploadImage}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Upload
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// // import React, { useState } from "react";
// // import { View, Text, Pressable, Image, Alert } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// // import * as ImagePicker from "expo-image-picker";
// // import * as MediaLibrary from "expo-media-library";
// // import supabase from "../../../supabase";
// // import { decode } from "base64-arraybuffer";

// // export default function UploadImage() {
// //   const navigation = useNavigation();

// //   const [selectedImage, setSelectedImage] = useState(null);

// //   const handleUpload = async () => {
// //     const fileName = Date.now();
// //     const { data, error } = await supabase.storage
// //       .from("images")
// //       .upload(fileName + ".png", decode(selectedImage), {
// //         contentType: "image/png",
// //       });
// //     console.log("Image Uploaded: ", data, error);
// //   };

// //   const selectFromGallery = async () => {
// //     const permission = await MediaLibrary.requestPermissionsAsync();

// //     if (permission.granted) {
// //       let result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         allowsEditing: true,
// //         quality: 1,
// //         base64: true,
// //       });

// //       if (
// //         !result.cancelled &&
// //         result.assets &&
// //         result.assets.length > 0 &&
// //         result.assets[0].uri
// //       ) {
// //         setSelectedImage(result.assets[0].uri);
// //       } else {
// //         console.log("Image selection cancelled or URI not available.");
// //       }
// //     } else {
// //       Alert.alert(
// //         "Permission Required",
// //         "Please allow access to your media library to select an image."
// //       );
// //     }
// //   };

// //   return (
// //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// //       {selectedImage ? (
// //         <Image
// //           source={{ uri: selectedImage }}
// //           style={{ width: 200, height: 200, marginBottom: 20 }}
// //         />
// //       ) : (
// //         <Image
// //           source={require("../../AdminAssets/upload_area.png")}
// //           style={{ width: 200, height: 200, marginBottom: 20 }}
// //         />
// //       )}

// //       <Pressable
// //         style={{
// //           backgroundColor: "blue",
// //           padding: 10,
// //           borderRadius: 5,
// //           marginBottom: 20,
// //         }}
// //         onPress={selectFromGallery}
// //       >
// //         <Text style={{ color: "white", fontWeight: "bold" }}>Select Image</Text>
// //       </Pressable>

// //       <Pressable
// //         style={{
// //           backgroundColor: "green",
// //           padding: 10,
// //           borderRadius: 5,
// //         }}
// //         onPress={handleUpload}
// //       >
// //         <Text style={{ color: "white", fontWeight: "bold" }}>Upload</Text>
// //       </Pressable>
// //     </View>
// //   );
// // }

// import {
//   View,
//   Text,
//   Pressable,
//   Alert,
//   Image,
//   FlatList,
//   Modal,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState, useEffect } from "react";
// import { uploadStyle } from "./ScreenStyles";
// import * as ImagePicker from "expo-image-picker";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   deleteObject,
// } from "firebase/storage";
// import { storage } from "../../../firebase";
// import { ActivityIndicator } from "react-native";

// export default function DatabaseScreen() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [images, setImages] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedImageUrl, setSelectedImageUrl] = useState(null);

//   useEffect(() => {
//     fetchUploadedImages(); // Fetch images on component mount
//   }, []);

//   // Function to fetch uploaded images from Firebase Storage
//   const fetchUploadedImages = async () => {
//     try {
//       // List all items in the 'images' directory
//       const listResult = await listAll(ref(storage, "images"));
//       // Get download URLs for each image
//       const urls = await Promise.all(
//         listResult.items.map(async (itemRef) => {
//           const url = await getDownloadURL(itemRef);
//           return { url, name: itemRef.name };
//         })
//       );
//       // Set the URLs and names in state
//       setImages(urls);
//     } catch (error) {
//       console.log("Error fetching images:", error);
//     }
//   };

//   // Function to handle selecting an image from device gallery
//   const selectImageHandler = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: false,
//         quality: 1,
//         aspect: [4, 3],
//       });

//       if (!result.cancelled) {
//         setSelectedImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       Alert.alert("Error in selecting image");
//     }
//   };

//   // Function to upload selected image to Firebase Storage
//   const uploadFirebaseHandler = async () => {
//     setUploading(true);
//     try {
//       // Extract filename from image URI
//       const filename = selectedImage.split("/").pop();
//       // Fetch blob data of the selected image
//       const response = await fetch(selectedImage);
//       const blob = await response.blob();
//       // Create reference to 'images/filename' in Firebase Storage
//       const reference = ref(storage, `images/${filename}`);
//       // Upload blob data to Firebase Storage
//       await uploadBytes(reference, blob);
//       setSelectedImage(null);
//       setUploading(false);
//       Alert.alert("File Uploaded");
//       fetchUploadedImages(); // Refresh the list of images after upload
//     } catch (error) {
//       setUploading(false);
//       console.log(error);
//       alert("Error Uploading File");
//     }
//   };

//   // Function to delete an image from Firebase Storage
//   const deleteImage = async (name) => {
//     try {
//       // Create reference to the image to be deleted
//       await deleteObject(ref(storage, `images/${name}`));
//       fetchUploadedImages(); // Refresh the list of images after deletion
//       setModalVisible(false); // Close the modal after deletion
//     } catch (error) {
//       console.log("Error deleting image:", error);
//       alert("Error deleting image");
//     }
//   };

//   // Function to open the modal and display the selected image
//   const openImageModal = (url) => {
//     setSelectedImageUrl(url);
//     setModalVisible(true);
//   };

//   return (
//     <View style={uploadStyle.uploadView}>
//       {/* Header */}
//       <Text
//         style={{
//           marginTop: 30,
//           color: "#000",
//           fontWeight: 600,
//           fontSize: 20,
//         }}
//       >
//         Firebase Gallery
//       </Text>

//       {/* Render the uploaded images */}
//       {images.length > 0 && (
//         <FlatList
//           data={images}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => openImageModal(item.url)}>
//               <View style={{ position: "relative" }}>
//                 {/* Display the image */}
//                 <Image
//                   source={{ uri: item.url }}
//                   style={{ width: 150, height: 150, margin: 5 }}
//                 />
//                 {/* Button to delete the image */}
//                 <TouchableOpacity
//                   onPress={() =>
//                     Alert.alert(
//                       "Delete Image",
//                       "Are you sure you want to delete this image?",
//                       [
//                         {
//                           text: "Cancel",
//                           style: "cancel",
//                         },
//                         {
//                           text: "Yes",
//                           onPress: () => deleteImage(item.name),
//                         },
//                       ]
//                     )
//                   }
//                   style={{
//                     position: "absolute",
//                     top: 5,
//                     right: 5,
//                     backgroundColor: "red",
//                     borderRadius: 20,
//                     padding: 5,
//                     zIndex: 1,
//                   }}
//                 >
//                   <Text style={{ color: "white" }}>X</Text>
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item.name}
//           horizontal
//         />
//       )}

//       {/* Display selected image before upload */}
//       {selectedImage && (
//         <Image
//           source={{ uri: selectedImage }}
//           style={{ width: 300, height: 300, marginBottom: 20 }}
//         />
//       )}

//       {/* Button to select image from device gallery */}
//       <Text
//         style={{
//           fontSize: 20,
//           fontWeight: 600,
//           color: "blue",
//         }}
//       >
//         Upload image to firebase
//       </Text>
//       <Pressable
//         onPress={selectImageHandler}
//         style={uploadStyle.uploadPressable}
//       >
//         <Text
//           style={{ color: "#fff", fontWeight: 600, fontSize: 18, marginTop: 0 }}
//         >
//           Select Image
//         </Text>
//       </Pressable>

//       {/* Button to upload selected image to Firebase */}
//       {selectedImage && (
//         <Pressable
//           onPress={uploadFirebaseHandler}
//           style={uploadStyle.uploadPressable}
//         >
//           {uploading ? (
//             <ActivityIndicator />
//           ) : (
//             <Text
//               style={{
//                 color: "#fff",
//                 fontWeight: 600,
//                 fontSize: 18,
//               }}
//             >
//               Upload to Firebase
//             </Text>
//           )}
//         </Pressable>
//       )}

//       {/* Modal to display selected image */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <TouchableOpacity onPress={() => setModalVisible(false)}>
//             <Image
//               source={{ uri: selectedImageUrl }}
//               style={{ width: 300, height: 300 }}
//             />
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// import {
//   View,
//   Text,
//   Pressable,
//   Alert,
//   Image,
//   FlatList,
//   Modal,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import React, { useState, useEffect } from "react";
// import { uploadStyle } from "./ScreenStyles";
// import * as ImagePicker from "expo-image-picker";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   deleteObject,
// } from "firebase/storage";
// import { storage } from "../../../firebase";
// import { ActivityIndicator } from "react-native";
// import { db } from "../../../firebase"; // Import your Firestore instance
// import { collection, addDoc } from "firebase/firestore"; // Import addDoc instead of setDoc
// import { firebaseAuth as auth } from "../../../firebase";
// export default function DatabaseScreen() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [images, setImages] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedImageUrl, setSelectedImageUrl] = useState(null);

//   // Product state
//   const [category, setCategory] = useState("");
//   const [name, setName] = useState("");
//   const [oldPrice, setOldPrice] = useState("");
//   const [newPrice, setNewPrice] = useState("");
//   const [brand, setBrand] = useState("");
//   const [shopName, setShopName] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     fetchUploadedImages(); // Fetch images on component mount
//   }, []);

//   // Function to fetch uploaded images from Firebase Storage
//   const fetchUploadedImages = async () => {
//     try {
//       // List all items in the 'images' directory
//       const listResult = await listAll(ref(storage, "images"));
//       // Get download URLs for each image
//       const urls = await Promise.all(
//         listResult.items.map(async (itemRef) => {
//           const url = await getDownloadURL(itemRef);
//           return { url, name: itemRef.name };
//         })
//       );
//       // Set the URLs and names in state
//       setImages(urls);
//     } catch (error) {
//       console.log("Error fetching images:", error);
//     }
//   };

//   // Function to handle selecting an image from device gallery
//   const selectImageHandler = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: false,
//         quality: 1,
//         aspect: [4, 3],
//       });

//       if (!result.cancelled) {
//         setSelectedImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       Alert.alert("Error in selecting image");
//     }
//   };

//   // Function to upload selected image to Firebase Storage
//   const uploadFirebaseHandler = async () => {
//     setUploading(true);
//     try {
//       if (!selectedImage) {
//         Alert.alert("Please select an image to upload");
//         return;
//       }

//       // Extract filename from image URI
//       const filename = selectedImage.split("/").pop();
//       // Create reference to 'images/filename' in Firebase Storage
//       const reference = ref(storage, `images/${filename}`);
//       // Upload image
//       const response = await fetch(selectedImage);
//       const blob = await response.blob();
//       await uploadBytes(reference, blob);
//       setUploading(false);
//       setSelectedImage(null);
//       Alert.alert("File Uploaded");
//       fetchUploadedImages(); // Refresh the list of images after upload
//     } catch (error) {
//       setUploading(false);
//       console.log(error);
//       Alert.alert("Error Uploading File");
//     }
//   };

//   const uploadProductData = async () => {
//     try {
//       // Check if any field is empty
//       if (
//         !category ||
//         !name ||
//         !oldPrice ||
//         !newPrice ||
//         !brand ||
//         !shopName ||
//         !description ||
//         !selectedImage
//       ) {
//         Alert.alert("Please fill all the fields and select an image");
//         return;
//       }

//       // Check user authentication status
//       const user = auth.currentUser;
//       if (!user) {
//         // User is not authenticated, handle accordingly
//         Alert.alert("Please sign in to upload product data");
//         return;
//       }

//       // Extract filename from selected image URI
//       const imageName = selectedImage.split("/").pop();

//       // Save product data to Firestore
//       const productData = {
//         category,
//         name,
//         oldPrice,
//         newPrice,
//         brand,
//         shopName,
//         description,
//         imageUrl: imageName, // Store image name in product data
//       };

//       // Get a reference to the "products" collection in Firestore
//       const productsCollectionRef = collection(db, "products");

//       // Add the product data to Firestore using addDoc
//       await addDoc(productsCollectionRef, productData);

//       // Clear input fields
//       setCategory("");
//       setName("");
//       setOldPrice("");
//       setNewPrice("");
//       setBrand("");
//       setShopName("");
//       setDescription("");
//       setSelectedImage(null);

//       Alert.alert("Product Data Uploaded");
//     } catch (error) {
//       console.error("Error uploading product data:", error);
//       Alert.alert("Error uploading product data: " + error.message);
//     }
//   };

//   // Function to delete an image from Firebase Storage
//   const deleteImage = async (name) => {
//     try {
//       // Create reference to the image to be deleted
//       await deleteObject(ref(storage, `images/${name}`));
//       fetchUploadedImages(); // Refresh the list of images after deletion
//       setModalVisible(false); // Close the modal after deletion
//     } catch (error) {
//       console.log("Error deleting image:", error);
//       alert("Error deleting image");
//     }
//   };

//   // Function to open the modal and display the selected image
//   const openImageModal = (url) => {
//     setSelectedImageUrl(url);
//     setModalVisible(true);
//   };

//   return (
//     <View style={uploadStyle.uploadView}>
//       {/* Header */}
//       <Text
//         style={{
//           marginTop: 30,
//           color: "#000",
//           fontWeight: "600",
//           fontSize: 20,
//         }}
//       >
//         Firebase Gallery
//       </Text>

//       {/* Render the uploaded images */}
//       {images.length > 0 && (
//         <FlatList
//           data={images}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => openImageModal(item.url)}>
//               <View style={{ position: "relative" }}>
//                 {/* Display the image */}
//                 <Image
//                   source={{ uri: item.url }}
//                   style={{ width: 150, height: 150, margin: 5 }}
//                 />
//                 {/* Button to delete the image */}
//                 <TouchableOpacity
//                   onPress={() =>
//                     Alert.alert(
//                       "Delete Image",
//                       "Are you sure you want to delete this image?",
//                       [
//                         {
//                           text: "Cancel",
//                           style: "cancel",
//                         },
//                         {
//                           text: "Yes",
//                           onPress: () => deleteImage(item.name),
//                         },
//                       ]
//                     )
//                   }
//                   style={{
//                     position: "absolute",
//                     top: 5,
//                     right: 5,
//                     backgroundColor: "red",
//                     borderRadius: 20,
//                     padding: 5,
//                     zIndex: 1,
//                   }}
//                 >
//                   <Text style={{ color: "white" }}>X</Text>
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item.name}
//           horizontal
//         />
//       )}

//       {/* Display selected image before upload */}
//       {selectedImage && (
//         <Image
//           source={{ uri: selectedImage }}
//           style={{ width: 300, height: 300, marginBottom: 20 }}
//         />
//       )}

//       {/* Input fields for product data */}
//       <TextInput
//         style={uploadStyle.input}
//         placeholder="Category"
//         value={category}
//         onChangeText={setCategory}
//       />
//       <TextInput
//         style={uploadStyle.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={uploadStyle.input}
//         placeholder="Old Price"
//         value={oldPrice}
//         onChangeText={setOldPrice}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={uploadStyle.input}
//         placeholder="New Price"
//         value={newPrice}
//         onChangeText={setNewPrice}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={uploadStyle.input}
//         placeholder="Brand"
//         value={brand}
//         onChangeText={setBrand}
//       />
//       <TextInput
//         style={uploadStyle.input}
//         placeholder="Shop Name"
//         value={shopName}
//         onChangeText={setShopName}
//       />
//       <TextInput
//         style={uploadStyle.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//         multiline={true}
//       />

//       {/* Button to select image from device gallery */}
//       <Pressable
//         onPress={selectImageHandler}
//         style={uploadStyle.uploadPressable}
//       >
//         <Text style={{ color: "#fff", fontWeight: "600", fontSize: 18 }}>
//           Select Image
//         </Text>
//       </Pressable>

//       {/* Button to upload selected image to Firebase */}
//       {selectedImage && (
//         <Pressable
//           onPress={uploadFirebaseHandler}
//           style={uploadStyle.uploadPressable}
//         >
//           {uploading ? (
//             <ActivityIndicator />
//           ) : (
//             <Text style={{ color: "#fff", fontWeight: "600", fontSize: 18 }}>
//               Upload to Firebase
//             </Text>
//           )}
//         </Pressable>
//       )}

//       {/* Button to upload product data */}
//       <Pressable
//         onPress={uploadProductData}
//         style={uploadStyle.uploadPressable}
//       >
//         <Text style={{ color: "#fff", fontWeight: "600", fontSize: 18 }}>
//           Upload Product Data
//         </Text>
//       </Pressable>

//       {/* Modal to display selected image */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <TouchableOpacity onPress={() => setModalVisible(false)}>
//             <Image
//               source={{ uri: selectedImageUrl }}
//               style={{ width: 300, height: 300 }}
//             />
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// }
