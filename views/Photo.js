import * as React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Header } from 'react-native-elements';

import { Camera } from 'expo-camera';

import axios from "axios";

import ResultView from "./components/Result.js";

const API_KEY = "373223ed4e6043319fdfb23b9f57dd72";

export default function PhotoView(props) {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [camera, setCamera] = React.useState();
  const [imgUri, setImgUri] = React.useState();
  const [isPicture, setIsPicture] = React.useState(false);
  const [clarifaiRes, setClarifaiRes] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function sendPictureToClarifai(photo) {
    // console.log(photo.base64);
    var data = JSON.stringify({
      "inputs": [
        {
          "data": {
            "image": {
              "base64": photo.base64
            }
          }
        }
      ]
    });

    let config = {
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
    setClarifaiRes(data.outputs[0].data.concepts);
    setIsPicture(true);
  }

  takePicture = () => {
    if (camera) {
      const option = { quality: 0.5, base64: true, skipProcessing: false, onPictureSaved: onPictureSaved };
      camera.takePictureAsync(option);
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

  if (!isPicture) {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#3a5790"
          placement="center"
          centerComponent={{ text: 'Take a picture', style: { color: '#fff', fontSize: 20 } }}
        />
        <Camera style={styles.camera} type={type} ref={(ref) => { setCamera(ref) }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={takePicture}>
              <Text style={styles.text}> Snap </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  } else {
    return (
      <ResultView img={imgUri} data={clarifaiRes} onReTakePicture={() => setIsPicture(false)}/>
    );
  }
  
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
    flex: 0.5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#3a5790",
    height: 30
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  result: {
    marginTop: 15,
    justifyContent: "center"
  },
  image: {
    width: 300,
    height: 300,
    marginLeft: 50
  }
});
