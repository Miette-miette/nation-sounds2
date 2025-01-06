import { Link } from "react-router-dom";
import '../Assets/style/navbar.css'
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

//Doodles 
import logo from '../Assets/media/logoNS/logo.png';
import list from '../Assets/media/icon/list.svg';
import mascotte from '../Assets/media/doodle/happyfleur1.png';
import paysage from '../Assets/media/doodle/paysage2.png';
import programmation_doodle from '../Assets/media/doodle/etoile.png';
import concert_doodle from '../Assets/media/doodle/cassette.png';
import billeterie_doodle from '../Assets/media/doodle/happyfleur2.png';
import carte_doodle from '../Assets/media/doodle/forme-organique1.png';
import rs_doodle from '../Assets/media/doodle/megaphone.png';
import partenaire_doodle from '../Assets/media/doodle/metal.png';
import FAQ_doodle from '../Assets/media/doodle/forme-organique4.png';


function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () =>{
    setShowMenu(!showMenu)
  }
  console.log(showMenu);
  

  return (
    <div id="navbar">

      <div className="navbar-header">
        <div>
          <Link to="/home">
            <img src={logo} alt="logo" id="logo"/>
          </Link>
        </div>

        <div id="navbar-burger" onClick={handleShowMenu}>
          <img src={list} alt="icone menu" width="60" id="iconMenu"/>
        </div>
      </div>

      <nav className={`navbar-links ${showMenu ? "show-nav" : "hide"}`}>

        <div id="visuelMenu">
            <img src={mascotte} alt="mascotte Nation Sound" id="mascotteMenu"/>
            <img src={paysage} alt="paysage" id="bgMascotteMenu"/>
        </div>
      
        <ul>
          <li>
            <Link to="/programmation" className="links">
              <img src={programmation_doodle} alt="Etoile" id="logo"/>
              <p>PROGRAMMATION</p>
            </Link>
          </li>
          <li>
            <Link to="/concert" className="links">
              <img src={concert_doodle} alt="cassette audio"/>
              <p>CONCERTS</p>
            </Link>
          </li>
          <li >
            <Link to='https://www.ticketmaster.fr/fr' target="_blank" rel="noreferrer" className="links">
              <img src={billeterie_doodle} alt="fleur" />
              <p>BILLETERIE</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16"/>
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </Link>            
          </li>
          <li>
            <Link to='/carte' className="links">
              <img src={carte_doodle} alt="forme organique"/>
              <p>CARTE</p>
            </Link>
          </li>
          <li>
            <Link to='/reseau-sociaux' className="links">
              <img src={rs_doodle} alt="mégaphone"/>
              <p>RESEAUX SOCIAUX</p>
            </Link>
          </li>
          <li>
            <Link to='/partenaire' className="links">
              <img src={partenaire_doodle} alt="main qui fait le symbole métal "/>
              <p>PARTENAIRE</p>
            </Link>
          </li>
          <li>
            <Link to='/faq' className="links">
              <img src={FAQ_doodle} alt="forme organique"/>
              <p>FAQ</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

 
export default Navbar;