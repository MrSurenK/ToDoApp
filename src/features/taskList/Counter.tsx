import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "./taskFormSlice";

const Counter = () => {
  const count = useSelector(selectCounter);

  return <div>Completed Tasks: {count} </div>;
};

export default Counter;
