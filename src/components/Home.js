import React from 'react';
import {TextInput, StyleSheet, Button, Text, View,Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(){
    var name;
    return(
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.button} onPress={()=> console.log('here will open the navigationDrawer')}>
                <Image style={styles.barMenu} source={require('../../assets/barsMenu.png')}/>
            </Pressable>
            <Text style={styles.text}>Pokedex</Text>
            <Text style={styles.question}>What's your name?</Text>
            <TextInput style={styles.user} placeholder='Name' ></TextInput>
            <Button title = 'Send' onPress={()=> console.log("Sent successfully!")}></Button>
        </SafeAreaView>
        ) 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b71c1c',
      },
    question:{
        color:'white',
        alignSelf:'center',
        fontSize: 20,
        margin: 20
    },
    user: {
      backgroundColor: 'white',
      width: 300,
      padding:10,
      margin:20, 
      borderRadius: 20,
      color:'black'
    },
   
      text: {
        fontSize: 30,
        color: '#fafafa'
      }
  });