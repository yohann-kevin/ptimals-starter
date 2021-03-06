import * as React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, Button } from "react-native";
import { Header } from 'react-native-elements';

export default function ResultView(props) {
  const [imgUri, setImgUri] = React.useState(props.img);
  const [data, setData] = React.useState(props.data);

  function reTakePicture() {
    props.onReTakePicture();
  }

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#3a5790"
        placement="center"
        centerComponent={{ text: 'Result', style: { color: '#fff', fontSize: 20 } }}
      />
      <Image style={styles.image} source={{ uri: imgUri }} />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <Text style={styles.item}>Result :</Text>
              <Text style={styles.item}>name: {item.name}</Text>
              <Text style={styles.item}>ratio: {item.value}</Text>
              <Text style={styles.item}>------------------------</Text>
            </>
          )}
        />
      </SafeAreaView>
      <Button title="Retake a picture" onPress={reTakePicture}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    marginLeft: 50
  },
  list: {
    padding: 15
  },
  item: {
    textAlign: "center",
    padding: 5
  }
});

