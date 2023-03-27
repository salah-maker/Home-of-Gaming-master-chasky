
import "./App.scss";

import { BrowserRouter ,Route,Routes,NavLink } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Bootcamp from "./components/pages/bootcamp/bootcamp";


function App() {
  return (
    <>
 
      <NavBar />
      <Footer/>

   
    </>
  );
}

export default App;
