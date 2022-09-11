import { Image, Text,  ScrollView, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import * as React from 'react';
import 'react-native-gesture-handler';


export default function ViewMoreScreen({navigation}) {

  
    return (
        <View style = {styles.mainView}>
             <View style = {styles.Image} >
          <Image  style = {styles.info} 
                source={require('../../assets/information.png')}/>
                </View>
          <View style = {styles.BottomView} >
           
            <View style= {styles.Buttons}>
                <View style = {styles.ViewMoreButton}>
                  <TouchableOpacity style= {styles.ViewMoreButton}  onPress={ () => navigation.navigate('ReviewScreen')}>
                  <Text style = {styles.ViewMoreButtonText}>
                    Reviews
                    </Text>
                    </TouchableOpacity>
                  </View>

                  <View style = {styles.ViewMoreButton}>
                  <TouchableOpacity style= {styles.ViewMoreButton}  onPress={ () => navigation.navigate('ContactUsScreen')}>
                  <Text style = {styles.ViewMoreButtonText}>
                      Contact Us
                    </Text>
                    </TouchableOpacity>
                  </View>
                  </View>

                  <View style= {styles.Buttons}>
                <View style = {styles.ViewMoreButton}>
                  <TouchableOpacity style= {styles.ViewMoreButton}>
                  <Text style = {styles.ViewMoreButtonText}>
                      Profile
                    </Text>
                    </TouchableOpacity>
                  </View>


                  <View style = {styles.ViewMoreButton}>
                  <TouchableOpacity style= {styles.ViewMoreButton}  >
                  <Text style = {styles.ViewMoreButtonText}>
                      Wishlist
                    </Text>
                    </TouchableOpacity>
                  </View>
                  </View>
          </View>

            
        </View>
    );
}

