import UserClass from "./UserClass";
import { useState } from "react";

const User = () => {
    const {count1, setCount1} = useState(0);
    const {count2, setCount2} = useState(0);
  return (
    <div className="user-card">
      <h1>count1: {count1}</h1>
      <h2>count2: {count2}</h2>
      <h2>Name: Kakarlapudi Soumya</h2>
      <h3>Location: Germany</h3>
      <h4>Contact: email@gmail.com</h4>
    </div>
  )
};
export default User;