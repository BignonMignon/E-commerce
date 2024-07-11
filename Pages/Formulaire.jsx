import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { style } from '../styles/style'
import { color } from '../styles/colors'
import Button from '../components/Button'
import Alert from '../components/Alert'

const Formulaire = ({
    visible=false,
    title,
    message='message',
    annuler = ()=>{},
    accept = ()=>{},
}) => {
  const [inputs, setInputs] = useState({
    name:'',
  });
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState('')
    const handleOnChange = (text, input)=>{
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handelOnClick = () => {
        if (inputs.name==='') {
            setAlert(true);
            setMsg('Entrer votre numero.')
        } else if (inputs.name.length < 10) {
            setAlert(true);
            setMsg('Verifier votre numero.')
        } else{
            accept()
            setInputs(prevState => ({ ...prevState, ['name']: '' }));
        }
    }
    const onClick = () => {
        if (inputs.name==='') {
            setAlert(true);
            setMsg('Entrer votre code.')
        } else if (inputs.name.length != 4) {
            setAlert(true);
            setMsg('Le code doit 4 chiffre.')
        }else{
            accept()
        }
    }
  return (
    visible &&
    <View style={[style.transparent]}>
        <Alert visible={alert} annuler={()=>setAlert(false)} message={msg} />
        <View style={[{
            backgroundColor:color.white,
            width:'90%',
            minHeight:100,
            borderRadius:10,
            padding:12,
        }]}>
        <Text style={[{
            fontSize:22,
            marginLeft:5,
        }]}>{title}</Text>
        <View style={{
            marginVertical:5,
            minHeight:20,
            marginBottom:10,
        }}>
            <Text style={[{
                fontSize:18,
                color:color.black,
            }]}>{message}</Text>
        </View>
        <View style={{
            width:'90%',
            marginHorizontal:'5%',
            height:40,
            marginBottom: 12,
            display: 'flex',
            justifyContent:'flex-end',
            borderBottomColor: color.grey,
            borderBottomWidth:1
        }}>
            <TextInput
                keyboardType='numeric'
                style={{
                    fontSize:18
                }}
                onChangeText={text => handleOnChange(text, 'name')}
            />
        </View>
        <View style={{
            flexDirection:'row',
            justifyContent: 'space-around',
            marginHorizontal:20
        }}>
        <View style={{ width: '48%' }}>
            <Button
                onPress={annuler}
                title='Annuler'
                rounded={5}
                color={color.light}
                textColor={color.black}
            />
        </View>
        <View style={{ width: '48%' }}>
            <Button
                onPress={()=>(title==='Numero paiement.' ? handelOnClick() : onClick())}
                title='Envoyer'
                rounded={5}
                color={color.primary}
                textColor={color.white}
            />
        </View>
        </View>
      </View>
    </View>
  )
}

export default Formulaire