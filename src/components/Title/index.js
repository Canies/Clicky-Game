import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title jumbotron header-hgt  nav-shadow neon ">{props.children}</h1>;

}
export default Title;
