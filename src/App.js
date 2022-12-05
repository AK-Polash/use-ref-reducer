import React from "react";
import BoxItem from "./components/boxItem/BoxItem";
import UseRefDemo from "./components/useRefDemo/UseRefDemo";
import UseReducerDemo from "./components/useReducerDemo/UseReducerDemo";
import "./App.css";

function App() {
  return (
    <>
      <div className="box">
        {/* <BoxItem /> */}

        {/* <UseRefDemo /> */}

        <UseReducerDemo />
      </div>
    </>
  );
}

export default App;
