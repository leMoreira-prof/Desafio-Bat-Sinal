import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';
import { Login } from '../../components/Login/Login';

export function Home() {
  return (
    <View style={styles.container}>
        <Login />
    </View>
  );
}