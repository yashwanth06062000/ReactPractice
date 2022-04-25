import React, { useState ,useRef} from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import Classes from "./AddUser.module.css";
import Error from "../Ui/Error";

export default (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Is_valid,setIsvalid] = useState(false);
  const [error, setError] = useState("An error Occured!");
  const [Message, setMessage] = useState("Something went Wrong");
  const Collage= useRef();

  const nameHandler = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
  const addSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError("Something Went wrong")
      setMessage("Name or Age is missing")
      setIsvalid(true)
      setName("");
      setAge("");
      
      return;
    }
    if (+age <= 0) {
        setError("Something Went wrong")
        setMessage("Age is <0")
        setIsvalid(true)
        setName("");
        setAge("");
      return;
    }
    const collage= Collage.current.value;
    props.addingHandler(name, age,collage);

    setName("");
    setAge("");
    Collage.current.value=''
  };
  const clickHandler=()=>{
      setIsvalid(false)
  }

  return (
    <div>
     { Is_valid && <Error Error={error} message={Message} onclickokay={clickHandler}></Error>}
      <Card className={Classes.input}>
        <form onSubmit={addSubmitHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameHandler}
          ></input>
          <label htmlFor="Age">Age:</label>
          <input type="text" id="age" value={age} onChange={ageHandler}></input>
          <label htmlFor="Collage">Collage:</label>
          <input type="text" id="Collage" ref={Collage}></input>
          <Button type={"onSubmit"} title={"Add User"}></Button>
        </form>
      </Card>
    </div>
  );
};
