import { NavLink } from "react-router-dom";
import PHONE from "../../assets/image/phone.svg"
import "./navigation.css"

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Контакты</NavLink>
        </li>
        <li>
          <NavLink to="/search">Поиск</NavLink>
        </li>
        <li>
          <a className="navigation__tel" href="tel:+79878878787">
            <img src={PHONE} alt="Иконка телефона" />
            <span>
              +7 (987) 887-87-87
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;