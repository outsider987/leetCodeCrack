import React, { useEffect, useRef } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Canvas from '~/components/Canvas';
import HomeWrapper from '~/layouts/HomeWrapper';

const Chart = () => {
  return (
    <div className="m-auto flex justify-center">
      <Canvas className="h-[50vh] w-[50vh]" />
    </div>
  );
};

export default Chart;
