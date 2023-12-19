import { useSelector } from "react-redux";
import { selectTask } from "./taskFormSlice";

const Tasks = () => {
  const toDo = useSelector(selectTask);
  return (
    <div className="mt-10 flex flex-col space-y-8 items-center justify-center">
      <div>
        {toDo.map((task, i) => (
          <div key={i}>{task}</div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
