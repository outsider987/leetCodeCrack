import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
import React from 'react';

export const Ball = ({ ball }) => {
  //give game ref to ball
  //   const ref = useRef();
  //   ball.ref = ref;

  return (
    <mesh position={[ball.pos.x, ball.pos.y, 0]} ref={ball.ref}>
      <sphereGeometry args={[0.25, 16, 16]} />
      <meshLambertMaterial attach={'material'} color={'pink'} />
    </mesh>
  );
};
