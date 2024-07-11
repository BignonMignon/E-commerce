import React from 'react'
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { style } from '../styles/style'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { color } from '../styles/colors'

function CommandeView({navigation}) {
    const icons = [
      {IconType:Entypo, iconName:'home', name:'accueil', route:navigation.navigate('accueil')},
      {IconType:Entypo, iconName:'magnifying-glass', name:'search', route:navigation.navigate('search')},
      {IconType:FontAwesome, iconName:'shopping-basket', name:'commande', route:navigation.navigate('commande')},
      {IconType:Entypo, iconName:'user', name:'profile', route:navigation.navigate('profile')},
    ]
  return (
    <View style={style.container}>
      <View style={{
        width: '100%',
        display: 'flex',
        flexDirection:'row',
        backgroundColor: color.light,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10
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
          <Image
            source={require('../assets/public/sary(1).jpg')}
            style={{
              width:50,
              height: 50,
              borderRadius:50,
            }}
          />
        </View>
      </View>
      <View style={{
        height: '80%',
        paddingTop: 10,
        // backgroundColor:'red'
      }}>
        <ScrollView>
          <View style={{
            width: '96%',
            marginLeft:'2%',
            marginRight: '2%',
            minHeight: 120,
            borderRadius: 5,
            backgroundColor: color.light,
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom:5,
          }}>
            <Image
              source={require('../assets/public/sary(5).jpg')}
              style={{
                width: '25%',
                height: '100%',
                borderRadius:5,
              }}
            />
            <View style={{
              width: '75%',
              height:'100%',
              paddingLeft: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent:'space-between'
            }}>
              <View style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'flex-start'
              }}>
                <View>
                  <Text>Name</Text>
                  <Text>Desc</Text>
                </View>
                
                <Text>Prix</Text>
              </View>
              <View style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'flex-end'
              }}>
                <FontAwesome name='check-square' size={25} color={color.success} />
                <Text style={{
                  fontSize:16,
                  fontWeight: 700,
                }}>-  1  +</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{
          width:'90%',
          height: 55,
          backgroundColor: color.light,
          position: 'absolute',
          bottom: 5,
          zIndex: 99,
          display: 'flex',
          flexDirection:'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: 50,
          left:'5%',
          right:'5%',
      }}>
          {icons.map((item) => <TouchableOpacity
            key={item.name}
            style={{
                width:46,
                height:46,
                borderRadius:50,
                backgroundColor:'commande' === item.name ? color.white:'',
                display:'flex',
                alignItems:'center',
                justifyContent: 'center',
                position: 'relative',
            }}
            onPress={()=>item.route}
          ><item.IconType name={item.iconName} size={20} /></TouchableOpacity>)}
      </View>
    </View>
  )
}

export default CommandeView
