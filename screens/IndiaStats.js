import * as React from 'react';
import { WebView } from 'react-native-webview';
import Header from './components/Header';
import {
    View,
    StyleSheet,
    StatusBar,
  } from "react-native";
export default function IndiaStats () {
    return (
            <View style={style.header}>
                <Header/>
                <WebView 
                source={{ uri: 'http://192.168.43.184:3000' }}
                style={{marginTop:"2%"}}
                />
            </View>
    )
  
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const style = StyleSheet.create({
  header: {
    flex:1,
    marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 30 : StatusBar.currentHeight + 10,
    padding:"2%"
}
})