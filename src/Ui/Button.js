import React from 'react'
import Classes from "./Button.module.css"
export default (props)=>{
return ( <button type={props.type} className={Classes.button} onClick={props.onClick}>{props.title}</button>)
}