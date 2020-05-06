import React, { useState } from 'react';
import {
  View,
  Text,
 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './MainScreen'

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen/>
    </NavigationContainer>
  );

}