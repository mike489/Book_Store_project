import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Register from "./pages/Register";
import Search from "./pages/Search";
=======
>>>>>>> 5201b71beb3da3fd39ad442fb744b620bfd24a31

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
<<<<<<< HEAD
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Search" element={<Search />} />
=======
>>>>>>> 5201b71beb3da3fd39ad442fb744b620bfd24a31
      </Routes>
    </div>
  );
}
export default App;

