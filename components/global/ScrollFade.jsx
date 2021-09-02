import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export const ScrollFade = ({ top = true, position = { top: 0 }, height = 10 }) => {
  const colors = top ? ['rgba(f,f,f,0.8)', 'transparent'] : ['transparent', 'rgba(f,f,f,0.8)'];

  return (
    <LinearGradient
      colors={colors}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        ...position,
        height,
        zIndex: 10,
      }}
    />
  );
};

export default ScrollFade;
