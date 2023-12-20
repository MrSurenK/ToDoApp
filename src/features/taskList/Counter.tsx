import { useSelector } from "react-redux";
import { selectCounter } from "./taskFormSlice";

const Counter = () => {
  const count = useSelector(selectCounter);

  return (
    <div className="flex justify-center rounded-2xl bg-cyan-500 w-fit m-auto p-4 text-white font-bold">
      Completed Tasks: {count}
    </div>
  );
};

export default Counter;
