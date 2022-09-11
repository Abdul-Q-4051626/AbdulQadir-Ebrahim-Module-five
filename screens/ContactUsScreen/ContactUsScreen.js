
import { Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native'
import styles from './styles';
import 'react-native-gesture-handler';
import { collection, onSnapshot } from "firebase/firestore";
import {db } from '../../firebase/firebase';
import React, { useState,  useEffect  } from 'react'


export default function ContactUsScreen({navigation}) {
    const [contact,setContact] = useState([]);
    const [branch,setBranch] = useState([]);

    useEffect(()=>   
    onSnapshot(collection(db, "Branches") , (snapshot)=>
       setBranch(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
    []

);
    useEffect(()=>   
    onSnapshot(collection(db, "ContactInfo") , (snapshot)=>
       setContact(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
    []

);
    const openMaps = () => {
        navigation.navigate('GoogleMapsScreen')
        }
    return (
        <View style = {styles.mainView}>
            <View style = {styles.ContactUs}>
                <Text style = {styles.Intro}>
                    Need to get hold of us? We'd love to hear from you!
                    {'\n'}Reach out to use using the details below. 
                </Text>


            <TouchableOpacity 
                onPress={() => navigation.navigate('GoogleMapsScreen')}>
                    <Text style = {styles.mapLink}>
                        Click on this link to visit our nearest stores!
                    </Text>
            </TouchableOpacity>
            <View style={styles.ContactInfo}>
            {contact.map((contact) =>( 
            <Text key={contact.id}>Phone: {contact.Phone}{'\n'}Email: {contact.Email}</Text> ))}
            </View>
            <View style={styles.branches}>
                <Text style={styles.branches}>Branches:</Text>
                {branch.map((branch) =>( 
                <Text style = {styles.branch}key={branch.id}>{branch.Branch}</Text>))}
            </View>
            <View>
                
            </View>
         

            </View>
        </View>
        
    );
}












     