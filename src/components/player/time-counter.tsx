import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { setActivePlayerTimer, setActivePlayer } from '../../store/counterSlice'
import { useAppSelector } from '../../hooks/hooks';
import { formattedTimestamp } from '../../utils/time-utils';

function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef(new Function());

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}

type TimeCounterProps = {
  color: string,
  playerNumber: number
}

const TimeCounter = (props: TimeCounterProps) => {
  const [timeStamp, setTimeStamp] = useState(1380);
  const active = useAppSelector((state) => {
    return state.counter.activePlayerNumber === props.playerNumber;
  });
  const paused = useAppSelector((state) => {
    return state.counter.timerPaused;
  });
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setActivePlayerTimer(timeStamp));
  }, [timeStamp]);

  useInterval(() => {
    if (active && !paused) {
      setTimeStamp(timeStamp - 1);
    }
  }, 1000);

  const startCount = () => {
    dispatch(setActivePlayer({number: props.playerNumber, color: props.color, paused: !paused}));
  }

  return (
    <TouchableHighlight onPress={startCount} style={styles.container}>
      <Text style={[styles.timeText, { color: props.color }]}>{formattedTimestamp(timeStamp)}</Text>
    </TouchableHighlight>
  );
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
    fontSize: 40
  }
});

export default TimeCounter;