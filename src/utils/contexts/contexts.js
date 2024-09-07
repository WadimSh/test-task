import { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState({});

  return (
    <StateContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </StateContext.Provider>
  );
};