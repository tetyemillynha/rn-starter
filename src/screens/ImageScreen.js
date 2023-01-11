import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
        <ImageDetail title="Forest"/>
        <ImageDetail title="Beach"/>
        <ImageDetail title="Mountain"/>
        <ImageDetail title="Lake"/>
    </View>
  );
}

const style = StyleSheet.create({

});

export default ImageScreen