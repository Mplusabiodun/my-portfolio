import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Button, Icon } from "semantic-ui-react";

import file from "./../assets/file.png";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <Menu secondary pointing>
      <Menu.Item as={Link} to="/">
        HOME
      </Menu.Item>
      <Menu.Item as={Link} to="/About">
        ABOUT
      </Menu.Item>
      <Menu.Item as={Link} to="/Contact">
        CONTACT
      </Menu.Item>
      <Menu.Item position="right">
        <a
          href="./../assets/Fatai Monsuru Abiodun.pdf"
          download
          className={classes.file}
        >
          <img src={file} alt="" />
        </a>
        <Button as={Link} to="/Portfolio" color="black">
          PORTFOLIO
        </Button>
      </Menu.Item>
    </Menu>
  );
}
