import React, { useEffect, useRef } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Canvas from '~/components/Canvas';
import HomeWrapper from '~/layouts/HomeWrapper';

const Chart = () => {
  return <Canvas />;
};

export default Chart;
