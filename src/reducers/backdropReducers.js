import { SHOW_BACKDROP, SEARCH_ENABLE } from "../constants/backdropConstants";

export const showBackdropReducer = (
  state = { type: "Drawer", show: false },
  action
) => {
  switch (action.type) {
    case SHOW_BACKDROP:
      return {
        type: action.payload.type,
        show: action.payload.show,
      };
    default:
      return state;
  }
};

export const enableSearchNavigation = (state = { showNav: false }, action) => {
  switch (action.type) {
    case SEARCH_ENABLE:
      return {
        showNav: action.payload.showNav,
      };
    default:
      return state;
  }
};
