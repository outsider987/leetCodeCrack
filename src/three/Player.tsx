import { useRef } from 'react';
import React from 'react';
export const Player = ({ setPlayer }) => {
  //give our app reference to this player object
  const player = useRef();
  setPlayer(player);

  return (
    <mesh ref={player}>
      <boxBufferGeometry attach={'geometry'} />
      <meshLambertMaterial attach={'material'} color={'orange'} />
    </mesh>
  );
};
