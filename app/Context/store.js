"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
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
  const [sidenavWidth, setSidenavWidth] = useState("20vw");
  const [tooltip, setTooltip] = useState(false);
  const [mobileview, setMobileview] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setOpen(false);
      setPageWidth("95vw");
      setTooltip(false);
    } else {
      setOpen(true);
      setPageWidth("80vw");
      
    }
  }, []);
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
        sidenavWidth,
        setSidenavWidth,
        tooltip,
        setTooltip,
        mobileview,
        setMobileview,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
