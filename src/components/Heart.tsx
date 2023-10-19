import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Path, Svg } from 'react-native-svg';

const Heart = ({ width = 500, height = 500, color = 'red' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        // d="M16 5C12.8 5 10 7.8 10 11C10 12.7 11.2 15 14 17L16 19L18 17C20.8 15 22 12.7 22 11C22 7.8 19.2 5 16 5zM28 7C28 4.2 25.8 2 23 2C21.3 2 19.6 2.8 18.6 4.3L16 7L13.4 4.3C12.4 2.8 10.7 2 9 2C6.2 2 4"
        fill={color}
      />
    </Svg>
  );
};

export default Heart
