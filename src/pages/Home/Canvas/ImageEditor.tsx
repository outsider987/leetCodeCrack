import React, { useEffect, useRef } from 'react';
import CanvasImageEditor from '~/components/ImageEditor/CanvasImageEditor';

const ImageEditor = () => {
  return (
    <div className="relative m-auto flex w-full flex-col items-center justify-center">
      <CanvasImageEditor className=" h-[100vh] w-[80vw] border border-solid border-white" />
    </div>
  );
};

export default ImageEditor;
