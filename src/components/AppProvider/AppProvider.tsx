import React, {
  FC,
  ReactNode,
  createContext,
  useReducer,
  useContext,
} from 'react';

export const AppStateContext = createContext<any>(null);

interface AppProviderProps {
  children: ReactNode;
  store: {
    reducer: any;
    initialState: any;
  };
}

const AppProvider: FC<AppProviderProps> = ({ store, children }) => (
  <AppStateContext.Provider
    value={useReducer(store.reducer, store.initialState)}
  >
    {children}
  </AppStateContext.Provider>
);

export const useAppState = () => useContext(AppStateContext);

export default AppProvider;
