import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from "@expo/vector-icons";

const fetchFonts = () => {
    console.log("loading font");
    return Font.loadAsync({
      "Nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
      "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
      "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
    });
  };

const SplashScreen = ({navigation}) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setDataLoaded(true)}
        />
      );
    }
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('../assets/images/corona.png')}
                style={styles.logo}
                resizeMode="stretch"
              />
              <Text style={styles.title}>SAHAYAK</Text>
          </View>
          <Animatable.View style={styles.footer}  animation="fadeInUpBig">
            <Text style={styles.title}>Go Corona Corona Go!</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>   
                <LinearGradient colors={['#03A9F4', '#03A9F4']} style={styles.signIn} >
                    <Text style={styles.textSign}>Get Started</Text>
                    <Entypo name="chevron-right" size={30} color="#fff" />
                </LinearGradient>
                
                </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
    );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#03A9F4'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontFamily: "Nunito-Bold"
  },
  text: {
      color: 'grey',
      marginTop:5,
      fontFamily: "Nunito-regular"
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontFamily: "Nunito-Bold",
      fontSize:17
  }
});
   

