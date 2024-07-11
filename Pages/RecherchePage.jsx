import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../styles/style'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { color } from '../styles/colors'
import InputSearch from '../components/InputSearch'
import { data, talons } from '../data'

function RecherchePage({ navigation }) {
    const [active, setActive] = useState('')
    console.log(active);
  return (
    <View style={style.container}><View style={{
        width: '100%',
        display: 'flex',
        flexDirection:'row',
        backgroundColor: '#ff007b5d',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal:10
      }}>
        <View style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems:'center',
          flexDirection: 'row',
          paddingVertical:8
        }}>
          <TouchableOpacity style={{
            width:40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color.white,
            borderRadius: 8,
          }} onPress={()=>navigation.navigate('accueil')}>
            <Entypo name='chevron-left' size={24} color={color.black} />
          </TouchableOpacity>
          <Text style={{
            fontSize: 28,
            fontWeight: '800',
            marginRight:20
          }}>Recherche</Text>
        </View>
        <InputSearch />
      </View>
          <View
            style={{
                  height: 50,
                  padding: 5,
                  
            }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.8}
            >
                {data.map((item, i)=><TouchableOpacity key={i} style={{
                      backgroundColor: active===item ? '#00ffff8b':'',
                      borderColor: active===item ? '':color.light,
                      borderWidth: active===item ? 0:2,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 20,
                      borderRadius: 20,
                      marginLeft:5,
                }} onPress={()=>setActive(item)}>
                    <Text>{item}</Text>
                </TouchableOpacity>)}
        </ScrollView>
          </View>
      <View style={{
        height: '67%',
        paddingVertical: 10,
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap:'wrap',
            }}>
                {talons.map((item) => <View
                    key={item.name}
                    style={{
                    width: '98%',
                    height:130,
                    backgroundColor: '#0000002f',
                    borderRadius: 10,
                    marginBottom:10,
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems:'center',
                    paddingHorizontal:10,
                    paddingVertical:10,
                }}>
                    <Image
                        source={item.img}
                        style={{
                            width: '40%',
                            height: '98%',
                            borderRadius: 10
                        }}
                    />
                    <View style={{
                        height: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width:'56%'
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 700, }}>{item.name}</Text>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 700, }}>{item.price}</Text>
                            <TouchableOpacity
                                style={{
                                width:40,
                                height: 40,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor:'#ffffff5f',
                                borderRadius:8,
                            }}
                            >
                                <FontAwesome name='shopping-cart' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>)}
            </View>
        </ScrollView>
      </View>
        <View style={{
        width:'98%',
        height: 55,
        backgroundColor: '#ff007b5d',
        position: 'absolute',
        bottom: 3,
        zIndex: 99,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        left:'1%',
        right:'1%',
        }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('home')}
                style={{
                    width: 46,
                    height: 46,
                    borderRadius: 50,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <Entypo name='home' size={20} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('search')}
                style={{
                    width: 46,
                    height: 46,
                    borderRadius: 50,
                    display:'flex',
                    backgroundColor: color.primary,
                    alignItems:'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <Entypo name='magnifying-glass' size={20} color={color.white} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('commande')}
                style={{
                    width: 46,
                    height: 46,
                    borderRadius: 50,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <FontAwesome name='shopping-basket' size={20} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('profile')}
                style={{
                    width: 46,
                    height: 46,
                    borderRadius: 50,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <Entypo name='user' size={20} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default RecherchePage
