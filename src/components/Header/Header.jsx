// Importação do CSS, logo e ícones
import "./Header.css";
import Logo from '/Logo2.png'; //  direto a partir da pasta public
import { FaBagShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

// Componente Header
export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <a href="#" className="nav-link">Início</a>
        <a href="#" className="nav-link">Produtos</a>
        <a href="#" className="nav-link">Quem Somos</a>
      </nav>
      <div className="logo">
        <img src={Logo} alt="Company Logo" />
      </div>
      <div className="icons">
        <IoPerson className="icon" />
        <FaMagnifyingGlass className="icon" />
        <FaBagShopping className="icon" />
      </div>
    </header>
  );
}
