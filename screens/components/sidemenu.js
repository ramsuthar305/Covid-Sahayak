import PropTypes from "prop-types";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationActions } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";


function SideMenu({navigation}) {
  


  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <View
        style={{
          paddingBottom: "8%",
          paddingTop: "10%",

        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
           
            paddingBottom: "10%",
          }}
        >
          Sahayak
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.dispatch(DrawerActions.toggleDrawer())
          }
        >
          <View style={{
            paddingBottom: "3%", paddingTop: "10%", borderTopWidth: 1,
            borderTopColor: "#bdc3c7"
          }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,

              }}
            >
              <Ionicons name="md-home" size={22} color="#34495e" /> Home
                </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.dispatch(DrawerActions.toggleDrawer())
        }
      >
        <View style={{ paddingBottom: "8%", paddingTop: "8%", backgroundColor: "#fcba02", }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,

              color: 'white'
            }}
          >
            Open source initiative
                </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
