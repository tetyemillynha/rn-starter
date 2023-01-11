import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
        <ImageDetail 
          title="Forest" 
          subtitle="Image score - 9"
          imageSource={require('../../assets/forest.jpg')}
        />

        <ImageDetail 
          title="Beach" 
          subtitle="Image score - 7"
          imageSource={require('../../assets/beach.jpg')}
        />

        <ImageDetail 
          title="Mountain" 
          subtitle="Image score - 4"
          imageSource={require('../../assets/mountain.jpg')}
        />
    </View>
  );
}

const style = StyleSheet.create({

});

export default ImageScreen