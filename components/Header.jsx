import React from 'react'
import { Image, View, } from 'react-native'
import { color } from '../styles/colors'

function Header({}) {
    return (
    <View style={{
        width:'100%',
        height:400,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    }}>
            <Image
                source={require('../assets/public/fast.jpeg')}
                style={{
                    width: '100%',
                    height:'100%',
                    borderBottomLeftRadius: 60,
                    borderBottomRightRadius: 60,
                    zIndex:-1
                }}
            />
           
    </View>
    
  )
}

export default Header
