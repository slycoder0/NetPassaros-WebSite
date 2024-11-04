import React, { useState } from 'react';
import './Header.css';
import Logo from './logo2.png'; // Caminho direto a partir da pasta public
import { FaBagShopping, FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Company Logo" />
      </div>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <a href="#" className="nav-link">Início</a>
        <a href="#" className="nav-link">Produtos</a>
        <a href="#" className="nav-link">Quem Somos</a>
      </nav>
      <div className="icons">
        <IoPerson className="icon" />
        <FaMagnifyingGlass className="icon" />
        <FaBagShopping className="icon" />
        <FaBars className="icon menu-icon" onClick={toggleMenu} />
      </div>
    </header>
  );
}
