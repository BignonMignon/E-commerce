import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { color } from '../styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

function MultiPub({data}) {
  return (
        <View style={{
            width: '48%',
            height:250,
            padding: 6,
            backgroundColor:color.light,
            borderRadius: 10,
            marginHorizontal: 2,
            marginTop:5,
      }}>
          <Entypo name='heart-outlined' style={{
              position: 'absolute',
              right: 15,
              top: 15,
              zIndex: 5,
              fontSize:22,
          }} />
            <Image
                source={data.img}
                style={{
                    width: '100%',
                    height: '80%',
                    borderRadius: 10,
                }}
          />
          <View style={{
              display: 'flex',
              marginTop: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '20%',
          }}>
            <View style={{
                display: 'flex',
                marginTop:2,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 500
                }}>{data.name}</Text>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 400
                }}>{data.price}</Text>
              </View>
              <TouchableOpacity style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  borderRadius: 50,
                  backgroundColor: color.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>
                  <Text style={{color:color.white, fontWeight:800}}>10</Text>
              </TouchableOpacity>
          </View>
        </View>
  )
}

export default MultiPub
