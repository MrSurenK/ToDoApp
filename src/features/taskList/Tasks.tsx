import { useSelector, useDispatch } from "react-redux";
import { selectTask, pending, del } from "./taskFormSlice";
import Counter from "./Counter";

const Tasks = () => {
  const toDo = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <div className="w-full space-y-4 justify-center flex flex-col sm:w-5/12">
      {toDo
        .slice(0) // Creates a shallow copy of the toDo array
        .reverse()
        .map((item, i: number) => {
          if (item.completion === false) {
            return (
              <div
                key={i}
                className="bg-purple-500 saturate-150 relative ring-4 rounded-md ring-pink-500 ring-offset-slate-50 dark:ring-offset-slate-900 shadow-inner ml-2 mr-2"
              >
                <div className="ml-5 mr-5 mt-2 mb-1 font-bold">{item.name}</div>
                <div className="inline-flex absolute right-0 bottom-0">
                  <input
                    name="task"
                    value="incomplete"
                    type="checkbox"
                    onClick={() => dispatch(pending(item.name))}
                    className=""
                  ></input>
                  <div className="ml-2 bg-red-700 px-2 py-0 text-white shadow-lg hover:shadow-red-950 rounded-lg">
                    <button onClick={() => dispatch(del(toDo.length - 1 - i))}>
                      x
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="bg-purple-500 saturate-150 relative rounded-md ring-4 ring-pink-500 ring-offset-slate-50 dark:ring-offset-slate-900 shadow-inner ml-2 mr-2"
              >
                <div className="ml-5 mr-5 mt-2 mb-1">
                  <del className="font-extrabold">{item.name}</del>
                </div>
                <div className="inline-flex absolute right-0 bottom-0">
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
