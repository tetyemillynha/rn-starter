import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const colors = ["Red", "Blue", "Green"];

    return (
        <FlatList 
            keyExtractor={(item) => item}
            data={colors}
            renderItem={({item}) => {
            return (
                <ColorCounter color={ item } />
            )
        }} />
       
    );
};


const styles = StyleSheet.create({
});

export default SquareScreen