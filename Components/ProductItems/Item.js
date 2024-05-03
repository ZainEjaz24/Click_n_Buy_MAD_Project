import { View, Text, SafeAreaView, Pressable,  LayoutAnimation, UIManager } from 'react-native'
import React, { useContext, useState } from 'react'
import { productContext } from '../Context/Context';
import { ItemDetail } from './ItemDetail';
import ItemStyle from './ItemStyle';
import ArrowIcon from '../../UI/ArrowIcon';
import HeartIcon from '../../UI/HeartIcon';
import Button from '../../UI/Button';
import CartIcon from '../../UI/CartIcon';
import { Alert } from '../../UI/Alert';

export default function Item({navigation, route}) {

  const [showAlert, setShowAlert] = useState(false);

  const {productId}= route.params ?? null;

  const value = useContext(productContext);

    const Product = value.all_products.find((e)=>e.id == productId);

    const backHandler = ()=>{
      navigation.goBack();
    }

    const addToCartHandler= ()=>{
      setShowAlert(true);
    }

    const cartPressHandler = ()=>{
       addToCartHandler();
       value.addToCart(Product.id);
    }
   const dismissAlert=()=>{
    setShowAlert(false);
   }

   const [showDeletedMessage, setShowDeletedMessage] = useState(false);

   // Enable LayoutAnimation
   UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

   
   const deletePrompt = ()=>{
     LayoutAnimation.easeInEaseOut();
     setShowDeletedMessage(true);
   setTimeout(() => {
     setShowDeletedMessage(false);
   }, 2000);
   }


  return (
    <SafeAreaView style={{flex:1, }}>


  
{showAlert && (
        <Alert showAlert={showAlert}  alert={'cart'} />
      )}

<View style={ItemStyle.itemhead}>

       
      <Pressable onPress={backHandler} dismissAlert={dismissAlert} style={ItemStyle.itemIcon}>
        <ArrowIcon/>
      </Pressable>

      {showDeletedMessage && (
                   <View style={{backgroundColor: '#D53624', padding: 10,top:30,left:"20%",position:'absolute',zIndex:500, borderRadius: 10,width:120}}>
                     <Text style={{  color: '#fff', fontFamily:'Mogra' }}>
          Item Deleted Successfully!
        </Text>
                    </View>
      )}

      <Pressable style={ItemStyle.itemIcon}>
        <HeartIcon deletePrompt={deletePrompt} pId={productId} />
      </Pressable>

    </View>

     <ItemDetail product={Product} />

     <View style={ItemStyle.itemButtonView}>

     <Pressable style={ItemStyle.cartBtn} onPress={cartPressHandler}>
      <Text style={{ fontFamily:'PoppinsMedium',fontSize:14}}>Add to cart</Text>  
      <CartIcon/>
      </Pressable>
        <Button>Buy now</Button>

     </View>

    </SafeAreaView>
  )
}