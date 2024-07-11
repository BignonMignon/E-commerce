import { View, Text, ScrollView, Keyboard, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { style } from '../styles/style'
import { color } from '../styles/colors'
import Input from '../components/Input'
import Button from '../components/Button'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../components/Loader'
import Alert from '../components/Alert'

const RegisterView = ({navigation}) => {
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    phone:'',
    pass1:'',
    pass2:'',
  });
  
  const [error, setError] = useState({});
  const [alert, setAlert] = useState(false);
  const [hideAlert, setHideAlert] = useState({message:''});
  const [loanding, setLoanding] = useState(false)

  const validate = ()=>{
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
        handleError('Cette champ ne doit pas être vide !', 'email');
        valid=false;
    }else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
        handleError('Adresse email invalidée !', 'email');
        valid=false;
    }
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
    if (!inputs.pass1) {
        handleError('Cette champ ne doit pas être vide !', 'pass1');
        valid=false;
    }else if (inputs.pass1.length<8) {
        handleError('Le mot de passe doit au moins 8 caractères !', 'pass1');
        valid=false;
    }
    if (!inputs.pass2) {
        handleError('Cette champ ne doit pas être vide !', 'pass2');
        valid=false;
    }else if (inputs.pass2 != inputs.pass1) {
        handleError('Les 2 mot de passe doivent identique !', 'pass2');
        valid=false;
    }
    if (valid) {
        setLoanding(true)
        setTimeout(() => {
            register();
            setLoanding(false)
        }, 3000);
    }
  };

  const register = async ()=>{
    let users = await AsyncStorage.getItem('Users')
    users = JSON.parse(users)
    if (inputs.email != '') {
        if (users.email != inputs.email) {
            await AsyncStorage.setItem('Users', JSON.stringify(inputs))
            ToastAndroid.show(
                'Compte créer avec succèe !',
                ToastAndroid.SHORT,
            );
            navigation.navigate('login');
        }else {
            setAlert(true);
            setHideAlert({message:'Cette adresse email existe deja !'});
        }
    }
  }

  const handleOnChange = (text, input)=>{
    setInputs(prevState =>({...prevState, [input]: text}));
  };
  
  const handleError = (errorMsg, input)=>{
    setError(prevState =>({...prevState, [input]: errorMsg}));
  };

  return (
    <View style={[style.container]}>
        <Loader visible={loanding} />
        <Alert
            titlecolor={color.error}
            title='Erreur.'
            message={hideAlert.message}
            visible={alert}
            annuler={()=>{setAlert(false)}}
        />
        <ScrollView>
            <Text style={{
                textAlign:'center', 
                fontSize:35, 
                letterSpacing:0.5,
                fontWeight:900,
                color:color.primary,
            }} >Facebook</Text>
            <View style={{marginTop:30, marginHorizontal:15}}>
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
                    placeholder='Saisir votre adresse mail'
                    IconType={MaterialIcons}
                    iconName='email'
                    error={error.email}
                    onFocus={()=>{
                        handleError(null, 'email')
                    }}
                    onChangeText={text => handleOnChange(text, 'email')}
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
                <Input
                    placeholder='Saisir votre mot de passe'
                    password
                    IconType={MaterialIcons}
                    iconName='lock'
                    error={error.pass1}
                    onFocus={()=>{
                        handleError(null, 'pass1')
                    }}
                    onChangeText={text => handleOnChange(text, 'pass1')}
                    rounded={10}
                />
                <Input 
                    placeholder='Resaisir votre mot de passe'
                    password
                    IconType={MaterialIcons}
                    iconName='lock'
                    error={error.pass2}
                    onFocus={()=>{
                        handleError(null, 'pass2')
                    }}
                    onChangeText={text => handleOnChange(text, 'pass2')}
                    rounded={10}
                />
                <Button 
                    title='Créer compte'
                    color={color.primary}
                    textColor={color.white}
                    onPress={validate}
                    rounded={10}
                />
                <Button 
                    title='Se connecter'
                    color={color.light}
                    textColor={color.black}
                    onPress={()=>{navigation.navigate('login')}}
                    rounded={10}
                />
            </View>
        </ScrollView>
    </View>
  )
}

export default RegisterView