import { Close } from '@mui/icons-material';
import React, { useMemo } from 'react';
import { useGlobalContext } from '~/store/context';
import BrushPanel from './Brush/BrushPanel';
import { Tools } from '~/canvas/ImageEditor/Tool';
import { LAYOUT_SIZE } from '~/utils/canvas/constants';
import BrushTool from '~/canvas/ImageEditor/Tool/Brush';
import PanTool from '~/canvas/ImageEditor/Tool/Pan';
import EraseTool from '~/canvas/ImageEditor/Tool/Erase';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
  mode: string;
  tool: any;
}

const Panel = (props: Props) => {
  const { isShowPanel, setShowPanel } = useGlobalContext();
  const { PANEL_WIDTH } = LAYOUT_SIZE;
  const { title, children, mode, tool } = props;

  const panel = useMemo(() => {
    switch (mode) {
      case BrushTool.name:
        return <BrushPanel tool={tool}></BrushPanel>;

      case PanTool.name:
        return <></>;

      case EraseTool.name:
        return <></>;

      default:
        return <></>;
    }
  }, [tool]);

  return (
    <>
      {isShowPanel && (
        <div className={`h-full flex-1 flex-col max-w-[${PANEL_WIDTH}]`}>
          {/*Pqnnel */}
          <div {...props} className={`flex  flex-row justify-around bg-navbar p-2`}>
            <div className="flex flex-col items-center space-y-3  border-b border-solid text-white">{title}</div>
            <div>
              <button className="flex-1 text-white" onClick={() => setShowPanel(false)}>
                <Close></Close>
              </button>
            </div>
          </div>
          {panel}
        </div>
      )}
    </>
  );
};

export default Panel;
