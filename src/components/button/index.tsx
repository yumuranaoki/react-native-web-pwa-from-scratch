import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button: React.FC<{}> = () => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
    }
  })
  return (
    <View>
      <Text>React Native Web</Text>
      <TouchableOpacity>
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