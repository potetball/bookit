import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Animated,
  ImageBackground,
  Dimensions,
  Alert,
  Button,
  TouchableHighlight
} from "react-native";
const backgroundImage = require("../assets/images/background.png");

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getLogoContainer}>
          <Text style={styles.coolTitle}>Moveme by Tina Jahr</Text>
        </View>
        <View>
          <Text>Booking</Text>
        </View>
      </ScrollView>
      <ImageBackground
        style={[styles.fixed, styles.imageBGContainer, { zIndex: -1 }]}
        source={backgroundImage}
      />
    </View>
  );
}

BookingScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  
  
  menuItemText: {
    fontSize: 24
  },
  container: {
    flex: 1
    //backgroundColor: "#6b3074"
  },
  contentContainer: {
    //paddingTop: 30
  },
  list: {
    alignItems: "center",
    justifyContent: "center"
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  coolTitle: {
    fontSize: 24,
    paddingTop: 50
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  getLogoContainer: {
    alignItems: "center",
    height: 130
    //backgroundColor: "#7c5295"
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
