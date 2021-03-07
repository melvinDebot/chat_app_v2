import React from 'react'
import { render } from 'react-dom';
import { View, Text, StyleSheet } from 'react-native';

export default class NotificationScreen extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications Screen</Text>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent : "center"
  }
})