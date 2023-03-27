import "./App.scss";
import Bootcamp from "./components/pages/bootcamp/bootcamp";

import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer/index";

function App() {
  return (
    <>
      <NavBar />
      <Bootcamp />
      <Footer />
    </>
  );
}

export default App;
