import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {},
  toggleMode: () => {},
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);

  function toggleMode() {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  }

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}