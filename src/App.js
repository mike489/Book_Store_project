import { Route, Routes, redirect } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Register";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import Retailer from "./pages/retailer";
import AddBook from "./pages/UploadBook";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const { users } = useSelector((state) => state.user);
  return (
    <div>
      <Routes>
        <Route path="/" element={users?<Home /> : redirect("/login")} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Search" element={<Search />} />
        <Route path="//ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/retailer" element={<Retailer/>} />
        <Route path="/upload" element={<AddBook/>} />
      </Routes>
    </div>
  );
}

export default App;
