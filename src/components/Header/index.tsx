import { useState } from "react";
import Logo from "../../ui/Logo";
import Burger from "../Burger";
import Navigation from "../Navigation";
import "./header.css"
import BurgerMenu from "../BurgerMenu";

const Header = () => {

  const [openBurger, setBurgerOpen] = useState(false)

  const open = () => {
    setBurgerOpen(!openBurger)
  }
  return (
    <header>
      <div className="container header">
        <Logo />
        <Navigation />
        <Burger openBurger={openBurger} open={open} />
        {
          openBurger && <BurgerMenu  open={open} />
        }
      </div>
    </header>
  );
}

export default Header;