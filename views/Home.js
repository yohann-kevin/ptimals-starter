import * as React from "react";
import { View, Text } from "react-native";
import { Header } from 'react-native-elements';

export default function HomeView() {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Header
          backgroundColor="#3a5790"
          placement="center"
          centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20 } }}
        />
    </View>
  );
}
