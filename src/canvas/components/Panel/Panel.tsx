import { Close } from '@mui/icons-material';
import React from 'react';
import { useGlobalContext } from '~/store/context';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}

const Panel = (props: Props) => {
  const { isShowPanel, setShowPanel } = useGlobalContext();
  const { title, children } = props;
  return (
    <>
      {isShowPanel && (
        <div {...props} className={`flex h-full w-panel-width flex-row justify-around bg-navbar p-2`}>
          <div className="flex flex-col items-center space-y-3  border-b border-solid text-white">{title}</div>
          <div>
            <button className="flex-1 text-white" onClick={() => setShowPanel(false)}>
              <Close></Close>
            </button>
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export default Panel;
