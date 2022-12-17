import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LoginUI from "./src/pages/Login"
const Stack = createStackNavigator()
export default function App() {
  let Options: any = {
    title: "Login",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#141923",
    },
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginUI} options={Options} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
