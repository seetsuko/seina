import "../css/Home.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import myPicture from "../20728.jpg"

export const Home = () => {
  return(
    <div className="home">
      <section id="home">
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
      <ExpandMoreIcon
        className="next-icon"
        sx={{ fontSize: 100 }}
        />
        </section>
    </div>
  )
}