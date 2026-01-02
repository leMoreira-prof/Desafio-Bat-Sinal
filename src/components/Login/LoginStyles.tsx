import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  img:{
width: 200,
height: 200,
resizeMode: 'contain',
marginBottom: 80,
  },
btn:{

  backgroundColor:'#000',
  color:'#fff',
  padding: 10,
  borderRadius: 5,
},

imgHeader:{
  width:50,
  height:50,
  resizeMode:'contain',
},

input:{
  borderWidth:3,
  borderColor:'#000',
  borderRadius:5,
  width:'100%',
  marginBottom:20,
},
label:{
  fontSize:16,
  color:'#000',
  marginLeft:5,
  marginBottom:10,
},
small:{
  fontSize:12,
  color:'#666',
  marginLeft:5,
  marginTop:-10,
  marginBottom:20,  
}

});