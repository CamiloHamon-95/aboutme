import React from 'react';
import { NavBar } from '../NavBar';
import { MainSection } from '../MainSection';
import { TodoContext } from '../TodoContext';

function AppUI() {

  const {
    theme,
    setTheme,
    menuState,
    setMenuState
  } = React.useContext(TodoContext);

  
  return (
    <>
      <NavBar 
        theme={theme}
        setTheme={setTheme}
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <MainSection 
        theme={theme}
      />
    </>
  );
}

export { AppUI };
