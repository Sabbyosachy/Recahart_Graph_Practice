import React, { useEffect, useState } from "react";
import Second from "../Second/Second";

const First = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      {product?.map((iteams) => (
        <Second key={iteams.id} iteams={iteams}></Second>
      ))}

      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default First;
