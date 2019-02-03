import React from 'react';
import { Text, Dimensions, TouchableNativeFeedback, View, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const CompleteButton = props => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
  },
});

export default CompleteButton;
