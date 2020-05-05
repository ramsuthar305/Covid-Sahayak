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
import { data } from './data/IntroSliderData';

const fetchFonts = () => {
    console.log('loading font')
    return Font.loadAsync({
        'Nunito-regular': require('../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    });
};

export default function IntroSlider() {
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
        color: '#636e72',
        textAlign: 'center',
        top: "60%",
        marginTop: "3%",
        fontFamily: 'Nunito-Bold'
    },
});