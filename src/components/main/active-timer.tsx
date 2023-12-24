import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks/hooks';
import { setTimerPaused } from '../../store/counterSlice'
import { formattedTimestamp } from '../../utils/time-utils';

const ActiveTimer = () => {
  const count = useAppSelector((state) => {
    return state.counter.activePlayerTimer;
  });
  const color = useAppSelector((state) => {
    return state.counter.activePlayerColor;
  });
  const paused = useAppSelector((state) => {
    return state.counter.timerPaused;
  });
  const dispatch = useDispatch();

  const onCountTextPress = () => {
    dispatch(setTimerPaused(!paused));
  }

  return (
    <View pointerEvents='box-none' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={onCountTextPress} style={[styles.timeText, { color }]}>{formattedTimestamp(count)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  timeText: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default ActiveTimer;