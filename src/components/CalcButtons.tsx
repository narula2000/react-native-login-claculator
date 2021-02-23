import React, { memo } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Button from './CalcButton';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
  },
  operations: {
    flex: 1,
    backgroundColor: '#f6993f',
  },
});

const Buttons = (props) => {
  const operatorSelected = (operations) => {
    // eslint-disable-next-line react/prop-types
    props.operation(operations);
  };

  const numbers = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['.', '0', 'Del'],
  ];
  const operations = ['C', '÷', '×', '-', '+', '='];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.numbers}>
        {numbers.map((row, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <View key={idx} style={styles.row}>
            {row.map((char) => (
              <Button key={char} char={char} operation={operatorSelected} />
            ))}
          </View>
        ))}
      </SafeAreaView>
      <SafeAreaView style={styles.operations}>
        {operations.map((char) => (
          <Button key={char} char={char} operation={operatorSelected} />
        ))}
      </SafeAreaView>
    </View>
  );
};

export default memo(Buttons);
