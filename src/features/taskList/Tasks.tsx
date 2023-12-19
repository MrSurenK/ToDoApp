import { useSelector, useDispatch } from "react-redux";
import { selectTask, pending } from "./taskFormSlice";

const Tasks = () => {
  const toDo = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div>
        {toDo
          .slice(0) // Creates a shallow copy of the toDo array
          .reverse()
          .map((task: string, i: number) => (
            <div key={i}>
              {task}
              <div className="inline-block">
                <input
                  name="task"
                  value="incomplete"
                  type="checkbox"
                  onClick={() => dispatch(pending())}
                ></input>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tasks;
