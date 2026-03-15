import {BrowserRouter, Routes, Route} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import ProductDescription from "./pages/ProductDescription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
