import { useState } from "react";
import Logo from "../../ui/Logo";
import Burger from "../Burger";
import Navigation from "../Navigation";
import BurgerMenu from "../BurgerMenu";
import { AnimatePresence } from "framer-motion";
import "./header.css";

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
        <AnimatePresence>
          {
          openBurger && <BurgerMenu  open={open} openBurger={openBurger} />
        }  
        </AnimatePresence>
      
      </div>
    </header>
  );
}

export default Header;