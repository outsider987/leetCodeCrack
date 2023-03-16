import { Close } from '@mui/icons-material';
import React, { useMemo } from 'react';
import { useGlobalContext } from '~/store/context';
import BrushPanel from './Brush/BrushPanel';
import { LAYOUT_SIZE } from '~/utils/canvas/constants';
import BrushTool from '~/canvas/ImageEditor/Tool/Brush';
import PanTool from '~/canvas/ImageEditor/Tool/Pan';
import EraseTool from '~/canvas/ImageEditor/Tool/Erase';
import ErasePanel from './Erase/ErasePanel';
import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
  mode: string;
  tool: any;
}

const Panel = (props: Props) => {
  const { isShowPanel, setShowPanel } = useGlobalContext();

  const { title, mode, tool } = props;

  const panel = useMemo(() => {
    switch (mode) {
      case BrushTool.name:
        return <BrushPanel tool={tool}></BrushPanel>;

      case PanTool.name:
        return <></>;

      case EraseTool.name:
        return <ErasePanel tool={tool}></ErasePanel>;

      default:
        return <></>;
    }
  }, [tool]);

  const containerClass = clsx('h-full', 'flex-1', 'flex-col', 'w-panel-width');

  return (
    <>
      {isShowPanel && (
        <div className={containerClass}>
          {/*Pqnnel */}
          <div {...props} className={`bg-navbar  flex flex-row justify-around p-2`}>
            <div className="flex flex-col items-center space-y-3  border-b border-solid text-white">{title}</div>
            <div>
              <button className="flex-1 text-white" onClick={() => setShowPanel(false)}>
                <Close></Close>
              </button>
            </div>
          </div>
          <div className="p-2"> {panel}</div>
        </div>
      )}
    </>
  );
};

export default Panel;
