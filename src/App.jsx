import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App bg-secondary flex">
      <Menu />
      <div className="flex-grow ml-[20%] p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
