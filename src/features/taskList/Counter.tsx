import { useSelector } from "react-redux";
import { selectCounter } from "./taskFormSlice";

const Counter = () => {
  const count = useSelector(selectCounter);

  return (
    <div className="rounded-2xl self-center bg-cyan-500 w-fit p-4 text-white font-bold">
      Completed Tasks: {count}
    </div>
  );
};

export default Counter;
