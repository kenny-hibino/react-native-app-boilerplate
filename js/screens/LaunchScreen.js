import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

class LaunchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native App Launching...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LaunchScreen;
