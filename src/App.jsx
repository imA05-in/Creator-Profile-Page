import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="h-full w-full bg-[#0F1115] text-white">
      <Header />
      <main className="h-full p-2">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
