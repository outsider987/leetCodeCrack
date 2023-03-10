import React, { SetStateAction, createContext, useContext, useState, Dispatch, ReactNode } from 'react';
const state = {
  isShowPanel: false,
  setShowPanel: (value) => {},
};

const GlobalContext = createContext<typeof state>(state);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isShowPanel, setShowPanel] = useState(false);

  return <GlobalContext.Provider value={{ isShowPanel, setShowPanel }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);

export default ContextProvider;
