import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    key: 1,
    title: 'Stay home, stay safe!\nHelp corona warriors by not stepping out of your home.',
    text: 'Description.\nSay something cool',
    image: require('./assets/images/stay_home.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'finally!',
    text: 'Other cool stuff',
    image: require('./assets/images/social_distance.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Tribute to "jo jaa chuke j"',
    text: '',
    image: require('./assets/images/wear_mask.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Tribute to "jo jaa chuke j"',
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
    color: 'black',
    textAlign: 'center',
    top: "70%",
    marginTop:"5%"
  },
});

export default function App() {
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
        dotStyle={{backgroundColor:"grey"}}
        activeDotStyle={{backgroundColor:"black"}}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        skipLabel="Skip"
        showSkipButton
        showPrevButton
        data={data}
      />
    </View>
  );

}