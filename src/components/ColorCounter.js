import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Text>{ color }</Text>
        <Button 
            onPress={() => { onIncrease() }} 
            title={`Increase ${color}`} 
        />
        <Button 
            onPress={() => { onDecrease() }} 
            title={`Decrease ${color}`} 
        />
      </View>
    )
}

const style = StyleSheet.create({

});

export default ColorCounter