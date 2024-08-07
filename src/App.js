import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TitleAndSubtitle from "./components/TitleAndSubtitle/TitleAndSubtitle";
import Page404 from "./pages/Page404/Page404";
import Home from "./pages/Home/Home";
import BasicInfos from "./pages/BasicInfos/BasicInfos";
import Products from "./pages/Products/Products"
import ProductsPurchase from "./pages/ProductPurchase/ProductPurchase";
import "./index.css"

function App() {
  return (
    <main className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TitleAndSubtitle title="Início" /> <Home />
              </>
            }
          />
          <Route
            path="/basicInfos"
            element={
              <>
                <TitleAndSubtitle title="Informações Básicas" /> <BasicInfos />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <TitleAndSubtitle title="Produtos" /> <Products />
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <TitleAndSubtitle title="Pedido" /> <ProductsPurchase />
              </>
            }
          />
          <Route
            path="*"
            element={
                <Page404 />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
