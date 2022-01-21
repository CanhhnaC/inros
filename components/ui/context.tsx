import * as React from 'react';
import { ThemeProvider } from 'next-themes';

export interface State {}

const initialState = {};

type Action = any;

export const UIContext = React.createContext<State | any>(initialState);

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}

export const UIProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const value = React.useMemo(() => {}, []);

  return <UIContext.Provider value={value} {...props} />;
};

export const ManagedUIContext: React.FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
  </UIProvider>
);
