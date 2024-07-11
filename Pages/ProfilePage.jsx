import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../styles/style'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { color } from '../styles/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DeleteDialog from '../components/DeleteDialog'

function ProfilePage({ navigation }) {
    const [nbNotif, setNbNotif] = useState(0)
    const [notif, setNotif] = useState([])
    const [delDialog, setDelDialog] = useState(false)
    const [msg, setMsg] = useState('')
    const [contenant, setContenant] = useState('')
    useEffect(() => {
        const unscrube = navigation.addListener('focus', () => {
            getDataFromDB()
        })
        return unscrube
    }, [navigation])
    // Recuperation notification 
    const getDataFromDB = async () => {
        let items = await AsyncStorage.getItem('Notifications')
        items = JSON.parse(items)
        if (items) {
            setNbNotif(items.length)
            setNotif(items.reverse())
        }
    }
    const handlePressLong = ({data}) => {
        setDelDialog(true)
        // setContenant(data.msg)
        console.log(data);
    }
  return (
      <View style={[style.container,{backgroundColor:'#87CEFA'}]}>
          <View style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical:10,
          }}>
              <View style={{
                width: 200,
                height:200,
                borderRadius:100,
                backgroundColor:'#ffffffa0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image
                    source={require('../assets/public/fast.jpeg')}
                    style={{
                        width:'90%',
                        height: '90%',
                        borderRadius:100,
                    }}
                />
            </View>
          </View>
          
          <View style={{
              borderRadius: 20,
              height: '58%',
              width: '95%',
              marginHorizontal: '2.5%',
              backgroundColor: 'FEFEFE',
              padding:10,
          }}>
              <View style={{
                  height: 60,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  backgroundColor: 'FEFEFE',
                  borderRadius:10
              }}>
                  <Text>
                      <Entypo name='bell' size={25} />
                      <Text style={{ fontSize: 25, fontWeight: 700, paddingHorizontal: 5}}>Notification</Text>
                  </Text>
                  <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:35,
                    height: 35,
                    borderRadius: 50,
                    backgroundColor:color.error
                  }}>
                      <Text style={{ fontSize: 18, color: color.white }}>{ nbNotif }</Text>
                  </View>
              </View>
              <View style={{marginVertical:10,  height: 318,}}>
                  <ScrollView
                      showsVerticalScrollIndicator={false}
                      decelerationRate={0.8}
                  >
                      {notif.map((item, i)=><TouchableOpacity key={i} style={{
                        backgroundColor: '#00000050',
                        padding: 10,
                        borderRadius: 10,
                        marginBottom: 1,
                    }} onLongPress={()=>handlePressLong(item)}>
                          <Text style={{ color: color.black, fontSize: 15 }}>
                              <Text style={{
                                  fontWeight:800,
                              }}>{item.date + ', '}</Text>{item.msg}</Text>
                    </TouchableOpacity>)}
                  </ScrollView>
              </View>
          </View>
    
          <View style={{
            width:'70%',
            height: 55,
            backgroundColor: '#ffffffe0',
            position: 'absolute',
            bottom: 5,
            zIndex: 99,
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 10,
            left:'15%',
            right:'15%',
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
              {/* <TouchableOpacity
                  onPress={() => navigation.navigate('search')}
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
                  <Entypo name='magnifying-glass' size={20} />
              </TouchableOpacity> */}
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
                      backgroundColor: color.primary,
                      justifyContent: 'center',
                      position: 'relative',
                  }}
              >
                  <Entypo name='user' size={20} color={color.white} />
              </TouchableOpacity>
          </View>
          <DeleteDialog
              visible={delDialog}
              btntitle={'Suppression'}
              btncolor={color.error}
              textcolor={'white'}
              message={msg}
              annuler={()=>setDelDialog(false)}
          />
    </View>
  )
}

export default ProfilePage
