import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

type LifeCounterProps = {
  initialLife: number,
  isSelf: boolean,
  color: string
}

function useCounter(initialCount = 0, onReset: Function) {
  const [count, setCount] = useState(initialCount);

  const reset = useCallback(() => {
    setCount(initialCount);
    onReset && onReset();
  }, [initialCount, onReset]);

  return { count, setCount, reset };
}

const LifeCounter = (props: LifeCounterProps) => {
  const { count, setCount, reset } = useCounter(props.initialLife, () => {

  });

  const onPlusPress = () => {
    setCount(count + 1);
  }

  const onMinusPress = () => {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.actionContainer} onPress={onPlusPress}>
        <Text style={styles.actionText}>+</Text>
      </TouchableHighlight>
      <View style={styles.lifeContainer}>
        <Text style={[styles.lifeText, { color: props.color}]}>{count}</Text>
      </View>
      <TouchableHighlight style={styles.actionContainer} onPress={onMinusPress}>
        <Text style={styles.actionText}>-</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  actionContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  lifeContainer: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center'
  },
  lifeText: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60
  },
  actionText: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default LifeCounter;


