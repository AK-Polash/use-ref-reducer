import React, { useEffect, useRef } from "react";
import "./useRefDemo.css";

const UseRefDemo = () => {
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    inputRef.current.style.background = "crimson";

    let nameValue = inputRef.current.value;
    console.log(nameValue);
  };

  return (
    <>
      <div className="box">
        <input
          className="input_name"
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default UseRefDemo;
