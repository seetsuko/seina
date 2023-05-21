import "../css/Home.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from "react-scroll";
import myPicture from "../picture/my-picture.jpg";


export const Home = () => {
  return(
    <section id="home">
      <div className="home">
        <div className="main">
          <div className="name-container">
            <h1 className="name">Seina</h1>
            <h1 className="initial">Nagato</h1>
          </div>
          <div className="my-picture">
            <img src={myPicture} alt="プロフィール画像" />
          </div>
        </div>
        <p>Welcome and thank you for visiting my website. </p>
        <Scroll to="about-me" smooth>
          <ExpandMoreIcon
            className="next-icon"
            sx={{ fontSize: 50 }}
          />
        </Scroll>
      </div>
    </section>
  );
};