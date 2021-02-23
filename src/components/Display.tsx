import React, { memo } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
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
    color: colors.white,
    fontSize: 40,
  },
  result: {
    textAlign: 'right',
    color: colors.white,
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
