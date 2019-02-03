import React from 'react';
import { TextInput, StyleSheet, Dimensions, View } from 'react-native';

const { height } = Dimensions.get('window');

const PasswordInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        returnKeyType="go"
        placeholderTextColor={'rgba(255,255,255,0.7)'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height/3,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default PasswordInput;
