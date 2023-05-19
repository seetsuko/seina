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
                sx={{color: "#4f3737",
                    fontSize: 60,
                    marginBottom: 3,
                    textTransform: "none",
                    "&:hover": {
                      background: "#e9dbaaa9"
                    }
                    }}>Home
              </Button>
            </Scroll>
          </li>
          <li>
            <Scroll to="about-me" smooth>
            <Button
                sx={{color: "#4f3737",
                    fontSize: 60,
                    marginBottom: 3,
                    textTransform: "none",
                    "&:hover": {
                      background: "#e9dbaaa9"
                    }
                    }}>About Me
              </Button>
            </Scroll>
          </li>
          <li>
            <Scroll to="portfolio" smooth>
              <Button
                sx={{color: "#4f3737",
                    fontSize: 60,
                    marginBottom: 3,
                    textTransform: "none",
                    "&:hover": {
                      background: "#e9dbaaa9"
                    }
                    }}>Portfolio
              </Button>
            </Scroll>
          </li>
          <li>
            <Scroll to="skill" smooth>
            <Button
                sx={{color: "#4f3737",
                    fontSize: 60,
                    marginBottom: 3,
                    textTransform: "none",
                    "&:hover": {
                      background: "#e9dbaaa9"
                    }
                    }}>Skill
              </Button>
            </Scroll>
          </li>
        </ul>
    </header>
  );
};