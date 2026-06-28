import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="h-full w-full">
      <Header />
      <main className="h-full p-2">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
