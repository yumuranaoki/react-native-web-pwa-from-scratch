import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button: React.FC<{}> = () => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
    }
  })

  const onPress = () => {
    fetch('http://localhost:3000')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <View>
      <Text>React Native Web</Text>
      <TouchableOpacity
        onPress={onPress}
      >
        <View
          style={styles.button}
        >
          <Text>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Button