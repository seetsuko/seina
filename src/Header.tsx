import "./css/Header.css"
import { Link as Scroll } from "react-scroll";

export const Header = () => {

  return(
    <header className="App-header">
        <ul className="menu">
          <li>Home</li>
          <Scroll to="about-me"><li>About Me</li></Scroll>
          <li>Portfolio</li>
          <li>Skil</li>
        </ul>
    </header>
  )
}