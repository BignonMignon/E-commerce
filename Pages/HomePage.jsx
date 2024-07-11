import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import { style } from '../styles/style'
import { Entypo, FontAwesome, Fontisto, Foundation } from '@expo/vector-icons'
import { color } from '../styles/colors'
import { bagues, chaussuresport, coliers, lunettes, pantalons, robemaries, robesoires, talons, topten } from '../data'

function HomePage({ navigation }) {
    const onClick = (data) => {
        navigation.navigate('article', {data})
    }
  return (
    <View style={[style.container,{backgroundColor:'#00000040'}]}>
        <View style={{
            height: '100%',
            position: 'relative',
            backgroundColor:'#ff007b5d',
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                decelerationRate={0.8}
              >
               
                  {/* Top ten */}
                <View style={{
                    backgroundColor: '#87CEFA',
                    minHeight: 250,
                    padding:10,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 5,
                        alignItems: 'center',
                        paddingVertical:5
                    }}>
                        <Text style={{
                        fontSize:50,
                        fontWeight: 700,
                        paddingVertical: 5,
                        paddingHorizontal:20,
                        // backgroundColor: color.primary,
                         color:color.white,
                        borderRadius:10,
                        }}>O'FAST FOOD</Text>
                       
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 5,
                        alignItems: 'center',
                        paddingVertical:5
                    }}>
                        <Text style={{
                        fontSize:22,
                        fontWeight: 200,
                        paddingVertical: 5,
                        paddingHorizontal:20,
                        // backgroundColor: color.primary,
                         color:color.white,
                        borderRadius:10,
                        }}>Commandez votre plats chez nous...</Text>
                       
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0.8}
                    >
                        {topten.map((item, i) => <View
                        key={i}
                        style={{
                            width:220,
                            height: 300,
                            marginHorizontal: 5,
                            borderRadius: 10,
                            backgroundColor:'#6495ED',
                        }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    zIndex:-1,
                                }}
                                source={item.img}
                            />
                            <View style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                marginTop:5,
                            }}>
                                <View>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                    }}>{item.price}</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                    width:40,
                                    height: 40,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor:'#00000040',
                                    borderRadius:8,
                                }}
                                onPress={()=>onClick(item)}
                                >
                                    <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                </TouchableOpacity>
                            </View>
                        </View>)}
                    </ScrollView>
                  </View>
                  {/* Coliers */}
                <View style={{
                    minHeight: 400,
                    backgroundColor: '#B0C4DE',
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:22,color:color.white, fontWeight:800}}>Nos Pizzas</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap:'wrap',
                    }}>
                        {coliers.map((item) => <View
                            key={item.name}
                            style={{
                            width: '98%',
                            height:130,
                            backgroundColor: '#ffffffaf',
                            borderRadius: 10,
                            marginBottom:10,
                            display:'flex',
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            alignItems:'center',
                            paddingHorizontal:10,
                            paddingVertical:10,
                        }}>
                            <View style={{
                                height: '90%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width:'56%'
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>{item.name}</Text>
                                <View>
                                    {/* <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[0]}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[1]}</Text> */}
                                </View>
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
                                        backgroundColor:'#00000040',
                                        borderRadius:8,
                                    }}
                                    onPress={()=>onClick(item)}
                                    >
                                        <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image
                                source={item.img}
                                style={{
                                    width: '40%',
                                    height: '98%',
                                    borderRadius: 10
                                }}
                            />
                        </View>)}
                    </View>
                  </View>
                  {/* Robes maries */}
                <View style={{
                    minHeight: 400,
                    backgroundColor: '#ADD8E6',
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:22,color:color.white, fontWeight:800}}>Nos Genoises</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap:'wrap',
                    }}>
                        {robemaries.map((item) => <View
                            key={item.name}
                            style={{
                            width: '49%',
                            height: 250,
                            backgroundColor: '#ffffffaf',
                            borderRadius: 10,
                            marginBottom:10,
                        }}>
                            <Image
                                source={item.img}
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    borderTopLeftRadius:10,
                                    borderTopRightRadius:10,
                                }}
                            />
                            <Entypo
                                name='heart'
                                size={28}
                                style={{
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                    color:'red'
                                }}
                            />
                            <View style={{
                                position: 'absolute',
                                top: '65%',
                                width:'100%',
                                backgroundColor:'#00000040',
                                paddingHorizontal: 10,
                                paddingBottom:12
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 800,
                                }}>{ item.name }</Text>
                            </View>
                            <View style={{
                                height: '20%',
                                display: 'flex',
                                alignItems: "center",
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal:10,
                            }}>
                                <Text style={{fontSize:18, fontWeight:800}}>{item.price}</Text>
                                <TouchableOpacity
                                    style={{
                                    width:40,
                                    height: 40,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor:'#0000005f',
                                    borderRadius:8,
                                }}
                                onPress={()=>onClick(item)}
                                >
                                    <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                </TouchableOpacity>
                            </View>
                        </View>)}
                    </View>
                  </View>
                  {/* Bagues */}
                <View style={{
                    minHeight: 400,
                    backgroundColor: '#B0C4DE',
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:22,color:color.white, fontWeight:800}}>Nos salades</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap:'wrap',
                    }}>
                        {bagues.map((item) => <View
                            key={item.name}
                            style={{
                            width: '98%',
                            height:130,
                            backgroundColor: '#ffffffaf',
                            borderRadius: 10,
                            marginBottom:10,
                            display:'flex',
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            alignItems:'center',
                            paddingHorizontal:10,
                            paddingVertical:10,
                        }}>
                            <View style={{
                                height: '90%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width:'56%'
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>{item.name}</Text>
                                <View>
                                    <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[0]}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[1]}</Text>
                                </View>
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
                                        backgroundColor:'#00000040',
                                        borderRadius:8,
                                    }}
                                    onPress={()=>onClick(item)}
                                    >
                                        <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image
                                source={item.img}
                                style={{
                                    width: '40%',
                                    height: '98%',
                                    borderRadius: 10
                                }}
                            />
                        </View>)}
                    </View>
                  </View>
                  {/* robe soires */}
                <View style={{
                    minHeight: 400,
                    backgroundColor: '#ADD8E6',
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:22, fontWeight:800}}>Nos Tacos</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap:'wrap',
                    }}>
                        {robesoires.map((item) => <View
                            key={item.name}
                            style={{
                            width: '49%',
                            height: 250,
                            backgroundColor: '#ffffffaf',
                            borderRadius: 10,
                            marginBottom: 10,
                        }}>
                            <Image
                                source={item.img}
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    borderTopLeftRadius:10,
                                    borderTopRightRadius:10,
                                }}
                            />
                            <Entypo
                                name='heart'
                                size={28}
                                style={{
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                    color:'red'
                                }}
                            />
                            <View style={{
                                position: 'absolute',
                                top: '65%',
                                width:'100%',
                                backgroundColor:'#00000080',
                                paddingHorizontal: 10,
                                paddingBottom:13
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 800,
                                    color:color.white,
                                }}>{ item.name }</Text>
                            </View>
                            <View style={{
                                height: '20%',
                                display: 'flex',
                                alignItems: "center",
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal:10,
                            }}>
                                <Text style={{fontSize:18, fontWeight:800, color:color.black}}>{item.price}</Text>
                                <TouchableOpacity
                                    style={{
                                    width:40,
                                    height: 40,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor:'#0000005f',
                                    borderRadius:8,
                                }}
                                onPress={()=>onClick(item)}
                                >
                                    <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                </TouchableOpacity>
                            </View>
                        </View>)}
                    </View>
                  </View>
                  {/* Talon */}
                <View style={{
                    minHeight: 400,
                    backgroundColor: '#B0C4DE',
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:22, fontWeight:800}}>Nos pâtes</Text>
                    </View>
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
                            backgroundColor: '#ffffffaf',
                            borderRadius: 10,
                            marginBottom:10,
                            display:'flex',
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            alignItems:'center',
                            paddingHorizontal:10,
                            paddingVertical:10,
                        }}>
                            <View style={{
                                height: '90%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width:'56%'
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>{item.name}</Text>
                                <View>
                                    {/* <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[0]}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[1]}</Text> */}
                                </View>
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
                                        backgroundColor:'#00000040',
                                        borderRadius:8,
                                    }}
                                    onPress={()=>onClick(item)}
                                    >
                                        <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image
                                source={item.img}
                                style={{
                                    width: '40%',
                                    height: '98%',
                                    borderRadius: 10
                                }}
                            />
                        </View>)}
                    </View>
                  </View>
                  {/* pantalons */}
                <View style={{
                    minHeight: 400,
                    backgroundColor: '#ADD8E6',
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:22, fontWeight:800}}>Nos plats</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap:'wrap',
                    }}>
                        {pantalons.map((item) => <View
                            key={item.name}
                            style={{
                            width: '49%',
                            height: 250,
                            backgroundColor: '#ffffffaf',
                            borderRadius: 10,
                            marginBottom: 10,
                        }}>
                            <Image
                                source={item.img}
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    borderTopLeftRadius:10,
                                    borderTopRightRadius:10,
                                }}
                            />
                            <Entypo
                                name='heart'
                                size={28}
                                style={{
                                    position: 'absolute',
                                    right: 5,
                                    top: 5,
                                    color:'red'
                                }}
                            />
                            <View style={{
                                position: 'absolute',
                                top: '65%',
                                width:'100%',
                                backgroundColor:'#00000080',
                                paddingHorizontal: 10,
                                paddingBottom:13
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 800,
                                    color:color.white,
                                }}>{ item.name }</Text>
                            </View>
                            <View style={{
                                height: '20%',
                                display: 'flex',
                                alignItems: "center",
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal:10,
                            }}>
                                <Text style={{fontSize:18, fontWeight:800, color:color.black}}>{item.price}</Text>
                                <TouchableOpacity
                                    style={{
                                    width:40,
                                    height: 40,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor:'#0000005f',
                                    borderRadius:8,
                                }}
                                onPress={()=>onClick(item)}
                                >
                                    <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                </TouchableOpacity>
                            </View>
                        </View>)}
                    </View>
                  </View>
                  {/* Chaussur de sport */}
                <View style={{
                    minHeight: 400,
                    backgroundColor: '#B0C4DE',
                    paddingHorizontal: 10,
                    paddingBottom: 55,
                }}>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:22, fontWeight:800}}>Nos desserts</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap:'wrap',
                    }}>
                        {chaussuresport.map((item) => <View
                            key={item.name}
                            style={{
                            width: '98%',
                            height:130,
                            backgroundColor: '#ffffffaf',
                            borderRadius: 10,
                            marginBottom:10,
                            display:'flex',
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            alignItems:'center',
                            paddingHorizontal:10,
                            paddingVertical:10,
                        }}>
                            <View style={{
                                height: '90%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width:'56%'
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>{item.name}</Text>
                                <View>
                                    {/* <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[0]}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 400, marginHorizontal:5}}>{ item.desc[1]}</Text> */}
                                </View>
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
                                        backgroundColor:'#00000040',
                                        borderRadius:8,
                                    }}
                                    onPress={()=>onClick(item)}
                                    >
                                        <FontAwesome name='shopping-cart' size={20} color={color.white} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image
                                source={item.img}
                                style={{
                                    width: '40%',
                                    height: '98%',
                                    borderRadius: 10
                                }}
                            />
                        </View>)}
                    </View>
                  </View>
            </ScrollView>
            </View>
        <View style={{
            width:'70%',
            height: 55,
            backgroundColor: '#ffffffe0',
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
                    backgroundColor: color.primary,
                    borderRadius: 50,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <Entypo name='home' size={23} color={color.white} />
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
                <Entypo name='magnifying-glass' size={25} />
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
                <FontAwesome name='shopping-basket' size={25} />
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
                <Entypo name='user' size={25} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomePage
