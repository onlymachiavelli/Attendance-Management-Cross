import React from "react"

import { StyleSheet } from "react-native"
 const Colors: any = {
  solidDark: "#262626",
  solidPink: "#CA0B4A",
}
const LoginStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.solidDark,
  },
  header: {
    width: "100%",
    height: "auto",
    padding:3, 
    //flex : 1 , 
    flexDirection : "row" , 
   // justifyContent : "center" , 
   alignContent :"center" , 
    backgroundColor: Colors.solidPink, 
    paddingTop : 40 , 
    paddingLeft : 15 , 
    paddingBottom : 15
  },  
  Setting : {
    right : 10 , 
    position : "absolute" , 
    top : 40
  } ,

  Title : {
    fontSize : 17,
    color: "white" , 
    fontWeight : "bold"
  }
  , From : {
    width :"100%" , 
    height : "auto" , 
    textAlign : "center" , 

  }
})

export default LoginStyle
