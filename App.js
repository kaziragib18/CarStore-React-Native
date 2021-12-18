import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from "react"
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>

      <CarsList/>
      {/* <CarItem name={"Model X"}
        tagline={"Order Online For"}
        image={require("./assets/images/tesla.jpg")}
        taglineCTA={"Touchless Delivary"} /> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
