import React from "react";
import { addId } from "../LocalStorage/LocalStorage";

const Second = (props) => {
  const { name, email, username, id } = props.iteams;
  const addToCart = (id) => {
    //added elemenet into local storage
    addId(id);
  };
  return (
    <div>
      <h3>{name}</h3>
      <h5>{email}</h5>
      <p>{username}</p>
      <button onClick={() => addToCart(id)}>Cart</button>
    </div>
  );
};

export default Second;
