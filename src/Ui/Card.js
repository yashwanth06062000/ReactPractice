import React  from "react";
import Classes from "./Card.module.css"

export default (props)=>{
    return(
    <div className={`${Classes.Card} ${props.className}`}>{props.children}</div>);
}