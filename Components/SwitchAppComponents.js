import React, { useState } from "react";
import { View, Switch, StyleSheet, Alert } from "react-native";

const AppSwitcher = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {isEnabled &&
        Alert.alert(
          "Switching App, are you sure",
          "App may loose some data",
          [
            {
              text: "Cancel",
              onPress: () => setIsEnabled(false),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Please navigate to app") },
          ],
          { cancelable: false }
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppSwitcher;
