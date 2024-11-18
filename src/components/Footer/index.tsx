import Logo from "../../ui/Logo"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <Logo />
      <nav>
        <ul className="footer__nav">
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Галерея</a>
          </li>
          <li>
            <a href="#">Новости</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
      <p>ООО “Организация” 2020. Все права защищены</p>
    </footer>
  );
}

export default Footer;