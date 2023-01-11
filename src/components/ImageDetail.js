import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({title, subtitle, imageSource}) => {
    return (
      <View>
        <Image source={imageSource} />
        { title ? <Text>{ title }</Text> : '' }
        { subtitle ? <Text>{ subtitle }</Text> : '' }
      </View>
    )
}

const style = StyleSheet.create({

});

export default ImageDetail