import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
});

const Button = (props) => (
  <TouchableOpacity
    onPress={() => props.operation(props.char)}
    style={styles.container}
  >
    <Text style={styles.text}>{props.char}</Text>
  </TouchableOpacity>
);

export default memo(Button);
