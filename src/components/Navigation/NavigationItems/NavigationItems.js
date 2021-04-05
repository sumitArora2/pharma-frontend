import React, { useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  Form,
  FormControl,
} from "react-bootstrap";
import classes from "./NavigationItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";
const NavigationItems = ({ history }) => {
  const [keyword, setkeyword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const submitHandler = () => {
    // e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/`);
    }
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <ul className={classes.NavigationItems}>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Navbar.Brand>LRP</Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/categories">
          <Nav.Link>Categories</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={keyword}
          onChange={(e) => setkeyword(e.target.value)}
        />
        <Button variant="outline-success" onClick={() => submitHandler()}>
          Search
        </Button>
      </Form>
      <Nav className="ml-auto">
        <LinkContainer to="/cart">
          <Nav.Link>
            <i className="fas fa-shopping-cart"></i> Cart
          </Nav.Link>
        </LinkContainer>
      </Nav>
      {userInfo && userInfo.isAdmin && (
        <NavDropdown title="Admin" id="adminmenu">
          <LinkContainer to="/admin/userlist">
            <NavDropdown.Item className={classes.dropdownItems}>
              Users
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/admin/categorylist">
            <NavDropdown.Item className={classes.dropdownItems}>
              Categories
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/admin/productlist">
            <NavDropdown.Item className={classes.dropdownItems}>
              Products
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/admin/orderlist">
            <NavDropdown.Item className={classes.dropdownItems}>
              Orders
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/admin/messages">
            <NavDropdown.Item className={classes.dropdownItems}>
              Messages
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      )}
      {!userInfo ? (
        <NavDropdown title="Login" id="username">
          <LinkContainer to="/login">
            <NavDropdown.Item className={classes.dropdownItems}>
              Login
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/register">
            <NavDropdown.Item className={classes.dropdownItems}>
              Register
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      ) : (
        <NavDropdown title={userInfo.name} id="username">
          <LinkContainer to="/profile">
            <NavDropdown.Item className={classes.dropdownItems}>
              Profile
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item
            onClick={logoutHandler}
            className={classes.dropdownItems}
          >
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      )}
    </ul>
  );
};

export default NavigationItems;
