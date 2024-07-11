import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import InputSearch from '../components/InputSearch'
import { style } from '../styles/style'
import { TouchableOpacity } from 'react-native'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { color } from '../styles/colors'

function RechercheView({ navigation }) {
  const icons = [
    {IconType:Entypo, iconName:'home', name:'accueil', route:navigation.navigate('accueil')},
    {IconType:Entypo, iconName:'magnifying-glass', name:'search', route:navigation.navigate('search')},
    {IconType:FontAwesome, iconName:'shopping-basket', name:'commande', route:navigation.navigate('commande')},
    {IconType:Entypo, iconName:'user', name:'profile', route:navigation.navigate('profile')},
  ]
  return (
  <View style={[style.container]}>
      <View style={{
        width: '100%',
        display: 'flex',
        flexDirection:'row',
        backgroundColor: color.light,
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
      <View style={{
        height: '73%',
        paddingVertical:10,
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>

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
                backgroundColor:'search' === item.name ? color.white:'',
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

export default RechercheView
