import "./App.css";
import CharactersReq from "./components/CharactersReq/CharactersReq";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {

  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/characters'} element={<CharactersReq />}/>


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
