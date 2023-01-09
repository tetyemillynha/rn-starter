import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeating = 'Stefhany';
    const helloMundo = <Text style={styles.subHeaderStyle}>Hello Mundo</Text>;

    return ( 
        <View>
            <Text style={{ fontSize: 45 }}>Getting started with React Native!</Text>
            <Text style={styles.textStyle}>My name is {greeating}</Text>
            {helloMundo}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;