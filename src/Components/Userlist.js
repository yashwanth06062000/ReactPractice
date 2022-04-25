import React, { useState } from "react";
import Card from "../Ui/Card";
import UserComponents from "./UserComponents";
import Classes from "./AddUser.module.css"

export default function Userlist(props) {
  return (
  <Card className={Classes.input}>
      <ul>
        {props.userslist.map((user) => (
          <li key={user.key}>
            <UserComponents name={user.name} age={user.age} collage={user.collage}></UserComponents>
          </li>
        ))}
      </ul>
      </Card>
 
  );
}
