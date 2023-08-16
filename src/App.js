import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Register from "./pages/Register";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/Register" element={<Register />} /> */}
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}
export default App;

