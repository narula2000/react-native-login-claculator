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
    maxWidth: 300,
    minWidth: 300,
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
  const [state, setState] = useState({ display: '', result: '' });

  const handleOperation = (operation) => {
    if (operation === 'C') {
      setState({
        display: '',
        result: '',
      });
    } else if (operation === '=') {
      setState({
        display: state.result,
        result: '',
      });
    } else {
      const display = state.display + operation;
      let { result } = state;
      try {
        let fixedOperation = display.split('×').join('*');
        fixedOperation = fixedOperation.split('÷').join('/');
        fixedOperation = fixedOperation.split(',').join('.');

        result = String(eval(fixedOperation));
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
