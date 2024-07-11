import { View, Text, Keyboard, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { style } from '../styles/style'
import { color } from '../styles/colors'
import Input from '../components/Input'
import { MaterialIcons } from '@expo/vector-icons'
import Button from '../components/Button'
import Loader from '../components/Loader'
import Alert from '../components/Alert'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginView = ({navigation}) => {
  const [inputs, setInputs] = useState({
    email:'',
    pass:'',
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(false);
  const [hideAlert, setHideAlert] = useState({message:''});
  const [loanding, setLoanding] = useState(false)

  const handleOnChange = (text, input)=>{
    setInputs(prevState=>({...prevState, [input]: text}));
  }

  const validate = ()=>{
    Keyboard.dismiss();
    let valid = true;
    if(!inputs.email){
      handleError('Cette champ ne doit pas être vide !', 'email')
      valid=false
    }
    if(!inputs.pass){
      handleError('Cette champ ne doit pas être vide !', 'pass')
      valid=false
    }
    if (valid) {
      setLoanding(true)
      setTimeout(() => {
          login();
          setLoanding(false)
      }, 3000);
    }
  }
  
  const login = async ()=>{
    let users = await AsyncStorage.getItem('Users');
    users = JSON.parse(users)
    if (users.email==inputs.email) {
      if (inputs.pass==users.pass1) {
        navigation.navigate('accueil')
        ToastAndroid.show(
          'Connected',
          ToastAndroid.SHORT,
        )
      } else {
        setAlert(true)
        setHideAlert({message:'Le mot de passe que vous avez entrer est incorrect !'})
      }
    }else{
      setAlert(true)
      setHideAlert({message:'L\'adresse mail que vous avez entrer est introuvable !'})
    }
  }

  const handleError = (errorMsg, input)=>{
    setErrors(prevState =>({...prevState, [input]: errorMsg}));
  }

  return (
    <View style={[style.container, {backgroundColor:color.white}]}>
    <Loader visible={loanding} />
    <Alert
        titlecolor={color.error}
        title='Erreur.'
        message={hideAlert.message}
        visible={alert}
        annuler={()=>{setAlert(false)}}
    />
      <Text style={{
        textAlign:'center', 
        fontSize:35, 
        letterSpacing:0.5,
        fontWeight:900,
        color:color.black,
      }} >E-Mode</Text>
      <View style={{marginTop:30, marginHorizontal:15}}>
        <Input
          placeholder='Entrez votre adresse mail'
          IconType={MaterialIcons}
          iconName='email'
          error={errors.email}
          onFocus={()=>{
            handleError(null, 'email')
          }}
          onChangeText={text => handleOnChange(text, 'email')}
          rounded={10}
        />
        <Input
          placeholder='Entrez votre adresse mail'
          password
          IconType={MaterialIcons}
          iconName='lock'
          error={errors.pass}
          onFocus={()=>{
            handleError(null, 'pass')
          }}
          onChangeText={text => handleOnChange(text, 'pass')}
          rounded={10}
        />
        <Button
          title='Se connecter'
          color={color.primary}
          textColor={color.white}
          onPress={validate}
          rounded={10}
        />
        <Button
          title='Créer un nouveau compte'
          color={color.light}
          textColor={color.black}
          rounded={10}
          onPress={()=>{navigation.navigate('register')}}
        />
        <Text style={[style.textCenter,{
          marginTop:10,
          fontWeight:500,
          fontSize:16,
        }]}></Text>
      </View>
    </View>
  )
}

export default LoginView