import React from "react";
import Card from "../Ui/Card";
import Classes from "./AddUser.module.css"
export default (props) => {
  return (
    <Card className={Classes.usercomponent} >
      {props.name}
      ({props.age} Years Old)
      {props.collage}
    </Card>
  );
};
