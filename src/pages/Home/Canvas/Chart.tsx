import React, { useEffect, useRef } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import ChartBar from '~/components/Chart/ChartBar';
import ChartPie from '~/components/Chart/ChartPie';
import ChartStock from '~/components/Chart/Stock';
import HomeWrapper from '~/layouts/HomeWrapper';

const Chart = () => {
  return (
    <div className="m-auto flex w-full flex-col items-center justify-center">
      <ChartPie className="h-[50vh] w-[50vh]" />
      <ChartBar className="h-[50vh] w-[50vh]" />
      {/* <ChartStock className="h-[50vh] w-[50vh]" /> */}
    </div>
  );
};

export default Chart;
