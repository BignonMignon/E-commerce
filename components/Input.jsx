import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { style } from '../styles/style'
import { Entypo } from '@expo/vector-icons'
import { color } from '../styles/colors'

const Input = ({
    IconType=Entypo,
    iconName='email',
    password,
    error,
    rounded,
    onFocus = ()=>{},
    ...props
}) => {
    const [hidePwd, setHidePwd] = useState(password)
    const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={{marginBottom:8}}>
        <View style={[style.row,style.center, {
            borderWidth:0.5, 
            height:55, 
            paddingHorizontal:10,
            borderColor:error?color.error:isFocused?color.primary:color.trans,
            backgroundColor:color.light,
            borderRadius:rounded,
        }]}>
            <IconType name={iconName} size={22} color={error?color.error:isFocused?color.primary:color.grey} />
            <TextInput
                secureTextEntry={hidePwd}
                onFocus={()=>{
                    onFocus();
                    setIsFocused(true)
                }}
                onBlur={()=>{
                    setIsFocused(false)
                }}
                {...props}
                style={{flex:1, fontSize:16, marginLeft:10}} 
            />
            {
                password && <Entypo
                    size={22}
                    name={hidePwd?'eye-with-line':'eye'}
                    onPress={()=>{
                      setHidePwd(!hidePwd)
                    }}
                    color={error?color.error:isFocused?color.primary:color.grey}
                />
            }
        </View>
        <Text style={{color:color.error, fontSize:13, marginLeft:10}}>{error}</Text>
    </View>
  )
}

export default Input