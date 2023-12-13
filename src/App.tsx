import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col space-y-8 items-center justify-center">
          <header className="text-7xl mt-80">To Do App</header>
          <form>
            <input placeholder="Enter Task"></input>
            <button className="ml-2 px-4 py-2 bg-blue-700" type="submit">
              Add
            </button>
          </form>
          <h2>Task 1</h2>
          <h2>Task 2</h2>
        </div>
      </div>
    </>
  );
}

export default App;
