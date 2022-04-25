import React, {useState}from 'react';
import AddingUsers from './Components/AddingUsers';
import Userlist from './Components/Userlist';



function App() {
  const [userlist, setuserList] = useState([]);
  const userlistHandler = (name, age,collage) => {
    setuserList([...userlist, { name: name, age: age ,key:Math.random().toString(),collage:collage}]);
  };
 
  return (
    <div>
      <AddingUsers addingHandler={userlistHandler}></AddingUsers>
      <Userlist userslist={userlist}></Userlist>

    </div>
  );
}

export default App;
