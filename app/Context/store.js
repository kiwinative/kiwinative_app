"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const GlobalContext = createContext({
  loading: false,
});

export const GlobalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [infosubmenuOpen, setInfosubmenuOpen] = useState(false);
  const [linksubmenuOpen, setLinksubmenuOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState("80vw");
  return (
    <GlobalContext.Provider
      value={{
        open,
        setOpen,
        submenuOpen,
        setSubmenuOpen,
        infosubmenuOpen,
        setInfosubmenuOpen,
        linksubmenuOpen,
        setLinksubmenuOpen,
        pageWidth,
        setPageWidth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
