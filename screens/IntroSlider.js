import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Button,
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

const done = () => {
    () => navigation.navigate('Home')
}

export default function IntroSlider({ navigation }) {
    const [dataLoaded, setDataLoaded] = useState(false)
    const [doneButton, enableDoneButton] = useState(false)
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
                {item.key == 4 ? enableDoneButton(true) : enableDoneButton(false)}

            </View>
        );
    };
    _keyExtractor = (item) => item.key;

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar translucent color="black" backgroundColor="black" />
            <AppIntroSlider
                dotStyle={{ backgroundColor: "grey" }}
                activeDotStyle={{ backgroundColor: "black" }}
                keyExtractor={_keyExtractor}
                renderItem={_renderItem}

                showSkipButton
                showPrevButton
                showDoneButton
                renderDoneButton={done}
                data={data}
            />
            {doneButton ? <Button title="Done" onPress={() => navigation.navigate('Home')} style={{ marginHorizontal: "5%" }} /> : null}
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