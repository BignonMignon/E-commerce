import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../styles/style'
import Header from '../components/Header'
import { color } from '../styles/colors'
import { Entypo, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import MultiPub from '../components/MultiPub'

function HomeView({navigation}) {
    const CardTopTen = ({data}) => {
        return (
            <View style={{
                width: 200,
                height: '80%',
                margin: 5,
                borderRadius: 10,
                color:'white',
            }}>
                <View style={{
                    height:'15%',
                    display:'flex',
                    flexDirection:'row',
                    paddingHorizontal:8,
                    alignItems:'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    top:'20%',
                }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 700 }}>{data.name}</Text>
                    <TouchableOpacity style={{
                        width:32,
                        height:32,
                        borderRadius:50,
                        backgroundColor:'red',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Entypo size={22} name='heart'  color='white' />
                    </TouchableOpacity>
                </View>
                <Image
                    source={data.img}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        zIndex:-1,
                        borderColor: color.grey,
                        borderWidth:2,
                    }}
                />
                <View style={{
                    height:'15%',
                    display:'flex',
                    flexDirection:'row',
                    paddingHorizontal:8,
                    alignItems:'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    bottom:'25%'
                }}>
                    <Text style={{fontSize:18, color:'white',}}>
                        <FontAwesome name='dollar' size={18} color='white' />
                        {' '+data.price}
                    </Text>
                    <TouchableOpacity style={{
                        width:40,
                        height:40,
                        borderRadius:50,
                        backgroundColor:color.grey,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Fontisto size={20} name='shopping-basket-add' color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const Profile = ({ data }) => {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        borderColor: color.primary,
                        borderWidth:6,
                        width: 65,
                        height: 65,
                        marginHorizontal: 5,
                        borderRadius: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={data.img}
                        style={{
                            width:'100%',
                            height: '100%',
                            borderRadius:50,
                        }}
                    />
                </TouchableOpacity>
                <Text style={[style.textCenter]}>{ data.name}</Text>
            </View>
        )
    }
    const CardPub = ({data}) => {
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                justifyContent: 'space-between',
                padding:5,
                height: 150,
                width: '96%',
                marginBottom:10,
                borderColor: color.grey,
                borderWidth: 2,
                marginHorizontal:'2%',
                borderRadius:10,
            }}>
                <View style={{
                    width:'48%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingVertical:10
                }}>
                    <Text>{data.name}</Text>
                    <Text>
                        <FontAwesome name='dollar' size={16} />
                        {' ' + data.price}
                    </Text>
                </View>
                <View style={{
                    width:'48%',
                    height:'100%',
                }}>
                    <Image
                        source={data.img}
                        style={{
                            width:'100%',
                            height:'100%',
                            borderRadius:10,
                        }}
                    />
                </View>
            </View>
        )
    }
    const data = [
        {id:1, name:'Test 1', img:require('../assets/public/(1).jpg'), price:200000}, 
        {id:2, name:'Test 2', img:require('../assets/public/sary(2).jpg'), price:200000}, 
        { id: 3, name: 'Test 3', img: require('../assets/public/sary(3).jpg'), price:200000 },
        { id: 4, name: 'Test 4', img: require('../assets/public/sary(4).jpg'), price:200000 }
    ]
    const account = [
        { id: 3, name: 'Test 1', img: require('../assets/public/sary(2).jpg') },
        {id:4, name:'Test 4', img:require('../assets/public/sary(1).jpg')}, 
        {id:5, name:'Test 2', img:require('../assets/public/sary(4).jpg')}, 
        { id: 6, name: 'Test 3', img: require('../assets/public/sary(3).jpg') },
        { id: 1, name: 'Test 5', img: require('../assets/public/sary(5).jpg') },
    ]
    const icons = [
        {IconType:Entypo, iconName:'home', name:'accueil', route:navigation.navigate('accueil')},
        {IconType:Entypo, iconName:'magnifying-glass', name:'search', route:navigation.navigate('search')},
        {IconType:FontAwesome, iconName:'shopping-basket', name:'commande', route:navigation.navigate('commande')},
        {IconType:Entypo, iconName:'user', name:'profile', route:navigation.navigate('profile')},
    ]
    return (
        <View style={[style.container]}>
            <View style={{
                height:'90%'
            }}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    decelerationRate={0.8}
                >
                    <View style={{
                    width:'100%',
                    height:80,
                    backgroundColor: color.trans,
                    display:'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal:10,
                    justifyContent:'space-between',
                    position:'absolute',
                    zIndex: 99,
                }}>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: 800,
                        color: color.black,
                    }}>E-Mode</Text>
                    <View style={[style.row,{}]}>
                        <TouchableOpacity style={{
                            backgroundColor:color.light,
                            width:45,
                            height:45,
                            display:'flex',
                            alignItems: 'center',
                            justifyContent:'center',
                            borderRadius:50,
                        }}
                        onPress={()=>navigation.navigate('search')}
                        >
                            <Entypo name='magnifying-glass' color={'#000000e0'} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor:color.light,
                            width:45,
                            height:45,
                            display:'flex',
                            alignItems: 'center',
                            justifyContent:'center',
                            borderRadius:50,
                        }}
                        onPress={()=>navigation.navigate('commande')}>
                            <MaterialCommunityIcons name='cart' color={'#000000e0'} size={22} />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <Header /> 
                    <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0.8}
                        style={[{
                            maxHeight: 80,
                            marginTop: 15,
                        }]}
                    >
                        {
                            account.map((item)=><Profile key={item.id} data={item} />)
                        }
                    </ScrollView>
                    <View style={[
                        style.width,
                    {
                        height: 350,
                        marginVertical:10,
                    }]}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical:5,
                        }}>
                                <Text style={{ fontSize: 24, fontWeight:700 }}>Top 10</Text>
                                <TouchableOpacity
                                    style={{
                                        width:35,
                                        height: 35,
                                        backgroundColor: color.grey,
                                        borderRadius: 50,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent:'center',
                                    }}
                                >
                                    <Entypo name='eye' size={22} color='#ffffffd0' />
                                </TouchableOpacity>
                        </View>
                        
                        <ScrollView 
                            horizontal
                            decelerationRate={0.8}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                data.map((item)=><CardTopTen key={item.id} data={item} />)
                            }
                            
                        </ScrollView>
                    </View>
                    {/* {
                        data.map((item)=><CardPub data={item} key={item.id} />)
                    } */}
                    {/* {
                        data.map((item) =><PubCard key={item.id} data={item} />)
                    } */}
                        
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'flex-start',
                        flexWrap: 'wrap',
                        gap: 5,
                        marginBottom:10,
                    }}>
                        {
                            data.map((item) =><MultiPub key={item.id} data={item} />)
                        }
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
                backgroundColor:'accueil' === item.name ? color.white:'',
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

export default HomeView
