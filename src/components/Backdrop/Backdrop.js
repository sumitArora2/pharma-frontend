import React from "react";
import classes from "./Backdrop.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openBackdrop,
  showSearchNavigation,
} from "../../actions/backdropActions";
const Backdrop = (props) => {
  const dispatch = useDispatch();
  const showbackdrop = useSelector((state) => state.showBackdrop);
  const searchNavigation = useSelector((state) => state.showSearchNav);
  const { showNav } = searchNavigation;
  const { show, type } = showbackdrop;
  const closeBackdrop = () => {
    dispatch(openBackdrop({ type: type, show: !show }));
    if (type == "searchBackdrop") {
      dispatch(showSearchNavigation({ showNav: !showNav }));
    }
  };
  return show ? (
    <div
      className={
        type == "drawerBackdrop"
          ? classes.drawerBackdrop
          : classes.searchBackdrop
      }
      onClick={() => closeBackdrop()}
    ></div>
  ) : null;
};

export default Backdrop;
