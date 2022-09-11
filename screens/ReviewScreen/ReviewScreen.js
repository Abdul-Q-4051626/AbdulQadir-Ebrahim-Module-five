import { Text,  ScrollView, View } from 'react-native'
import styles from './styles';
import React, { useState,  useEffect  } from 'react'
import 'react-native-gesture-handler';
import { collection,onSnapshot } from "firebase/firestore";
import {db } from '../../firebase/firebase';
import { StyleSheet } from 'react-native';


export default   function ReviewScreen({navigation}) {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>   
    onSnapshot(collection(db, "Reviews") , (snapshot)=>
    setReviews(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
    []
    );

    return (
        <View style = {styles.mainView}>
        <ScrollView style = {styles.ScrollView}>
        <View style={styles.ReviewCard}>
            <Text style={styles.ReviewHeading}>
                Customer Reviews:
            </Text>
            <View style={styles.reviewsContainer}>
                {reviews.map((reviews) =>( 
                <Text style = {styles.reviews}key={reviews.id}>Name: {reviews.Name}{'\n'}Review: {reviews.Description}</Text>))}
            </View>
        </View>
          

        </ScrollView>
        </View>
    );
}

