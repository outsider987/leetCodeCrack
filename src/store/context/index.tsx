import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Tools } from '~/canvas/ImageEditor/Tool';
import { initialGlobalState } from '~/utils/initializeState';
import useGlobalStateHook from './hooks/useGlobalStateHook';

const state = {
  isShowPanel: false,
  setShowPanel: (value) => {},
  mode: '' as keyof typeof Tools,
  setMode: (value) => {},
  globalState: initialGlobalState,
  setGlobalState: (value: typeof initialGlobalState) => {},
};

const GlobalContext = createContext<typeof state>(state);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isShowPanel, setShowPanel] = useState(false);
  const [mode, setMode] = useState<keyof typeof Tools>(null);
  const { globalState, setGlobalState } = useGlobalStateHook();

  return (
    <GlobalContext.Provider value={{ isShowPanel, setShowPanel, mode, setMode, globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default ContextProvider;
