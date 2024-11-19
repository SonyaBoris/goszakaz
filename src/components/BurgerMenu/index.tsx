import { NavLink } from "react-router-dom";
import PHONE from "../../assets/image/phone.svg"
import "./burgermenu.css"
import { FC } from "react";

type TProps = {
  open: () => void;
}

const BurgerMenu: FC<TProps> = ({ open }) => {
  return (
    <nav className="mobile__navigation">
      <ul className="nav">
        <li onClick={open}>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li onClick={open}>
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li onClick={open}>
          <NavLink to="/contact">Контакты</NavLink>
        </li>
        <li onClick={open}>
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

export default BurgerMenu;