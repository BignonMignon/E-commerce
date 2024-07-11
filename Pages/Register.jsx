import React, { useState } from 'react'
import { Keyboard, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import { color } from '../styles/colors'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { style } from '../styles/style'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Register({
    visible = false,
    accept = ()=>{},
    annuler = ()=>{},
}) {
  const [inputs, setInputs] = useState({
    name:'',
    phone:'',
    adress:'',
  });
  
  const [error, setError] = useState({});

  const validate = ()=>{
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.name) {
        handleError('Cette champ ne doit pas être vide !', 'name');
        valid=false;
    }else if (inputs.name.length<3) {
        handleError('Votre nom doit au mois 3 caractères !', 'name');
        valid=false;
    }
    if (!inputs.phone) {
        handleError('Cette champ ne doit pas être vide !', 'phone');
        valid=false;
    }else if (inputs.phone.length<10) {
        handleError('Le numero doit au moins 10 chiffres !', 'phone');
        valid=false;
    }
    if (!inputs.adress) {
        handleError('Cette champ ne doit pas être vide !', 'adress');
        valid=false;
    }else if (inputs.adress.length<5) {
        handleError('Le numero doit au moins 5 lettres !', 'adress');
        valid=false;
    }
      if (valid) {
          register()
    }
  };

  const register = async ()=>{
    try {
        await AsyncStorage.setItem('Users', JSON.stringify(inputs))
        ToastAndroid.show(
            'Information enrégistré avec succèe !',
            ToastAndroid.SHORT,
        );
        accept()
    } catch (error) {
        console.log(error);
    }
           
  }

  const handleOnChange = (text, input)=>{
    setInputs(prevState =>({...prevState, [input]: text}));
  };
  
  const handleError = (errorMsg, input)=>{
    setError(prevState =>({...prevState, [input]: errorMsg}));
  };

  return (
    visible &&
    <View style={[style.transparent]}>
        <View style={[{
            backgroundColor:color.white,
            width:'92%',
            minHeight:100,
            borderRadius:10,
            padding:12,
        }]}>
            <TouchableOpacity
             onPress={annuler}
             style={{
                width:40,
                height:40,
                      borderRadius: 50,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: color.light,
                      position: 'absolute',
                      top: -20,
                      right: -10,
                      backgroundColor:color.white
                
            }}>
                <MaterialIcons name='close' size={20} color={color.error} />
            </TouchableOpacity>
            <Text style={{
                width:'100%',
                fontSize: 25,
                fontWeight:800,
                textAlign: 'center',
                marginBottom:10,
            }}>Informations</Text>
            <View style={{marginTop:10, marginHorizontal:5}}>
                <Input 
                    placeholder='Saisir votre nom'
                    IconType={Entypo}
                    iconName='user'
                    error={error.name}
                    onFocus={()=>{
                        handleError(null, 'name')
                    }}
                    onChangeText={text => handleOnChange(text, 'name')}
                    rounded={10}
                />
                <Input 
                    placeholder='Saisir votre adresse postale'
                    IconType={FontAwesome}
                    iconName='map-marker'
                    error={error.adress}
                    onFocus={()=>{
                        handleError(null, 'adress')
                    }}
                    onChangeText={text => handleOnChange(text, 'adress')}
                    rounded={10}
                />
                <Input
                    placeholder='Saisir votre numero tel'
                    IconType={MaterialIcons}
                    iconName='phone'
                    keyboardType='numeric'
                    error={error.phone}
                    onFocus={()=>{
                        handleError(null, 'phone')
                    }}
                    onChangeText={text => handleOnChange(text, 'phone')}
                    rounded={10}
                />
                <Button
                    title='Enregistrer'
                    color={color.primary}
                    textColor={color.white}
                    onPress={validate}
                    rounded={10}
                />
            </View>
        </View>
    </View>
  )
}

export default Register
