import React, { useState, useEffect } from "react";
// import Aux from '../Auxs/Aux';
import classes from "./Header.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import { openBackdrop } from "../../actions/backdropActions";

const Header = (props) => {
  const showbackdrop = useSelector((state) => state.showBackdrop);
  const { show, type } = showbackdrop;
  const dispatch = useDispatch();

  const sideDrawerToggleHandler = () => {
    dispatch(openBackdrop({ type: "drawerBackdrop", show: !show }));
  };

  return (
    <>
      <Toolbar
        history={props.history}
        drawerToggleClicked={() => sideDrawerToggleHandler()}
      />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Header;
