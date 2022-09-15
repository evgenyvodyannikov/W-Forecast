import { StyleSheet, Text, Button,  SafeAreaView, Alert, Image, TouchableWithoutFeedback, View, ViewBase } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>

      <View style={styles.currentForecast}>
        <Text style={{ fontSize: 15 }}>Moscow 10°C Sunny</Text>
        <Text></Text>
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
    justifyContent: "center",
    flexDirection: "row"
  },
});

export default App;