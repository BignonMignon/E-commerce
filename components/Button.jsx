import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from '../styles/style'

const Button = ({
    title,
    color,
    textColor,
    rounded,
    onPress = ()=>{}
}) => {
  return (
    <View>
        <TouchableOpacity
            onPress={onPress}
            style={[style.row, style.center, {
                backgroundColor:color,
                height:40,
                borderRadius: rounded,
                marginBottom:10,
            }
        ]}>
            <Text style={{
                color:textColor,
                fontSize:18,
                fontWeight:600,
            }}>{title}</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Button