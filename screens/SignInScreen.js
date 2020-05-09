import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        mobile_numer: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    
    const textInputChange = (val) => {
        if( val.length == 10 ) {
            setData({
                ...data,
                mobile_numer: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
        
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    
    return (
        <TouchableWithoutFeedback onPress = {() => { Keyboard.dismiss()}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome Back!</Text>
            </View>
            <Animatable.View style={styles.footer}  animation="fadeInUpBig">

                <Text style={styles.text_footer}>Mobile Number</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        size={18}
                    />
                    <TextInput 
                        placeholder="Your Number"
                        style={styles.textInput}
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={10}
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                    <Feather 
                        name="check-circle"
                        size={18}
                        color="green"
                    />
                     </Animatable.View>
                    : null}   
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        size={18}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={18}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={18}
                        />
                        }
                </TouchableOpacity>
                </View>
                <View style={styles.button}> 
                <TouchableOpacity onPress={() => navigation.navigate('IntroSlider')} style={styles.signIn}>
                <LinearGradient
                    colors={['#03A9F4', '#03A9F4']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={[styles.signUp, {
                        borderColor: '#03A9F4',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#03A9F4'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#03A9F4'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontFamily: "Nunito-Bold",
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontFamily: "Nunito-SemiBold",
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontFamily: "Nunito-SemiBold",
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontFamily: "Nunito-SemiBold",
    }
  });
   

