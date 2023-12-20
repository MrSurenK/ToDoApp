import { useSelector, useDispatch } from "react-redux";
import { selectTask, pending, del } from "./taskFormSlice";
import Counter from "./Counter";

const Tasks = () => {
  const toDo = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <div className="mt-10 bg-lime-600 h-screen">
      <div className="mx-96 bg-blue-500">
        {toDo
          .slice(0) // Creates a shallow copy of the toDo array
          .reverse()
          .map((item, i: number) => {
            if (item.completion === false) {
              return (
                <div key={i} className="grid grid-cols-4 gap-4">
                  <span className="col-span-2">{item.name}</span>
                  <input
                    name="task"
                    value="incomplete"
                    type="checkbox"
                    onClick={() => dispatch(pending(item.name))}
                    className="col-span-1"
                  ></input>
                  <div className="col-span-1 ml-2 bg-red-700 px-2 py-0 text-white shadow-lg hover:shadow-red-950">
                    <button onClick={() => dispatch(del(toDo.length - 1 - i))}>
                      x
                    </button>
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
      </div>
      <Counter />
    </div>
  );
};

export default Tasks;
