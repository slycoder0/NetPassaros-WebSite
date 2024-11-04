import './Footer.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Logo from './logo2.png'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-title">Contato</h2>
        <p>(11) 2293-6727</p>
        <p>suporte@2rm.com.br</p>
        <p>R. Zabel Burunsuzian, 61 - Vila Gomes Cardim<br/>São Paulo - SP, 03322-060</p>
      </div>
      <div className="footer-logo-section">
        <img src={Logo} alt="Company Logo" className="footer-logo" />
        <div className="footer-socials">
          <a href="#" className="footer-social-link"><FaInstagram /></a>
          <a href="#" className="footer-social-link"><FaFacebook /></a>
          <a href="#" className="footer-social-link"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-title">Navegação</h2>
        <ul className="footer-links">
          <li><a href="#" className="footer-link">Quer comprar em atacado?</a></li>
          <li><a href="#" className="footer-link">Produtos</a></li>
        </ul>
      </div>
    </footer>
  );
}
