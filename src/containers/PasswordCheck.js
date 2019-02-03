import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import PasswordInput from '../components/PasswordInput';
import CompleteButton from '../components/CompleteButton';
import { isValidPassword } from '../helpers';

class PasswordCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }

  onChangeText = val => {
    this.setState({ password: val });
  };

  checkPassword = () => {
      const { password } = this.state;

      if(isValidPassword(password)) {
          alert("Valid")
      }
      else {
          alert("Not valid")
      }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <PasswordInput value={this.state.password} onChangeText={this.onChangeText}/>
        <CompleteButton title="Check password" onPress={this.checkPassword}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00803C',
  },
});
export default PasswordCheck;
