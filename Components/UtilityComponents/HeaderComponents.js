import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import logo from "../../assets/logo.png";

export default function Header({ refreshNews }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => console.log("refresh todo") }>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop:"5%",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
  },
});
