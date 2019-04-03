/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends Component {
  state = {
    counter: 0,
  }

  onPress = () => this.setState({ counter: this.state.counter + 1 })

  render() {
    return (
      <View style={styles.container} accessibilityLabel="testview">
          <View style={{flex: 1, marginBottom: 50}}>
            <Text accessibilityLabel="counter" style={styles.text}>{this.state.counter}</Text>
            <Button onPress={this.onPress} style={styles.button} title="Press me" accessibilityLabel="button" />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  text: {
    flex: 1,
    textAlign: 'center'
  },
  button: {
    width: '100%',
  },
});
