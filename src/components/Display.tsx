import React, { memo } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2836',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  safe: {
    flex: 1,
    justifyContent: 'space-around',
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 40,
  },
  result: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 30,
  },
});

const Display = (props) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safe}>
      <Text style={styles.display} adjustsFontSizeToFit numberOfLines={1}>
        {props.state.display}
      </Text>
      {props.state.result !== '' && (
        <Text style={styles.result} adjustsFontSizeToFit numberOfLines={1}>
          {props.state.result}
        </Text>
      )}
    </SafeAreaView>
  </View>
);

export default memo(Display);
