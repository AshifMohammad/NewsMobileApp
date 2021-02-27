import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Header } from "../UtilityComponents";

function HeadLines() {
  const [dataLoading, finishedLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=sports&q=cricket&apiKey=22df3a4784ba46b9acf69988abcd47be"
    )
      .then((res) => res.json())
      .then((news) => setNewsData(news.articles))
      .catch((error) => console.error(error))
      .finally(() => finishedLoading(false));
  }, []);

  const StoryItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={(e) => console.log(e)}>
        <View style={styles.listings}>
          <Text>{item.title}</Text>
          <Image style={styles.thumbnail} source={{ uri: item.urlToImage }} />
          <Text style={styles.blurb}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <Header />
      {dataLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={newsData}
          renderItem={StoryItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
  thumbnail: {
    height: 100,
    width: "98%",
  },
  listings: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    paddingBottom: 10,
    fontWeight: "bold",
  },
  blurb: {
    fontStyle: "italic",
  },
});

export default HeadLines;
