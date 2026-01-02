import React from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';

import { styles } from './LoginStyles';
import BatLogo from '../../../assets/batlogo.png';
export function Login() {

 const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handlerLogin(){
    setIsLoggedIn(!isLoggedIn);
    console.log('Login status:', isLoggedIn);
  }

  return (
    <View style={styles.container}>

      <View style={{ display: isLoggedIn ? 'none' : 'flex', padding: 10, borderRadius: 5, marginBottom: 20 }}>
        <Image 
          style={styles.img}
          source={BatLogo}
        />

        <Button 
          color='#000'
          title="Login com o Batman"  
          onPress={handlerLogin} 
        />
      </View>

    <View style={
      [{ display: isLoggedIn ? 'flex' : 'none', padding: 10, borderRadius: 5, marginBottom: 20, width:'100%' }]
      }>

        <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
          <Image
            style={[styles.imgHeader]}
            source={BatLogo}
          />
           <TextInput
            style={styles.input}
            placeholder="Text"
           />

           <Text style={styles.label}>Label</Text>
           <TextInput
            style={styles.input}
            placeholder="Text"
           />
           <Text style={styles.small}>This is your Hint</Text>
          
          <TextInput
            placeholder='Your Text here ...'
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            editable={true}
             multiline={true}
            numberOfLines={4}
            maxLength={40}
          />

          <Text style={styles.label}>Label</Text>
           <TextInput
            placeholder='Your Text here ...'
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            editable={true}
             multiline={true}
            numberOfLines={4}
            maxLength={40}
          />
          <Text style={styles.small}>This is your Hint</Text>

          <Text
          style={{backgroundColor:'#000', color:'#fff', padding:10, borderRadius:5, textAlign:'center', width:'100%', marginTop:20, fontSize:20, fontWeight:'bold'}} 
          onPress={handlerLogin} 
          > Enviar</Text>
          
       
        </View>
     
      </View>




    </View>
  );
}