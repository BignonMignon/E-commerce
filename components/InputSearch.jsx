import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { color } from '../styles/colors'

function InputSearch({...props}) {
  return (
    <View style={{
        width: '100%',
        height: 55,
        display: 'flex',
        alignItems: 'center',
        flexDirection:'row',
        gap: 20,
        paddingHorizontal: 10,
    }}>
        <TextInput style={{
            backgroundColor:'#ffffffa0',
            width: '100%',
            height:'80%',
            borderRadius: 50,
            paddingLeft: 20,
            paddingRight: 45,
            fontSize: 14,
          }}
        {...props}
        />
        <TouchableOpacity style={[{
            width:35,
            height: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'row',
            backgroundColor:color.white,
            borderRadius: 50,
            position: 'absolute',
            right:15,
        }]}>
            <Entypo name='magnifying-glass' size={22} color={color.black} />
        </TouchableOpacity>
    </View>
  )
}

export default InputSearch
