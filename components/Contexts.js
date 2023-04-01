import React, { createContext, useReducer } from "react";
import { INITIAL_STATE, menuReducer } from "./Reducer";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, INITIAL_STATE);
  return (
    <MenuContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
