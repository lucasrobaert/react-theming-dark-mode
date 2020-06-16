import React from "react";

const defaultMode = 'dark';

export const ManageThemeContext = React.createContext({
  mode: defaultMode,
  toggle: () => { }
});

export const useTheme = () => React.useContext(ManageThemeContext);

export const ThemeManager = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: defaultMode
  });

  const toggle = () => {
    setThemeState({ mode: (themeState.mode === 'light' ? `dark` : `light`) });
  }

  return (
    <ManageThemeContext.Provider value={{
      mode: themeState.mode,
      toggle: toggle
    }}>
      {children}
    </ManageThemeContext.Provider>
  );
}