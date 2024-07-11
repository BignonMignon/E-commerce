import React from 'react'
import { Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { style } from '../styles/style'
import { color } from '../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

function ArticleOne({ route, navigation }) {
    const { data } = route.params;
    const addCart = async () => {
        let items = await AsyncStorage.getItem('Commandes')
            items = JSON.parse(items)
            if (items) {
                let Array = items;
                Array.push(data)
                try {
                    await AsyncStorage.setItem('Commandes', JSON.stringify(Array))
                    ToastAndroid.show(
                        'Commande ajouter avec succèe !',
                        ToastAndroid.SHORT,
                    );
                    navigation.navigate('home');
                } catch (error) {
                    console.log(error); 
                }
            }else {
                let array = [];
                array.push(data)
                try {
                    await AsyncStorage.setItem('Commandes', JSON.stringify(array))
                    ToastAndroid.show(
                        'Commande ajouter avec succèe !',
                        ToastAndroid.SHORT,
                    );
                    navigation.navigate('home');
                } catch (error) {
                    console.log(error); 
                }
            }
    }
  return (
    <View style={[style.container, {backgroundColor:'#ff007b5d'}]}>
          <View style={{
              height: '65%',
              width: '95%',
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              backgroundColor: '#ffffffaf',
              borderRadius: 40,
              margin: '2.5%'
          }}>
                <TouchableOpacity style={{
                    width:40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.white,
                    borderRadius: 8,
                    position: 'absolute',
                    top: '5%',
                    left:'5%',
                    zIndex:1
                }} onPress={()=>navigation.goBack()}>
                    <Entypo name='chevron-left' size={24} color={color.black} />
                </TouchableOpacity>
              <Image
                  source={data.img}
                  style={{
                      height: '98%',
                      width: '97%',
                      borderRadius: 40,
                      zIndex:-1,
                  }}
              />
              <View style={{
                  width:'96%',
                  height: '97%',
                  position: 'absolute',
                  backgroundColor:'#00000020',
                  borderRadius: 40,
              }}></View>
          </View>
          <View style={{
              display: 'flex',
              flexDirection:'column',
              height: '23%',
              paddingVertical: 8,
              paddingHorizontal: 20,
              gap:10
          }}>
                    <View style={{
                        width:'100%', 
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between', 
                        alignItems:'center'
                    }}>
                        <Text style={{
                            fontSize:28, 
                            fontWeight:700, 
                            color: color.black
                        }}>{data.name}</Text>
                        <View style={{
                            width:40, 
                            height:40, 
                            backgroundColor:'#ffffffaf',
                            display:'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:50,
                        }}>
                            <Ionicons name='link-outline' size={18} />
                        </View>
                    </View>
                    <View style={{
                        width:'100%', 
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between', 
                        alignItems:'center'
                    }}>
                        <Text style={{
                            fontSize:28, 
                            fontWeight:700, 
                            color: color.black
                        }}>{data.price}</Text>
                        <View style={{
                            width:40, 
                            height:40, 
                            backgroundColor:'#ffffffaf',
                            display:'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:50,
                        }}>
                            <FontAwesome name='dollar' size={18} />
                        </View>
                    </View>
                    {data.categ === 'bague' && <Text style={{
                        fontSize: 14,
                        width: '100%',
                        textAlign: 'center',
                        fontWeight: 500,
                        color: color.black
                    }}>{data.desc[0]}</Text>}
                    {data.categ==='bague' && <Text style={{
                        fontSize:14, 
                        width:'100%', 
                        textAlign:'center', 
                        fontWeight:500, 
                        color:color.black
                        }}>{ data.desc[1] }</Text>}
          </View>
          <TouchableOpacity style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: color.primary,
              height: 55,
              borderRadius: 50,
              marginHorizontal:'10%'
          }}>
              <Text onPress={addCart} style={{fontSize:19, fontWeight:700, color:color.white}}>Commander</Text>
          </TouchableOpacity>
    </View>
  )
}

export default ArticleOne
