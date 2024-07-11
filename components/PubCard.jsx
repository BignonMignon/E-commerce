import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { color } from '../styles/colors';

const PubCard = ({data})=> {
    return (
        <View style={{
            marginVertical:0.5,
            height: 600,
            backgroundColor: color.light,
        }}>
            <View style={{
                height:'20%',
                width:'100%',
                display:'flex',
                flexDirection:'column',
            }}>
                    <View style={{
                        width: '100%',
                        height: '50%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        alignItems:'center',
                    }}>
                        <Image
                            source={data.img}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: color.primary
                            }}
                        />
                        <MaterialCommunityIcons name='close' size={25} />
                </View>
                <View style={{ width: '100%', minHeight: '50%', paddingHorizontal:10,}}>
                    <Text>{data.name}</Text>
                </View>
            </View>
            <Image source={data.img} style={{
                height:'70%',
                width:'100%',
            }} />
            <View style={{
                height:'10%',
                width:'100%',
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems:'center',
            }}>
                <TouchableOpacity style={{
                    width: '65%',
                    height: '70%',
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.grey,
                    borderRadius: 10,
                    gap:25,
                }}>
                    <Text style={{fontSize:20, fontWeight:700}}>
                        <FontAwesome name='dollar' size={20} />
                        {data.price}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '20%',
                    height: '70%',
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.grey,
                    borderRadius: 10,
                    gap:25,
                }}>
                    <MaterialCommunityIcons name='cart-variant' size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PubCard;
