import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Register";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
