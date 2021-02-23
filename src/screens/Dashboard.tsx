import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from '../components/Calculator';
import Background from '../components/Background';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
      <Calculator />
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
