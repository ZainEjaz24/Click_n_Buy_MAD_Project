import React,{useState} from 'react'
import { Platform, View, Text, ScrollView, Alert,Pressable, KeyboardAvoidingView } from 'react-native'
import { Header } from '../Header/Header'
import { Buynow } from './Buynow';
import { BottomModal, SlideAnimation, ModalContent, ModalPortal  } from "react-native-modals";
import buyStyle from './BuyStyle';
import Button from '../../UI/Button';
import BottomModel from '../../UI/BottomModel';
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";

export const BuyScreen = ({navigation, route}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const {total} = route.params ?? null;
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(  "fetching your location ...");

   

    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
    
        if (!enabled) {
          Alert.alert(
            "Location Services not enabled",
            "Please enable your location services to continue",
            [{ text: "OK" }],
            { cancelable: false }
          );
        } else {
          setLocationServicesEnabled(true);
        }
      };

      const GetCurrentLocation =async ()=>{
        let { status } = await Location.requestBackgroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Permission not granted",
            "Allow the app to use the location service",
            [{ text: "OK" }],
            { cancelable: false }
          );
        }

        // const location = await Location.getCurrentPositionAsync({
        //     accuracy: Location.Accuracy.High,
        //   });

        //   console.log("jidjf");

        let { coords } = await Location.getCurrentPositionAsync();

        console.log(coords);

      }


    const currentLocatinoHandler = ()=>{
        CheckIfLocationEnabled();
        GetCurrentLocation();
        
    }

    const toggleModel = ()=>{
        setIsModalVisible(!isModalVisible);
        
    }

    const confirmOrderHandler = ()=>{

        navigation.navigate("Thankyou");
    }


  return (
    <View style={{flex:1}}>

   

       <Header />
        

     <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}} >

     <Buynow toggleModel={toggleModel} total={total} />

   

        <View style={{
                marginTop:10,
                backgroundColor:'#F9A5AE',
                elevation:5,
                height:60,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Button onPress={confirmOrderHandler}>Confirm Order</Button>
            </View>
            </KeyboardAvoidingView>
    
            <BottomModel toggleModel={toggleModel} visible={isModalVisible}>


            <ModalContent style={{ width: "100%", height: 400, backgroundColor:'pink' }}>
                        <View style={buyStyle.modelView}>
                            <Text style={buyStyle.modelHeading}>Choose Your Location</Text>
                            <ScrollView >
                               <Button onPress={()=>{navigation.navigate("Adress"), setIsModalVisible(false)}} >
                                    <Text>Add Adress or Pickup point</Text>
                                    </Button>
                            </ScrollView>
                            <View>
                                <Pressable onPress={currentLocatinoHandler}><Text>use my current location</Text></Pressable>
                                <Pressable><Text>Location</Text></Pressable>
                                <Pressable><Text>Location</Text></Pressable>
                            </View>
                        </View>
                    </ModalContent>
            </BottomModel>

    </View>
  )
}
