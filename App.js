import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  console.log('loading font')
  return Font.loadAsync({
    // 'Heebo-regular': {
    //   uri: require('./assets/fonts/Heebo-Regular.ttf'),
    //   fontDisplay: FontDisplay.FALLBACK,
    // },
    'Nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    // 'Heebo-Bold': {
    //   uri: require('./assets/fonts/Heebo-Bold.ttf'),
    //   fontDisplay: FontDisplay.FALLBACK,
    // },
    // 'Heebo-Medium': {
    //   uri: require('./assets/fonts/Heebo-Medium.ttf'),
    //   fontDisplay: FontDisplay.FALLBACK,
    // },
  });
};


const data = [
  {
    key: 1,
    title: 'Stay home, stay safe! \nHelp corona warriors by not stepping out of your home.',
    text: 'Description.Say something cool',
    image: require('./assets/images/stay_home.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Social distancing is an essential way to slow down the spread of COVID-19!\nMaintain atleat 6 Feet distance',
    text: 'Other cool stuff',
    image: require('./assets/images/social_distance.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Corona virus spread through nose, month and eyes. Prevent entry of virus by wearing mask',
    text: '',
    image: require('./assets/images/wear_mask.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Germs can spread from other people or surfaces. Washing hands can  prevent the spread of respiratory and diarrheal infections',
    text: '',
    image: require('./assets/images/wash_hands.jpg'),
    backgroundColor: '#22bcb5',
  }
];
const styles = StyleSheet.create({
  slide: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
  },
  image: {
    width: "80%",
    height: 180,
    marginTop: 32,
  },
  title: {
    fontSize: 20,
    paddingHorizontal: "11%",
    color: '#34495e',
    textAlign: 'center',
    top: "60%",
    marginTop: "3%",
    fontFamily: 'Nunito-Bold'
  },
});

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginTop: "50%",
          paddingHorizontal: "3%",
          backgroundColor: item.bg,
        }}>
        <SafeAreaView style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </SafeAreaView>
      </View>
    );
  };
  _keyExtractor = (item) => item.key;



  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent color="black" backgroundColor="black" />
      <AppIntroSlider
        dotStyle={{ backgroundColor: "grey" }}
        activeDotStyle={{ backgroundColor: "black" }}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        showSkipButton
        showPrevButton
        data={data}
      />
    </View>
  );

}