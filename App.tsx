/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux'

import PlayerCard from './src/components/player/player-card';
import { store } from './src/store/store'
import ActiveTimer from './src/components/main/active-timer';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          hidden={true}
        />

        <View style={styles.containerRow}>
          <View style={{ flex: 1 }}>
            <PlayerCard playerNumber={1} totalPlayers={4}></PlayerCard>
          </View>
          <View style={{ flex: 1 }}>
            <PlayerCard playerNumber={2} totalPlayers={4}></PlayerCard>
          </View>
        </View>

        <View style={styles.containerRow}>
          <View style={{ flex: 1 }}>
            <PlayerCard playerNumber={3} totalPlayers={4}></PlayerCard>
          </View>
          <View style={{ flex: 1 }}>
            <PlayerCard playerNumber={4} totalPlayers={4}></PlayerCard>
          </View>
        </View>

        <ActiveTimer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default App;
