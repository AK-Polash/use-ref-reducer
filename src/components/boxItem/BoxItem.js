import React, { useEffect, useRef, useState } from "react";
import "./boxItem.css";

const BoxItem = () => {
  let [name, setName] = useState("Name");
  let count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="enter your name"
        className="input_name"
      />
      <h1 className="heading"> {count.current} </h1>
      <h1 className="heading"> {name} </h1>
    </>
  );
};

export default BoxItem;
