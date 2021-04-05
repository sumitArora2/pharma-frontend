import { SHOW_BACKDROP, SEARCH_ENABLE } from "../constants/backdropConstants";
export const openBackdrop = (backdrop) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_BACKDROP,
      payload: backdrop,
    });
  } catch (error) {
    console.log(error);
  }
};
export const showSearchNavigation = (searchEnable) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_ENABLE,
      payload: searchEnable,
    });
  } catch (error) {
    console.log(error);
  }
};
