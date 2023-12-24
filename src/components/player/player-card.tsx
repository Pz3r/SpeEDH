import React, { useEffect, useRef, useState } from 'react';

import {
  StyleSheet,
  View
} from 'react-native'

import Swiper from 'react-native-swiper'

import LifeCounter from './life-counter';
import TimeCounter from './time-counter';

type PlayerCardProps = {
  playerNumber: number,
  totalPlayers: number
}

const PlayerCard = (props: PlayerCardProps) => {

  const others = useRef([2, 3, 4]);
  const [playerColor, setPlayerColor] = useState('white');

  useEffect(() => {
    let otherPlayers = getOtherPlayers(props.playerNumber);
    others.current = otherPlayers;
    setPlayerColor(getPlayerColor(props.playerNumber));
  }, []);

  const getPlayerColor = (playerNumber: number): string => {
    switch (playerNumber) {
      case 1:
        return 'red';
      case 2:
        return 'green';
      case 3:
        return 'blue';
      case 4:
        return 'purple';
    }
    return 'cian';
  }

  const getOtherPlayers = (playerNumber: number): Array<number> => {
    let others = [];
    for (let i = 1; i <= props.totalPlayers; i++) {
      if (i !== playerNumber)
        others.push(i);
    }
    return others;
  }

  return (
    <Swiper showsPagination={false}>
      <View key={1} style={[styles.containerFront]}>
        <LifeCounter isSelf={true} initialLife={40} color={playerColor} />
      </View>

      <View key={2} style={[styles.containerBack]}>
        <LifeCounter isSelf={false} initialLife={0} color={'grey'} />
        {others.current.map((playerNumber, count) =>
          <LifeCounter key={count} isSelf={false} initialLife={0} color={getPlayerColor(playerNumber)} />
        )}
      </View>

      <View key={3} style={[styles.containerFront]}>
        <TimeCounter playerNumber={props.playerNumber} color={playerColor} />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  containerFront: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  containerBack: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
});

export default PlayerCard;