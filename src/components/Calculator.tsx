import React, { memo, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import Display from './Display';
import Buttons from './CalcButtons';

type Props = React.ComponentProps<typeof PaperButton>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 350,
    minWidth: 350,
  },
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#ff8000',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

const Calculator = ({ mode, style, children, ...props }: Props) => {
  const [state, setState] = useState({ display: '0', result: '' });

  const rounder = (val: string) => {
    return String(parseFloat(val).toFixed(2));
  };

  const displayChecker = (operation, display) => {
    const invalid = ['÷', '×', '0'];

    if (invalid.includes(display)) {
      if (invalid.includes(operation)) {
        return '0';
      }
      return operation;
    }
    return display + operation;
  };

  const handleOperation = (operation) => {
    if (operation === 'C') {
      setState({
        display: '0',
        result: '',
      });
    } else if (operation === '=') {
      setState({
        display: state.result === '' ? state.display : state.result,
        result: '',
      });
    } else if (operation === 'Del') {
      setState({
        display:
          state.display.slice(0, -1) === '' ? '0' : state.display.slice(0, -1),
        result: '',
      });
    } else {
      const display = displayChecker(operation, state.display);
      let { result } = state;
      try {
        let fixedOperation = display.split('×').join('*');
        fixedOperation = fixedOperation.split('÷').join('/');
        fixedOperation = fixedOperation.split(',').join('.');

        result = rounder(String(eval(fixedOperation)));
      } catch (err) {
        console.log(err);
      }
      setState({
        display,
        result,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Display state={state} />
      <Buttons operation={handleOperation} />
    </View>
  );
};

export default memo(Calculator);
