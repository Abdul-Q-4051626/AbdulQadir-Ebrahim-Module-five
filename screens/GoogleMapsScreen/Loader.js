import styles from '../ContactUsScreen/styles';

import { View, ActivityIndicator} from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View style={[styles.container, styles.horizontal]} >
        <ActivityIndicator size="large" color="#2a2a2a" />
    </View>
  )
}