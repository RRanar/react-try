import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar(props){
    const items = props.links.map(link => (<NavbarItem link={link} />));
    return (
      <div className="navbar">
          <span>{props.title}</span>
          <div className="nav-items">
              { items }
          </div>
      </div>
    );
}