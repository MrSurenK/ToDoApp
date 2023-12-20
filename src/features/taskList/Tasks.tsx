import { useSelector, useDispatch } from "react-redux";
import { selectTask, pending, del } from "./taskFormSlice";
import Counter from "./Counter";

const Tasks = () => {
  const toDo = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-500 w-full space-y-4 justify-center flex flex-col sm:w-5/12">
      {toDo
        .slice(0) // Creates a shallow copy of the toDo array
        .reverse()
        .map((item, i: number) => {
          if (item.completion === false) {
            return (
              <div key={i} className="bg-purple-500 relative">
                <span className="ml-5">{item.name}</span>
                <div className="inline-flex absolute right-0 bottom-0">
                  <input
                    name="task"
                    value="incomplete"
                    type="checkbox"
                    onClick={() => dispatch(pending(item.name))}
                    className=""
                  ></input>
                  <div className="ml-2 bg-red-700 px-2 py-0 text-white shadow-lg hover:shadow-red-950">
                    <button onClick={() => dispatch(del(toDo.length - 1 - i))}>
                      x
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={i}>
                <del>{item.name}</del>
                <div className="inline-block fixed">
                  <input
                    name="task"
                    value="complete"
                    type="checkbox"
                    onClick={() => dispatch(pending(item.name))}
                  ></input>
                </div>
              </div>
            );
          }
        })}
      <Counter />
    </div>
  );
};

export default Tasks;
