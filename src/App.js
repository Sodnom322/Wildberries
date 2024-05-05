import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Login from "./pages/Login/Login.jsx";
import Basket from "./pages/basket/Basket.jsx";
import Home from "./pages/Home/Home.jsx";
import Picked from "./pages/Pickboots/Picked.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/:id" element={<Picked />} />
      </Routes>
    </>
  );
}

export default App;
