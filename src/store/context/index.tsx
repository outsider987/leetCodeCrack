import React, { SetStateAction, createContext, useContext, useState, Dispatch, ReactNode } from 'react';
import { Tools } from '~/canvas/ImageEditor/Tool';
const state = {
  isShowPanel: false,
  setShowPanel: (value) => {},
  mode: '' as keyof typeof Tools,
  setMode: (value) => {},
};

const GlobalContext = createContext<typeof state>(state);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isShowPanel, setShowPanel] = useState(false);
  const [mode, setMode] = useState<keyof typeof Tools>(null);

  return (
    <GlobalContext.Provider value={{ isShowPanel, setShowPanel, mode, setMode }}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default ContextProvider;
