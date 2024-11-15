import Logo from "../../ui/Logo";
import Navigation from "../Navigation";
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header">        
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;