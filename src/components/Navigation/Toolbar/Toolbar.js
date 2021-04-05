import React, { useState } from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { useDispatch, useSelector } from "react-redux";
import {
  openBackdrop,
  showSearchNavigation,
} from "../../../actions/backdropActions";
const Toolbar = (props) => {
  console.log("props", props);

  const dispatch = useDispatch();
  const searchNavigation = useSelector((state) => state.showSearchNav);
  const showbackdrop = useSelector((state) => state.showBackdrop);
  const { type } = showbackdrop;

  const { showNav } = searchNavigation;

  const searchView = () => {
    dispatch(openBackdrop({ type: "searchBackdrop", show: !showNav }));
    dispatch(showSearchNavigation({ showNav: !showNav }));
  };
  return (
    <header className={classes.Toolbar}>
      {!showNav ? <DrawerToggle clicked={props.drawerToggleClicked} /> : ""}
      {/* <div className={classes.MobileOnly}>
        <h1>LRP</h1>
        </div> */}
      <div className={classes.MobileOnly}>
        {/* <p className={classes.search}>Search</p> */}
        <span onClick={() => searchView()}>
          <i
            class="fa fa-search"
            aria-hidden="true"
            style={{ fontSize: "30px", color: "white" }}
          ></i>
        </span>
      </div>
      {showNav ? (
        <div className={classes.MobileOnly}>
          <input type="text" placeholder="Search items here"></input>
        </div>
      ) : (
        ""
      )}
      {!showNav ? (
        <div className={classes.Logo}>
          <Logo />
        </div>
      ) : (
        <span onClick={() => searchView()}>
          <i
            class="fa fa-times"
            aria-hidden="true"
            style={{ fontSize: "30px", color: "white" }}
          ></i>
        </span>
      )}
      <nav className={classes.DesktopOnly}>
        <NavigationItems history={props.history} />
      </nav>
    </header>
  );
};

export default Toolbar;
