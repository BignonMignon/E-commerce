import React from 'react'
import { style } from '../styles/style'
import { TouchableOpacity, View } from 'react-native'
import { Entypo, FontAwesome } from '@expo/vector-icons'

function Profile({navigation}) {
    const icons = [
      {IconType:Entypo, iconName:'home', name:'accueil', route:navigation.navigate('accueil')},
      {IconType:Entypo, iconName:'magnifying-glass', name:'search', route:navigation.navigate('search')},
      {IconType:FontAwesome, iconName:'shopping-basket', name:'commande', route:navigation.navigate('commande')},
      {IconType:Entypo, iconName:'user', name:'profile', route:navigation.navigate('profile')},
    ]
  return (
    <View style={style.container}>
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
                backgroundColor:'profile' === item.name ? color.white:'',
                display:'flex',
                alignItems:'center',
                justifyContent: 'center',
                position: 'relative',
            }}
            onPress={()=>item.route}
          ><Entypo name={'map'} size={20} /></TouchableOpacity>)}
      </View>
    </View>
  )
}

export default Profile
