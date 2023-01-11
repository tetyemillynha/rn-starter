import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Components')} 
      >
        <Text>Go to Components demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('List')} 
      >
        <Text>Go to List demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Image')} 
      >
        <Text>Go to Image demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Counter')} 
      >
        <Text>Go to Counter demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Color')} 
      >
        <Text>Go to Color demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Square')} 
      >
        <Text>Go to Square demo</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "white",
    border: "solid",
    borderWidth: 1,
    borderColor: "green",
    padding: 10
  },
});

export default HomeScreen;