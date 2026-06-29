import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="h-full w-full bg-[#1f1f1f] text-white">
      <Header />
      <main className="h-full p-2 flex flex-col items-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
