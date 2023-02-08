import React, { useEffect, useRef } from 'react';
import CanvasImageEditor from '~/components/Chart/CanvasImageEditor';

const ImageEditor = () => {
  return (
    <div className="m-auto flex w-full flex-col items-center justify-center">
      <CanvasImageEditor className="h-[50vh] w-[65vw] border border-solid border-white " />
    </div>
  );
};

export default ImageEditor;
