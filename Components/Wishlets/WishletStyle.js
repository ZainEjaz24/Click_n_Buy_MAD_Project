import { StyleSheet } from "react-native";


const wishletStyle = StyleSheet.create({

    wishletView:{
        backgroundColor:'pink',
        height:'80%',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    wishletBtn:{
        position:'absolute',
        bottom:-20,
        left:'35%',
        
    },
    wishletItem:{
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        width:'90%',
        marginHorizontal:20,
        marginBottom:100,
       

    }
});

export default wishletStyle;