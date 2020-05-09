import React, { useState } from "react";import { WebView } from 'react-native-webview';
import Header from './components/Header';
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity
  } from "react-native";
import ActionSheet from 'react-native-actionsheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function Tweets () {
    showActionSheet = () => {
        this.ActionSheet.show()
      }
      const [url, setUrl] = useState('https://twitter.com/MoHFW_INDIA?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3AMoHFW_INDIA&ref_url=https%3A%2F%2Fcoviddesk.in%2F'); 
      const options = [ 'https://twitter.com/mygovindia?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Amygovindia&ref_url=https%3A%2F%2Fcoviddesk.in%2F', 'https://twitter.com/MoHFW_INDIA?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3AMoHFW_INDIA&ref_url=https%3A%2F%2Fcoviddesk.in%2F']
    return (
            <View style={style.header}>
                <Header/>
                <WebView 
                source={{ uri: url }}
                style={{marginTop:"2%"}}
                />
                <View style={style.footer}>
                <TouchableOpacity onPress={this.showActionSheet}>
                <LinearGradient
                    colors={['#03A9F4', '#03A9F4']}
                    style={style.moreTweets}
                >
                    <Text style={[style.textMoreTweets, {
                        color:'#fff'
                    }]}>More Tweets</Text>
                </LinearGradient>
                </TouchableOpacity>
                        <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={'Whose tweets do you want to see ?'}
                        options={['MyGovIndia', 'Ministry of Health', 'cancel']}
                        cancelButtonIndex={2}
                        destructiveButtonIndex={1}
                        onPress={(index) => index ==2 ? {} : setUrl(options[index])} 
                        />
                </View>
            </View>
    )
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const style = StyleSheet.create({
  header: {
    flex:1,
    marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 30 : StatusBar.currentHeight + 10,
    padding:"2%",
},
footer:{
    alignContent:"center",
    justifyContent: "center"
},
moreTweets: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
},
textMoreTweets: {
    fontSize: 18,
    fontFamily: "Nunito-SemiBold",
}

})