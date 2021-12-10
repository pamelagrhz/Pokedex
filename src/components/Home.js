import React from 'react';
import {TextInput, StyleSheet, Button, Text, View} from 'react-native';

export default function HomeScreen(){
    return(
        <View>
            <Text style={styles.question}>What's your name?</Text>
            <TextInput style={styles.user} placeholder='Name'></TextInput>
            <Button title = 'Send' onPress={()=> console.log("Sent successfully!")}></Button>
        </View>
        ) 
}
const styles = StyleSheet.create({
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
    }
  });