import React from "react"

import { StyleSheet } from "react-native"

export const Colors: any = {
  solidDark: "#262626",
  solidPink: "3CA0B4A",
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
  },
})

export default LoginStyle
