import React, { useState } from 'react'
import { BackView } from '../../UI/BackView'
import { Header } from '../Header/Header'
import { KeyboardAvoidingView, ScrollView, Text,TextInput,View, Platform } from 'react-native'
import Button from '../../UI/Button'
import buyStyle from './BuyStyle'

export const Adress = () => {

    const [HouseNo, setHouseNo] = useState('');
    const [StreetNo, setStreetNo] = useState('');
    const [Landmark, setLandmark] = useState('');
    const [postal, setPostal] = useState('');


  return (
    
    <BackView>

    <Header />

    <ScrollView >

        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={buyStyle.addressfield}>

        <Text style={buyStyle.modelHeading}>Your Address</Text>

        <View style={buyStyle.adressInputFields}>
            <TextInput 
            value={HouseNo}
            onChangeText={(text)=>setHouseNo(text)}
            placeholder='Enter House number'
            style={buyStyle.input} />
            <Text style={buyStyle.text}>Flat,House No,Building,Company</Text>
        </View>

        <View style={buyStyle.adressInputFields}>
            <TextInput  
             value={StreetNo}
             onChangeText={(text)=>setStreetNo(text)}
            placeholder='Enter Street/Area'
            style={buyStyle.input}/>
            <Text style={buyStyle.text}>Street,Area,Sector,Village</Text>
        </View>

        <View style={buyStyle.adressInputFields}>
            <TextInput 
             value={Landmark}
             onChangeText={(text)=>setLandmark(text)}
            placeholder='Eg. opposite to hill'
            style={buyStyle.input} />
            <Text style={buyStyle.text}>Landmark(Optional)</Text>
        </View>

        <View style={buyStyle.adressInputFields}>
            <TextInput 
            value={postal}
            onChangeText={(text)=>setPostal(text)}
            placeholder='Enter postal code'
            style={buyStyle.input} />
            <Text style={buyStyle.text}>Postal Code</Text>
        </View>


        </KeyboardAvoidingView>
    </ScrollView>

   <View style={buyStyle.addBtn}>
   <Button>Add Address</Button>
   </View>

    </BackView>
  )
}
