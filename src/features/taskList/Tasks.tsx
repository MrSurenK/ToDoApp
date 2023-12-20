import { useSelector, useDispatch } from "react-redux";
import { selectTask, pending, del } from "./taskFormSlice";
import Counter from "./Counter";

const Tasks = () => {
  const toDo = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div>
        {toDo
          .slice(0) // Creates a shallow copy of the toDo array
          .reverse()
          .map((item, i: number) => {
            if (item.completion === false) {
              return (
                <div key={i}>
                  {item.name}
                  <div className="inline-block ml-10">
                    <input
                      name="task"
                      value="incomplete"
                      type="checkbox"
                      onClick={() => dispatch(pending(item.name))}
                    ></input>
                  </div>
                  <div className="inline-block ml-2 px-1 py-0.5 bg-red-700">
                    <button onClick={() => dispatch(del(toDo.length - 1 - i))}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={i}>
                  <del>{item.name}</del>
                  <div className="inline-block">
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
