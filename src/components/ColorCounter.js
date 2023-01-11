import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({color}) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Text>{ color }</Text>
        <Button title={`Increase ${color}`} />
        <Button title={`Decrease ${color}`} />
      </View>
    )
}

const style = StyleSheet.create({

});

export default ColorCounter