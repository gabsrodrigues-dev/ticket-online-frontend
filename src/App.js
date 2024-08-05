import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TitleAndSubtitle from "./components/TitleAndSubtitle/TitleAndSubtitle";
import Page404 from "./pages/Page404/Page404";
import Home from "./pages/Home/Home";
import InformationsBasics from "./pages/informationsBasics/informationsBasics";
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
            path="/informationsBasics"
            element={
              <>
                <TitleAndSubtitle title="Informações Básicas" /> <InformationsBasics />
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
