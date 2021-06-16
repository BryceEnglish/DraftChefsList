import React from 'react';
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Dowitem from './components/Dowitem';

export default function App() {
  return (
    <View style={styles.container}>
      <Dowitem
       DOW={'Sunday'}
       bkfstName={'Eggs Benedict'}
       bkfstCal={'300'}
       lnchName={'Cob Salad'}
       lnchCal={'250'}
       dnnrName={'Steak'}
       dnnrCal={'1200'}
       recipeCalories='1200'>
       </Dowitem>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});