import { useSelector } from "react-redux";
import { selectCounter } from "./taskFormSlice";

const Counter = () => {
  const count = useSelector(selectCounter);

  return <div className="flex justify-center">Completed Tasks: {count} </div>;
};

export default Counter;
