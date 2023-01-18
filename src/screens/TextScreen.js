import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const TextScreen = () => {
    return (
        <View>
            <Text>TextScreen</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});


export default TextScreen