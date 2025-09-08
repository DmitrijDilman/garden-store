import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element= {<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};
