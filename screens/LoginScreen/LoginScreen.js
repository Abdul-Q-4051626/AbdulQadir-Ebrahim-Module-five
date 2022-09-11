import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import 'react-native-gesture-handler';
import {signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { authentication } from '../../firebase/firebase';
import { Alert } from 'react-native';
export default function LoginScreen({navigation}) {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const onLoginPress = () => {
        if(email==''){
            Alert.alert("Please enter an email!")
        }else if (password=='') {
         Alert.alert("Please enter your password!")
        }else if (email=="" && password==""){ 
            Alert.alert("Please enter your email and password!")
        }else {  
             signInWithEmailAndPassword(authentication, email, password)
            .then((userCredentials) => {
                const uid = userCredentials.user.uid
                navigation.navigate('DashboardScreen')
                Alert.alert("Welcome Back!")
            })
             //  .catch(error => {
              //     alert(error)
           //   }
              //);
            }
    }

    return (
        <View style = {styles.mainView}>
            <View style= {styles.TopView}></View>
            
            <View style = {styles.IconName}>
            <Image style = {styles.ImageStyle} source={require('../../assets/head.png')}/>
            </View>
            <View style= {styles.FormView}>
                  <TextInput  value = {email} email = 'email'
                    onChangeText={(email) => {setEmail(email)}}
                    placeholder= {"Email Address"} 
                    placeholderTextColor={"black"} 
                    style = {styles.TextInput}/>

                 <TextInput value = {password} password = 'password'
                    onChangeText={(password)=> {setPassword(password)}}
                    placeholder= {"Password"} secureTextEntry={true}
                    placeholderTextColor={"black"} style = {styles.TextInput}/>

                <TouchableOpacity style= {styles.Button} onPress={onLoginPress}>
                    <Text style= {styles.ButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
           <TouchableOpacity style= {styles.SignUpButton}  onPress={ () => navigation.navigate('RegistrationScreen')}>
           <Text style = {styles.SignUpText}>
                Don't have an account? Sign Up
            </Text>
           </TouchableOpacity>
        </View>
    );
}

