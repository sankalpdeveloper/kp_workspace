import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import NavbarMain from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <NavbarMain />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/product/addproduct' element={<AddProduct/>} />
        <Route path='/product/updateproduct' element={<UpdateProduct/>} />
      </Routes>
    </>
  );
}

export default App;
