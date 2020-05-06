import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Entypo } from "@expo/vector-icons";
import { findFlagUrlByCountryName } from "country-flags-svg";
import { Ionicons } from "@expo/vector-icons";

const fetchFonts = () => {
  console.log("loading font");
  return Font.loadAsync({
    "Nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
  });
};

const flagUrl = findFlagUrlByCountryName("India");

export default function Home() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight + 10,
        paddingHorizontal: "3%",
      }}
    >
      <StatusBar translucent color="black" backgroundColor="black" />

      <View style={style.header}>
        <Image
          source={require("../assets/images/menu.png")}
          style={style.menu}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/corona.png")}
            style={style.menu}
          />
          <Text style={style.headerTitle}> Sahayak</Text>
        </View>
      </View>
      <View style={{ marginTop: "6%" }} elevation={2}>
        <TouchableOpacity>
          <View style={style.healthStatus}>
            <Text style={style.healthStatusHeading}>
              Report your COVID-19 health status.
            </Text>
            <Text style={style.healthStatusTagline}>
              Take 1 minute every day, to report your health status and help us
              map the spread of corona virus.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "6%" }}>
        <TouchableOpacity>
          <View style={style.GlobalStatus} elevation={3}>
            <Text style={style.GlobalStatusHeading}>Coronavirus Global</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cases</Text>
                <Text style={[style.caseNumber, { color: "#3498db" }]}>
                  1,254,464
                </Text>

                <Text style={[style.caseAddition, { color: "#3498db" }]}>
                  <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
              </View>
              <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cases</Text>
                <Text style={[style.caseNumber, { color: "#e74c3c" }]}>
                  1,254,464
                </Text>
                <Text style={[style.caseAddition, { color: "#e74c3c" }]}>
                  <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
              </View>
              <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cases</Text>
                <Text style={[style.caseNumber, { color: "#27ae60" }]}>
                  1,254,464
                </Text>
                <Text style={[style.caseAddition, { color: "#27ae60" }]}>
                  <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
              </View>
            </View>
            <Text style={style.lastUpdated}>Last updated Apr 08, 03:54 PM</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "6%" }}>
        <TouchableOpacity>
          <View style={style.GlobalStatus} elevation={3}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/flags/India.png")}
                style={style.menu}
              />
              <Text style={style.GlobalStatusHeading}> India</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cases</Text>
                <Text style={[style.caseNumber, { color: "#3498db" }]}>
                  3,114,464
                </Text>

                <Text style={[style.caseAddition, { color: "#3498db" }]}>
                  <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
              </View>
              <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cases</Text>
                <Text style={[style.caseNumber, { color: "#e74c3c" }]}>
                  4,222,009
                </Text>
                <Text style={[style.caseAddition, { color: "#e74c3c" }]}>
                  <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
              </View>
              <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cases</Text>
                <Text style={[style.caseNumber, { color: "#27ae60" }]}>
                  61,254
                </Text>
                <Text style={[style.caseAddition, { color: "#27ae60" }]}>
                  <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
              </View>
            </View>
            <Text style={style.lastUpdated}>Last updated Apr 08, 03:54 PM</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[style.GlobalStatusHeading, { marginTop: "5%" }]}>
        Latest COVID-19 news
      </Text>
      <View style={{ marginTop: "5%" }}>
        <TouchableOpacity>
          <View style={style.GlobalStatus} elevation={3}>
            <View style={{ flexDirection: "row" }}>
              <Entypo name="news" size={24} color="black" style={{ flex: 1 }} />
              <Text style={style.newsHeadline}>
                {" "}
                Lockdown 3.0 to be estended till 17 may
              </Text>
              <Ionicons name="ios-arrow-forward" size={24} color="#636e72" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  menu: {
    height: 25,
    width: 22,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 20,
    color: "#636e72",
  },
  healthStatus: {
    backgroundColor: "#EA2027",
    borderRadius: 15,
    padding: "5%",
  },
  GlobalStatus: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: "5%",
  },
  healthStatusHeading: {
    color: "white",
    fontFamily: "Nunito-Bold",
    fontSize: 18,
  },
  healthStatusTagline: {
    color: "white",
    fontFamily: "Nunito-Bold",
    fontSize: 14,
    marginTop: "3%",
  },
  GlobalStatusHeading: {
    color: "black",
    fontFamily: "Nunito-Bold",
    fontSize: 20,
  },
  coronaStatusColumn: {
    marginVertical: "5%",
  },
  casesHeading: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 17,
  },
  caseNumber: {
    fontFamily: "Nunito-Bold",
    marginVertical: "5%",
    fontSize: 24,
  },
  caseAddition: {
    fontFamily: "Nunito-SemiBold",
  },
  lastUpdated: {
    fontFamily: "Nunito-regular",
  },
  newsHeadline: {
    fontSize: 17,
    fontFamily: "Nunito-regular",
    flex: 8,
  },
});
