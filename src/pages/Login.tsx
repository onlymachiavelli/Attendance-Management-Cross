import React from "react"
import { View, ScrollView, Text, TouchableOpacity} from "react-native"
import LoginStyle from "../components/styles/login.style"
import {Settings , UserLogo , Logo , LockLogo , } from '../components/svg'
const LoginUI = () => {
  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.header}>
        <Text style={LoginStyle.Title}>You Here ? </Text>

        <TouchableOpacity style={LoginStyle.Setting}>
          <Text>
            <Settings Width="20 " Height="20" /> 
          </Text>
        </TouchableOpacity>


      </View>

      <View style={LoginStyle.From}>

      </View>
    </View>
  )
}

export default LoginUI
