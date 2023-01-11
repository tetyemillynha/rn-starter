import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    const [disableButton, setDisableButton] = useState(true);

    return (
        <View>
            <Button 
                title="Increase" 
                onPress={() => {
                    setDisableButton(false);
                    setCounter(counter+1);
                }}
            />
            <Button 
                disabled={disableButton}
                title="Decrease" 
                onPress={() => {
                    if (counter > 0) {
                        setDisableButton(false);
                        setCounter(counter-1);
                    } else{
                        setDisableButton(true);
                    }
                }}
            />
            <Text>Current count: {counter}</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default CounterScreen