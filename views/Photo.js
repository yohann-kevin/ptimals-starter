import * as React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Header } from 'react-native-elements';

import { Camera } from 'expo-camera';

import axios from "axios";

const API_KEY = "373223ed4e6043319fdfb23b9f57dd72";

export default function PhotoView() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [camera, setCamera] = React.useState();
  const [imgUri, setImgUri] = React.useState();

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function sendPictureToClarifai() {
    // console.log(photo);
    var data = JSON.stringify({
      "inputs": [
        {
          "data": {
            "image": {
              "url": "http://i.imgur.com/XmAr3jV.jpg"
            }
          }
        }
      ]
    });

    var config = {
      method: 'post',
      url: 'https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs',
      headers: { 
        'Authorization': 'Key ' + API_KEY, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config).then((response) => {
      manageClarifaiResponse(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  function manageClarifaiResponse(data) {
    console.log(data.outputs[0].data.concepts[0]);
  }

  takePicture = () => {
    if (camera) {
      camera.takePictureAsync({ onPictureSaved: onPictureSaved });
    }
  }
  
  onPictureSaved = photo => {
    setImgUri(photo.uri);
    sendPictureToClarifai(photo);
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => { setCamera(ref) }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={takePicture}>
            <Text style={styles.text}> Snap </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Image style={styles.image} source={{ uri: imgUri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  image: {
    width: 300,
    height: 300
  }
});
