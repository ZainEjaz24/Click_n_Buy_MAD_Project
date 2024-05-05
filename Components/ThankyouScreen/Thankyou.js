import { View, Text, Image } from 'react-native'
import React from 'react'
import { BackView } from '../../UI/BackView';
import Logo from '../../assets/Images/Logo.png';
import thankStyle from './ThankyouStyle';
import Button from '../../UI/Button';
import { Ionicons } from '@expo/vector-icons';

export default function Thankyou({navigation, route}) {

  const {type} = route.params ?? null;

  return (
    <BackView>

     <View style={thankStyle.thankView}>

     <Image source={Logo} style={{width:200, height:150}} />

     <Text style={thankStyle.thankheading}>Thank you</Text>

    <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
    <Text style={thankStyle.thankText}>
      
     { type=='signup'? 'Account created!' : ' Payment Successful'}
      </Text>
     <Ionicons name="checkmark-circle-sharp" size={34} color="green" />
    </View>

     <Button onPress={()=>navigation.navigate(type=='signup'?"first":"Home")}>
     {type=='signup'? 'start shopping' : 'Back to Home'}
     </Button>

     </View>

      

    </BackView>
  )
}