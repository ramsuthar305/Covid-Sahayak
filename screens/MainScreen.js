import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Home from'./Home';
import IntroSlider from './IntroSlider';
import IndiaStats from './IndiaStats';
const Main = createStackNavigator();

const MainScreen = ({navigation}) => (
    <Main.Navigator headerMode='none'>
        <Main.Screen name="SplashScreen" component={SplashScreen}/>
        <Main.Screen name="SignInScreen" component={SignInScreen}/>
        <Main.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Main.Screen name="Home" component={Home}/>
        <Main.Screen name="IntroSlider" component={IntroSlider}/>
        <Main.Screen name="IndiaStats" component={IndiaStats}/>
    </Main.Navigator>
);

export default MainScreen;