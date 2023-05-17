import "./css/Header.css";
import { Link as Scroll } from "react-scroll";

export const Header = () => {

  return(
    <header className="App-header">
        <ul className="menu">
          <li><Scroll to="home" smooth>Home</Scroll></li>
          <li><Scroll to="about-me" smooth>About Me</Scroll></li>
          <li>Portfolio</li>
          <li>Skil</li>
        </ul>
    </header>
  );
};