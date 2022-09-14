import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, SafeAreaView, Alert, Image, TouchableWithoutFeedback} from "react-native";

const App = () => {
  const HandleButtonPress = () => Alert.alert("Yo", "Wanna cook?",
  [{text: "Yes, bitch!"}, {text: "No, Mr. White."}]);

  const HandleButtonPress2 = () => Alert.prompt("Say my name", "Message", text => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text>The braking bad tutorial</Text>
      <Button title="Dont touch this" onPress={HandleButtonPress}/>
      <Button title="Cmon" onPress={HandleButtonPress2}/>
      <TouchableWithoutFeedback onPress={HandleButtonPress}>
      <Image blurRadius={1} source={require("./assets/favicon.png")}/>
      </TouchableWithoutFeedback>
      
      {/* Статус бар - невидимый */}
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
