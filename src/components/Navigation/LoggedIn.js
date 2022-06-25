import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <NavbarItem path="/myspace" linkText="My Space" />

      <Nav.Item style={{ padding: "1rem" }}>{user?.email}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
