import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>

      <Button
        onPress={() => props.navigation.navigate('Components')} 
        title="Go to Components demo" 
      />

      <Button
        onPress={() => props.navigation.navigate('List')} 
        title="Go to List demo" 
      />

      <Button
        onPress={() => props.navigation.navigate('Image')} 
        title="Go to Image demo" 
      />

      <Button
        onPress={() => props.navigation.navigate('Counter')} 
        title="Go to Counter demo" 
      />

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
});

export default HomeScreen;