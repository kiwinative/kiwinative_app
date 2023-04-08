"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const GlobalContext = createContext({
  loading: false,
});

export const GlobalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);
  const [active, setActive] = useState("");
  const [blur, setBlur] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [infosubmenuOpen, setInfosubmenuOpen] = useState(false);
  const [linksubmenuOpen, setLinksubmenuOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState("80vw");
  const [sidenavWidth, setSidenavWidth] = useState("20vw");
  const [tooltip, setTooltip] = useState(false);
  const [mobileview, setMobileview] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 976) {
      setOpen(false);
      setPageWidth("95vw");
      setTooltip(false);
    } else {
      setOpen(true);
      setPageWidth("80vw");
    }
  }, []);

  return (
    <ThirdwebProvider activeChain={ChainId.BinanceSmartChainMainnet} dAppMeta={{
      name: "KiwiNative",
      description: "Kiwinative is a web3 based project that focuses on enhancing peer to peer transactions and improves usability and profitability.",
      logoUrl: "https://kiwinative.pro/logo.png",
      url: "https://kiwinative.pro",
    }}>
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
        menuToggle,
        setMenuToggle,
        active, 
        setActive,
        blur,
        setBlur,
      }}
    >
      {children}
    </GlobalContext.Provider>
    </ThirdwebProvider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
