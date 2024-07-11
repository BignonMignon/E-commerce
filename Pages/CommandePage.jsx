import React, { useEffect, useState } from 'react'
import { Image, Text, ToastAndroid, TouchableOpacity, View, ScrollView} from 'react-native'
import { style } from '../styles/style'
import { Entypo, FontAwesome, } from '@expo/vector-icons'
import { color } from '../styles/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Formulaire from './Formulaire'
import Loader from '../components/Loader'
import Register from './Register'

function CommandePage({ navigation }) {
    const [nb, setNb] = useState(1)
    const [user, setUser] = useState(null)
    const [prixtotale, setPrixTotale] = useState(null)
    let frais = 1000
    const [totale, setTotale] = useState((prixtotale) + frais)
    const [title, setTitle] = useState('')
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [loanding, setLoanding] = useState(false)
    const [commandes, setCommande] = useState([])
    const [element, setElement] = useState([])
    const [showRegister, setShowRegister] = useState(false)

    const handleClick = () => {
        if (user !==null) {
            setOpen(true);
            setMessage('Entrer le numero pour le paiement.')
            setTitle('Numero paiement.')
        } else {
            setShowRegister(true)
        }
    }
    const acceptRegister = () => {
        setShowRegister(false);
        setLoanding(true)
        setTimeout(() => {
            setLoanding(false)
            setOpen(true);
            setMessage(`Entrer votre code secret pour confirmer le paiement de ${totale} la totale des prix de votre commande.`)
            setTitle('Code secret.')
        }, 3000);
    }
    const handelAccept = async () => {
        if (title==='Numero paiement.') {
            setOpen(false);
            setLoanding(true)
            setTimeout(() => {
                setLoanding(false)
                setOpen(true);
                setMessage(`Entrer votre code secret pour confirmer le paiement de ${totale} la totale des prix de votre commande.`)
                setTitle('Code secret.')
            }, 3000);
        } else {
            let notification = await AsyncStorage.getItem('Notifications')
            notification = JSON.parse(notification)
            if (notification) {
                let Array = notification;
                const now = new Date()
                const date = now.getDate() +'/'+ (now.getMonth()+1) +'/'+now.getFullYear() + '  '+ now.getHours()+':'+now.getMinutes()
                Array.push({msg:`Vous avez acheter ${element.join(', ')} chez nous et la livraisons est en chemin vas bientot arriver.`, date:date})
                try {
                    await AsyncStorage.setItem('Notifications', JSON.stringify(Array))
                    await AsyncStorage.removeItem('Commandes')
                    setElement([])
                    setCommande([])
                    ToastAndroid.show(
                        'Paiement effectuer avec succèe !',
                        ToastAndroid.SHORT,
                    );
                    setOpen(false);
                    navigation.navigate('home');
                } catch (error) {
                    console.log(error); 
                }
            }else {
                let array = [];
                const now = new Date()
                const date = now.getDate() +'/'+ (now.getMonth()+1) +'/'+now.getFullYear() + '  '+ now.getHours()+':'+now.getMinutes()
                array.push({msg:`Vous avez acheter ${element.join(', ')} chez nous et la livraisons est en chemin vas bientot arriver.`, date:date})
                try {
                    await AsyncStorage.setItem('Notifications', JSON.stringify(array))
                    await AsyncStorage.removeItem('Commandes')
                    setElement([])
                    setCommande([])
                    setTimeout(() => {
                        ToastAndroid.show(
                            'Paiement effectuer avec succèe !',
                            ToastAndroid.SHORT,
                        );
                        setOpen(false);
                        navigation.navigate('home');
                    }, 2000);
                } catch (error) {
                    console.log(error); 
                }
            }
        }
    }
    const handelPlus = () => {
        setNb(nb+1)
    }
    const handelMoins = () => {
        if (nb>1) {
            setNb(nb-1)
        }
    }
     useEffect(() => {
        const unscrube = navigation.addListener('focus', () => {
            getDataFromDB()
            getCommandeDB()
        })
        return unscrube
    }, [navigation])
    // Recuperation notification 
    const getDataFromDB = async () => {
        let items = await AsyncStorage.getItem('Users')
        items = JSON.parse(items)
        if (items) {
            setUser(items)
        }
    }
    const getCommandeDB = async () => {
        let items = await AsyncStorage.getItem('Commandes')
        items = JSON.parse(items)
        if (items) {
            setCommande(items);
            let total = 0;
            const data = []
            items.forEach(el => {
                total += el.price
                data.push(el.name)
            });
            setPrixTotale(total)
            setTotale(total + frais)
            setElement(data);
        }
    }
  return (
      <View style={style.container}>
        <Loader visible={loanding} />
          <View style={{
              backgroundColor: '#FEFEFE',
              height: 60,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              justifyContent:'space-between'
          }}>
                <TouchableOpacity style={{
                    width:40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.white,
                    borderRadius: 8,
                }} onPress={()=>navigation.goBack()}>
                    <Entypo name='chevron-left' size={24} color={color.black} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width:45,
                    height: 45,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.white,
                    borderRadius: 50,
                }} onPress={()=>navigation.navigate('profile')}>
                    <Entypo name='user' size={20} color={color.black} />
                </TouchableOpacity>
          </View>
          <View style={{
              height: '100%',
              paddingVertical: 150,
              paddingBottom: 70,
              backgroundColor:'#87CEFA'
          }}>
              {totale!==1000?<ScrollView>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap:'wrap',
                    }}>
                        {commandes.map((item) => <View
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
                            marginHorizontal:'1%'
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
                                <View style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{ fontSize: 22, fontWeight: 700, width:160 }}>{item.name}</Text>
                                    {nb > 0 ? <FontAwesome name='check-square' size={22} color={color.success} />:
                                    <FontAwesome name='window-close' size={22} color={color.error} />}
                                </View>
                                <View style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: 700, }}>{item.price}</Text>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 5,
                                       alignItems:'center'
                                    }}>
                                        <TouchableOpacity style={{
                                            width:20,
                                            height:20,
                                            display:'flex',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            backgroundColor:color.primary,
                                            borderRadius:5
                                        }} onPress={handelMoins}>
                                            <Text style={{
                                                fontWeight:800
                                            }}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight:800
                                        }}>{ nb }</Text>
                                        <TouchableOpacity style={{
                                            width:20,
                                            height:20,
                                            display:'flex',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            backgroundColor:color.primary,
                                            borderRadius:5
                                        }} onPress={handelPlus}>
                                            <Text style={{
                                                fontWeight:800
                                            }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>)}
                  </View>
                  <View style={{
                      padding: '5%',
                      paddingBottom:55,
                  }}>
                      <View style={{
                          marginBottom:10
                      }}> 
                          <Text style={{
                              fontSize: 19,
                              fontWeight:700
                          }}>Information</Text>
                          <View style={{
                            display:'flex', 
                            flexDirection:'row', 
                            justifyContent:'space-between', 
                              alignItems: 'center',
                              borderTopColor: 'black',
                            borderTopWidth:1
                          }}>
                              <Text style={{ fontSize: 16, fontWeight: 700 }}>Prix totale </Text>
                              <Text style={{ fontSize: 17, fontWeight: 800 }}>{prixtotale}</Text>
                          </View>
                          <View style={{
                            display:'flex', 
                            flexDirection:'row', 
                            justifyContent:'space-between', 
                            alignItems:'center'
                          }}>
                              <Text style={{ fontSize: 16, fontWeight: 700 }}>Frais </Text>
                              <Text style={{ fontSize: 17, fontWeight: 800 }}>{frais}</Text>
                          </View>
                          <View style={{
                            display:'flex', 
                            flexDirection:'row', 
                            justifyContent:'space-between', 
                            alignItems:'center'
                          }}>
                              <Text style={{ fontSize: 16, fontWeight: 700 }}>Totale </Text>
                              <Text style={{ fontSize: 17, fontWeight: 800 }}>{totale}</Text>
                          </View>
                      </View>
                      <TouchableOpacity style={{
                          width: '80%',
                          backgroundColor: color.primary,
                          borderRadius: 60,
                          height: 50,
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginHorizontal:'10%'
                      }} onPress={handleClick}>
                          <Text style={{fontWeight:800, fontSize:18, color:color.white}}>Acheter maintenant</Text>
                      </TouchableOpacity>
                  </View>
              </ScrollView> : <Text style={{
                  width: '100%',
                  textAlign:'center',
                  fontSize:18,
                  marginTop:20,
              }}>Auccun commande enregistrer.</Text>}
          </View>
          <View style={{
            width:'70%',
            height: 55,
            backgroundColor: '#ffffffaf',
            position: 'absolute',
            bottom: 3,
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
                      backgroundColor: color.primary,
                      justifyContent: 'center',
                      position: 'relative',
                  }}
              >
                  <FontAwesome name='shopping-basket' size={20} color={color.white} />
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
          <Formulaire
              visible={open}
              title={title}
              message={message}
              annuler={() => setOpen(false)}
              accept={handelAccept}
          />
          <Register
              visible={showRegister}
              annuler={() => setShowRegister(false)}
              accept={acceptRegister}
          />
    </View>
  )
}

export default CommandePage
