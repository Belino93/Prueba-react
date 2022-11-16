import "./App.css";
import CharactersReq from "./components/CharactersReq/CharactersReq";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./containers/User/Register/Register";
import DetailsCard from "./components/DetailsCard/DetailsCard";
import Login from "./containers/User/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/characters"} element={<CharactersReq />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/characterDetails"} element={<DetailsCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
