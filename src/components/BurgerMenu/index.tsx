import { NavLink } from "react-router-dom";
import PHONE from "../../assets/image/phone.svg";
import { motion } from 'framer-motion';
import { FC } from "react";
import "./burgermenu.css";

type TProps = {
  open: () => void;
  openBurger: boolean;
}

const menu = [
  {
    id: 1,
    title: "Главная",
    path: "/"
  },
  {
    id: 2,
    title: "О нас",
    path: "/about"
  },
  {
    id: 3,
    title: "Контакты",
    path: "/contact"
  },
  {
    id: 4,
    title: "Поиск",
    path: "/search"
  }
]

const BurgerMenu: FC<TProps> = ({ open, openBurger }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: openBurger ? 1 : 0, x: openBurger ? 0 : '-100%' }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.3 }}
      className="mobile__navigation">
      <ul className="nav">
        {
          menu.map(i =>
            <li onClick={open} key={i.id}>
              <NavLink to={i.path}>{i.title}</NavLink>
            </li>
          )
        }
        <li>
          <a className="navigation__tel" href="tel:+79878878787">
            <img src={PHONE} alt="Иконка телефона" />
            <span>
              +7 (987) 887-87-87
            </span>
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

export default BurgerMenu;