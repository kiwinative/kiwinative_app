export const INITIAL_STATE = {
  open: true,
  submenuOpen: false,
  infosubmenuOpen: false,
};

export const menuReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        open: !INITIAL_STATE.open,
      };
    case "TOGGLE_SUBMENU":
      return {
        ...state,
        // user: action.payload,
        submenuOpen: !INITIAL_STATE.submenuOpen,
      };
    case "TOGGLE_INFOSUBMENU":
      return {
        ...state,
        infosubmenuOpen: !INITIAL_STATE.infosubmenuOpen,
      };
  }
};
