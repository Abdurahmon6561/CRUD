import "tailwindcss/tailwind.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layoutt from "./pages/Layout";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layoutt />
              </ProtectedRoute>
            }
          >
            <Route path="categories" element={<CategoryPage />} />
            <Route path="product" element={<ProductPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
