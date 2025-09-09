import { Link } from "react-router-dom";
import './navbar.css';
import { useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { LoginToggle } from "../MenuToggle/LoginToggle";
import { motion } from "motion/react";



function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const { user, logout, login } = useAuth();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleShowMenu = () =>{
    setShowMenu(!showMenu)
  };

  const [showLogin, setShowLogin] = useState(false)
  
  const handleShowLogin = () =>{
    setShowLogin(!showLogin)
  };

  return (
    <div id="navbar">

      <div className="navbar-header">
        <div>
          <Link to="/home">
            <img src='../../media/logoNS/logo.png' alt="logo" className="header-icons"/>
          </Link>
        </div>

        <div className="d-flex flex-row">
          <MenuToggle toggle={handleShowMenu} isOpen={showMenu} /> 
          <LoginToggle toggle={handleShowLogin} isOpen={showLogin} />

        </div>
        
      </div>

      <div className={`navbar-login ${showLogin ? "show-login" : "hide"}`}>
        
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="visuelMenu">
            <motion.img 
              initial={{ opacity: 0, scale: 0 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{duration: 1.4 , scale: { type: "spring", visualDuration: 1 , bounce: 1 }}}
              src='../../media/doodle/happyfleur2.png' 
              alt="mascotte Nation Sound" 
              className="mascotteMenu"
            />
            <motion.img 
              initial={{ opacity: 0, scale: 0 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{duration: 0.9, scale: { type: "spring", visualDuration: 0.4}}} 
              src='../../media/doodle/paysage1.png' 
              alt="paysage" 
              className="bgMascotteMenu"
            />
          </div>
          
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2>Mon espace Nation-Sounds</h2>
              {user ? (
              <div className="login-btn d-flex flex-column ">
                
                <p>Bienvenue, {user.username} !</p>
                
                <Link to={`${baseURL}/utilisateur/dashboard/${user.id}`} className="button-style">Tableau de bord</Link>
                <button onClick={logout}>Se déconnecter</button>
              </div>
              ) : (
              <div className="login-btn d-flex flex-column ">
                  <Link to={`${baseURL}/connexion`} className="button-style">Se connecter</Link>
                  <Link to={`${baseURL}/inscription`} className="button-style">S'inscrire</Link>
              </div> 
            )}
          </div>
          
        </div>
        
        
      </div>

      <nav className={`navbar-links ${showMenu ? "show-nav" : "hide"}`}>
        <div className="visuelMenu">
            <img src='../../media/doodle/happyfleur1.png' alt="mascotte Nation Sound" className="mascotteMenu"/>
            <img src='../../media/doodle/paysage2.png' alt="paysage" className="bgMascotteMenu"/>
        </div>
      
        <ul>
          <li>
            <Link to="/programmation" className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/etoile.png' alt="Etoile" className="menu-icons"/>
              <p>PROGRAMMATION</p>
            </Link>
          </li>
          <li>
            <Link to="/concerts" className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/cassette.png' alt="cassette audio" className="menu-icons"/>
              <p>CONCERTS</p>
            </Link>
          </li>
          <li >
            <Link to='https://www.ticketmaster.fr/fr' target="_blank" rel="noreferrer" className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/happyfleur2.png' alt="fleur" className="menu-icons" />
              <p>BILLETERIE</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="fff" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16"/>
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </Link>            
          </li>
          <li>
            <Link to='/carte' className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/forme-organique1.png' alt="forme organique" className="menu-icons"/>
              <p>CARTE</p>
            </Link>
          </li>
          <li>
            <Link to='/reseaux-sociaux' className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/megaphone.png' alt="mégaphone" className="menu-icons"/>
              <p>RESEAUX SOCIAUX</p>
            </Link>
          </li>
          <li>
            <Link to='/partenaires' className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/metal.png' alt="main qui fait le symbole métal " className="menu-icons"/>
              <p>PARTENAIRE</p>
            </Link>
          </li> 
          <li>
            <Link to={`${baseURL}/contact`} className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/fleur1.png' alt="main qui fait le symbole métal " className="menu-icons"/>
              <p>CONTACT</p>
            </Link>
          </li>
          <li>
            <Link to='/FAQ' className="links" onClick={handleShowMenu}>
              <img src='../../media/doodle/forme-organique4.png' alt="forme organique" className="menu-icons"/>
              <p>FAQ</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;