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

import { MonoText } from "../components/StyledText";


const handleScroll = e => {
  console.log(e.nativeEvent.contentOffset.y);
};
const backgroundImage = require("../assets/images/background.png");

const prImage = require("../assets/images/tina1.jpg");
const prImage2 = require("../assets/images/tina1.jpg");

export default function HomeScreen(props) {
  const menuItems = [
    {
      key: 0,
      name: "Booking",
      navigate: null,
      color: boxColors[0],
      backgroundImage: prImage,
      click: () => {
        //alert("You pressed me");
        //console.log(props);
        props.navigation.navigate("Booking");
      }
    },
    {
      key: 1,
      name: "Produkter",
      navigate: null,
      color: boxColors[2],
      backgroundImage: prImage
    },
    {
      key: 2,
      name: "Biography",
      navigate: null,
      color: boxColors[1],
      backgroundImage: prImage
    },
    {
      key: 3,
      name: "Kontakt",
      navigate: null,
      color: boxColors[3],
      backgroundImage: prImage
    },
    {
      key: 4,
      name: "FAQ",
      navigate: null,
      color: boxColors[4],
      backgroundImage: prImage
    },
    {
      key: 5,
      name: "Login",
      navigate: null,
      color: boxColors[5],
      backgroundImage: prImage
    },
    {
      key: 6,
      name: "Test5",
      navigate: null,
      color: boxColors[6],
      backgroundImage: prImage
    },
    {
      key: 7,
      name: "Test6",
      navigate: null,
      color: boxColors[7],
      backgroundImage: prImage
    }
  ];

  //const [animColor, setAnimColor] = useState(new Animated.Value(0));
  
  // We'll initialize animation
  // timer using useEffect
  /*useEffect(() => {
    Animated.timing(animColor, {
      toValue: 255,
      duration: 10000
    }).start();
  });*/

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        onScroll={handleScroll}
      >
        <View style={styles.getLogoContainer}>
          <Text style={styles.coolTitle}>Moveme by Tina Jahr</Text>
        </View>
        <View>
          <FlatList
            numColumns={2}
            contentContainerStyle={styles.list}
            data={menuItems}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
      <ImageBackground
        style={[styles.fixed, styles.imageBGContainer, { zIndex: -1 }]}
        source={backgroundImage}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const renderItem = ({ item, index }) => {
  return (
    <TouchableHighlight onPress={item.click} underlayColor={"#FFF"}>
      <ImageBackground
        style={[
          styles.menuItem,
          {
            backgroundColor: boxColors[index]
          }
        ]}
        source={item.backgroundImage}
        imageStyle={{ opacity: 0.1 }}
      >
        <Text style={styles.menuItemText}>{item.name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};
//const getDynamicBackgroundColor = y => {};

const boxColors = [
  "#d8e1bb",
  "#b6cec7",
  "#86a3c3",
  "#6881a6",
  "#b6cec7",
  "#86a3c3",
  "#6881a6",
  "#d8e1bb",
  "#FFF",
  "#FFF"
];

const styles = StyleSheet.create({
  imageBGContainer: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  menuItem: {
    //flex: 1,
    margin: 5,
    minWidth: 180,
    //maxWidth: 223,
    height: 190,
    maxHeight: 304,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowRadius: 7,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2
  },
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
