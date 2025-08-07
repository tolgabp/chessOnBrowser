import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-800 px-2
      sm:px-4">
        <Board />
      </div>
    </>
  );
}

export default App;