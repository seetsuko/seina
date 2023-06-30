import "./css/Header.css";
import { Link as Scroll } from "react-scroll";
import { Button } from "@mui/material";

export const Header = () => {

  return(
    <header className="App-header">
        <ul className="menu">
          <li>
            <Scroll to="home" smooth>
            <Button
                sx={{fontSize: "2rem",
                    marginTop: 2,
                      "&:hover": {
                      background: "#36bef88d"
                    }
                    }}>Home
              </Button>
            </Scroll>
          </li>
          <li>
            <Scroll to="about-me" smooth>
            <Button
                sx={{ 
                    fontSize: "2rem",
                    marginTop: 2,
                      "&:hover": {
                      background: "#36bef88d"
                    }
                    }}>About Me
              </Button>
            </Scroll>
          </li>
          <li>
            <Scroll to="portfolio" smooth>
              <Button
                sx={{ 
                    fontSize: "2rem",
                    marginTop: 2,
                      "&:hover": {
                      background: "#36bef88d"
                    }
                    }}>Portfolio
              </Button>
            </Scroll>
          </li>
          <li>
            <Scroll to="skill" smooth>
            <Button
                sx={{ 
                    fontSize: "2rem",
                    marginTop: 2,
                      "&:hover": {
                      background: "#36bef88d"
                    }
                    }}>Skill
              </Button>
            </Scroll>
          </li>
        </ul>
    </header>
  );
};