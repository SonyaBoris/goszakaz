import { FC } from "react";
import "./burger.css"

type TProps = {
  openBurger: boolean;
  open: () => void;
}

const Burger: FC<TProps> = ({ openBurger, open }) => {
  return (
    <div
      onClick={open}
      className={`burger ${openBurger ? 'burger-active' : ''}`}>
      <span />
    </div>
  );
}

export default Burger;