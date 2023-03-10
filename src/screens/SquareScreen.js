import React, { useReducer, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 1;

const reducer = (state, action) => {
    //state === {red: number ... n: number}
    //action === {colorChange: 'red' || ... 'n', amount: 15 ||-1}

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            break;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0 });
    
    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })} 
                onDecrease={() =>  dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />

            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })} 
                onDecrease={() =>  dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />

           <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue -', amount: COLOR_INCREMENT })} 
                onDecrease={() =>  dispatch({ colorToChange: 'blue -', amount: -1 * COLOR_INCREMENT })}
                color="Blue"
            />

            <View 
                style={{ 
                    height:150, 
                    width:150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})` 
                }} 
            />
        </View>
    );
};


const styles = StyleSheet.create({
});

export default SquareScreen