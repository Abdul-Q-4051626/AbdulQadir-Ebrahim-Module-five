import { Image, Text,  ScrollView, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import React, { useState,  useEffect  } from 'react'
import 'react-native-gesture-handler';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { authentication} from '../../firebase/firebase';
import { Alert } from 'react-native';

export default function DashboardScreen({navigation}) {

  const logOut = () => {
    signOut(authentication).then(() => {
    // Sign-out successful.
    Alert.alert("Logging out...")
    navigation.navigate('LoginScreen')
    }).catch((error) => {
    // An error happened.
    })
    }
    useEffect(() => {
      onAuthStateChanged(authentication, (user) =>{
        if (user){
        }
      })
    }, [])  
    return (
        <View style = {styles.mainView}>
        <ScrollView style = {styles.ScrollView}>
            <View style= {styles.TopView}>            
              <Image  style = {styles.JustIn} 
                source={require('../../assets/col0.1.jpeg')}/>
                  <Text style = {styles.JustInText } >Just In - New Items {'\n'}</Text>
            </View>

            <View style = {styles.WomenAndMen}>
              <View style = {styles.Women}>
                  <Image  style = {styles.ImageWomen} 
                  source={require('../../assets/col1.7.jpeg')}/>
                  <Text style = {styles.WomenText}>Womens</Text>
              </View>

              <View style = {styles.Men}>
                <Image  style = {styles.ImageMen} 
                source={require('../../assets/col2.2.jpeg')}/>
                 <TouchableOpacity style= {styles.MensButton}  onPress={ () => navigation.navigate('MensApparel')}>
                 <Text style = {styles.MenText}>Mens</Text>
              </TouchableOpacity>
              </View>
              </View>

            <View style= {styles.KidsAndNewArrivals}>
            <View style= {styles.Kids}>
            <Image  style = {styles.ImageKids} 
                source={require('../../assets/col3.2.jpeg')}/>
                  <Text  style = {styles.KidsText} >Kids</Text>
            </View>


            <View style = {styles.NewArrivals}>       
            <Image  style = {styles.ImageNewArrivals} 
                source={require('../../assets/col4.2.jpeg')}/>
                  <Text style = {styles.NewArrivalsText} >New Arrivals</Text>
            </View>
            </View>


          <View style = {styles.BottomView} >
                <View style = {styles.ContactUs}>
                  <TouchableOpacity style= {styles.ContactUsButton}  onPress={ () => navigation.navigate('ViewMoreScreen')}>
                  <Text style = {styles.ContactUsText}>
                       View More
                    </Text>
                    </TouchableOpacity>
                  </View>


                  <View style = {styles.Logout}>
                  <TouchableOpacity style= {styles.LogoutButton}  onPress={logOut}>
                  <Text style = {styles.LogoutText}>
                      Logout
                    </Text>
                    </TouchableOpacity>
                  </View>
          </View>

            </ScrollView>
        </View>
    );
}

