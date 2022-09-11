import {  TouchableOpacity, View } from 'react-native'
import styles from './styles';
import React, { useEffect ,useState} from 'react'
import 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import Loader from './Loader';
import BusinessLocations from './BusinessLocations';



  const GoogleMapsScreen = () => {
    const Companies = BusinessLocations
    const [currentlocation, setCurrentLocation] = useState(null);
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location);
          console.log(location)
        })();
      }, []);

      const RenderMarker = () =>{
        return(
            <View>
                {Companies.map((marker, index) =>{
                return(
                    <Marker
                    key={index}
                    coordinate= {{latitude: marker.coordinates['latitude'], longitude:marker.coordinates['longitude']}}
                    title = {marker.Name}
                    number = {marker.Number}
                    email = {marker.Email}
                    image = {marker.logo}
                    />
                       )
                 })}
             </View>
        )
      }

    return (
        <View style = {styles.mainView}>
            {Companies != null
           ? <View>
                <MapView style={styles.map}
                  provider={PROVIDER_GOOGLE}
                   initialRegion={{
                    latitude: -33.983940,
                    longitude:  18.534870,
                    latitudeDelta: 0.622,
                    longitudeDelta: 0.621,
                }}
             
              showsUserLocation={true}
              >
                <RenderMarker/>
              </MapView>
              
            </View>
            :<Loader/>
            }
        </View>
    );
};
export default GoogleMapsScreen