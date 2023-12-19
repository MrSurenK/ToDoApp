import { useSelector } from "react-redux";
import { selectTask } from "./taskFormSlice";

const Tasks = () => {
  const toDo = useSelector(selectTask);
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div>
        {toDo.map((task: string, i: number) => (
          <div key={i}>
            {task}
            <div className="inline-block">
              <input type="checkbox"></input>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
