import { FC } from "react";
import "./input.css"

type TProps = {
  placeholder: string;
}

const Input: FC<TProps> = ({ placeholder }) => {
  return (
    <input className="input" type="text" placeholder={placeholder} />
  );
}

export default Input;