import React from "react";
import { BrowserRouter,Route,Routes,NavLink } from "react-router-dom";
import Logo from "/img/logo.png"
import "./index.scss"
import Bootcamp from "../../pages/bootcamp/bootcamp";
import Tarif from "../../pages/tarif/tarif";
import ContactPage from "../../pages/contact/Contact"
import Home from "../../pages/Home/index"
import Sign from "../../pages/signup/Sign";


const NavBar = () => {
  return (
    <BrowserRouter>
    <>
 <div className="container-xl" >
      <nav className="navbar navbar-expand-lg" id="navbar" style={{marginBottom:'150px'}} >
        <div className="container">
          <a className="navbar-brand" href="index.html" id="logo">
            <span>
              <img src={Logo} alt="" width="100" />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
             <ul className="ul-1 navbar-nav me-auto">
             <li className="nav-item">
                
                <NavLink className="nav-link active" to="/" exact>
                  {" "}
                  ACCEUIL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/BOOTCAMP">
                  BOOTCAMP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/RESERVATION">
                  RESERVATION
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/CONTACT">
                  CONTACT
                </NavLink>
              </li>
            </ul>
           

           <NavLink to="/Sign"> <button  type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">

              JE MABONNE
            </button>
            </NavLink>

            <span className="user">
              <a href="">
                <img src="./user.png" width="30" alt="" />
              </a>
            </span>
          </div>
        </div>



        
        
      </nav>
      <Routes>
      <Route path="/" element={< Home/>}/>
        <Route path="/BOOTCAMP"exact element={< Bootcamp/>}/>
        <Route path="/RESERVATION" element={< Tarif/>}/>
        <Route path="/CONTACT" element={< ContactPage/>}/>
        <Route path="/Sign" element={< Sign/>}/>
     
      </Routes>
      
      </div>
      
    </>
    </BrowserRouter>
  );
};

export default NavBar;
