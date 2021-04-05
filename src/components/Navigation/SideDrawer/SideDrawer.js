import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../../components/Backdrop/Backdrop";
import { useSelector } from "react-redux";

const SideDrawer = () => {
  const showbackdrop = useSelector((state) => state.showBackdrop);
  const { show, type } = showbackdrop;
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (show == true && type == "drawerBackdrop") {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div>
      <Backdrop />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
