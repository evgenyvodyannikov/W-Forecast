import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, SafeAreaView, Alert, Image, TouchableWithoutFeedback, View, ViewBase } from "react-native";
import GlobalStyles from "./src/components/GlobalStyles";
import MenuLogo from "./assets/image/icon/menu.svg"

const App = () => {

  const MenuOnPress = () => {
    alert("Pressed!");
  }

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>

      <View style={styles.currentForecast}>
        <TouchableWithoutFeedback onPress={MenuOnPress}>
        <MenuLogo/>
        </TouchableWithoutFeedback>
        
        <Text style={{ fontSize: 15, alignContent: "center" }}>Moscow 10°C Sunny</Text>
      </View>
      <View style={{ flex: 20 }}>
        
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  currentForecast: {
    flex: 1,
    backgroundColor: "#cce6ff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10
  },
});

export default App;