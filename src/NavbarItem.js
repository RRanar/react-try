import React from "react";

export default function NavbarItem(props){
    return (
       <a href={props.link.link} key={props.link.id}>
           <span key={props.link.id}>{props.link.title}</span>
       </a>
    );
}