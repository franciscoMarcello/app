import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default function Maps() {
  return (
    <View style={styles.container}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: -8.76183,
          longitude: -63.902,
          latitudeDelta: 0.922,
          longitudeDelta: 0.421,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
